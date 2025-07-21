# Chaos Toggles

Simulate real-world network conditions, latency, and errors to build resilient Investec API integrations. Test how your application handles edge cases before deploying to production.

## 🎯 Why Chaos Testing?

Banking APIs must be rock-solid. This middleware helps you test:
- **Network Latency** - Slow connections, mobile networks
- **Service Errors** - Temporary failures, rate limits  
- **Edge Cases** - Intermittent issues, partial outages
- **Error Recovery** - Retry logic, fallback mechanisms

## ⚡ Quick Start

The chaos toggles are automatically integrated into the mock server. Just set environment variables:

```bash
# Add 500ms latency to all requests
CHAOS_LATENCY_MS=500 npm start

# Cause 10% of requests to fail randomly  
CHAOS_ERROR_RATE=0.1 npm start

# Combine for realistic testing
CHAOS_LATENCY_MS=1000 CHAOS_ERROR_RATE=0.15 npm start
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Range | Example |
|----------|-------------|-------|---------|
| `CHAOS_LATENCY_MS` | Artificial delay in milliseconds | 0-10000 | `500` |
| `CHAOS_ERROR_RATE` | Probability of random errors | 0.0-1.0 | `0.1` (10%) |

### Real-World Scenarios

```bash
# Slow mobile network (2G/3G)
CHAOS_LATENCY_MS=2000 CHAOS_ERROR_RATE=0.05 npm start

# Unstable connection
CHAOS_LATENCY_MS=800 CHAOS_ERROR_RATE=0.2 npm start

# Minor network issues
CHAOS_LATENCY_MS=300 CHAOS_ERROR_RATE=0.02 npm start
```

## 🧪 Testing Your Code

### Check Current Settings
```bash
curl http://localhost:3000/health
```

Response includes chaos configuration:
```json
{
  "status": "healthy",
  "timestamp": "2025-07-21T10:30:00.000Z",
  "chaos": {
    "latency": "500ms",
    "errorRate": "10%"
  }
}
```

### Test Error Handling

With chaos enabled, test your application's resilience:

```javascript
// Example: Robust API call with retry logic
async function callInvestecAPI(url, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'x-api-key': apiKey
        },
        timeout: 5000 // 5 second timeout
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      return await response.json();
      
    } catch (error) {
      console.log(`Attempt ${attempt} failed:`, error.message);
      
      if (attempt === maxRetries) {
        throw new Error(`Failed after ${maxRetries} attempts`);
      }
      
      // Exponential backoff
      const delay = Math.pow(2, attempt) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}
```

## 🛠️ Implementation Details

The chaos middleware is implemented as Express middleware in [`index.js`](index.js):

```javascript
// Adds configurable latency
if (latencyMs > 0) {
  await new Promise(resolve => setTimeout(resolve, latencyMs));
}

// Randomly injects errors
if (Math.random() < errorRate) {
  return res.status(500).json({ 
    error: 'chaos_error',
    message: 'Simulated error for testing' 
  });
}
```

## 🎯 Best Practices

### 1. **Start Small**
Begin with low error rates (1-5%) and moderate latency (100-500ms)

### 2. **Test Gradually**  
Increase chaos levels progressively:
```bash
# Level 1: Minor issues
CHAOS_LATENCY_MS=200 CHAOS_ERROR_RATE=0.02

# Level 2: Noticeable problems  
CHAOS_LATENCY_MS=800 CHAOS_ERROR_RATE=0.08

# Level 3: Significant issues
CHAOS_LATENCY_MS=2000 CHAOS_ERROR_RATE=0.2
```

### 3. **Monitor Logs**
Watch application logs to see how your code handles errors

### 4. **Test User Experience**
Consider how latency and errors affect end users

## 🤖 AI Integration

Use chaos testing in AI prompts for robust code generation:

```markdown
"Include error handling that works with chaos testing. 
The mock server may inject 500ms latency and 10% error rate.
Show retry logic with exponential backoff."
```

## 🔍 Common Use Cases

### OAuth Token Refresh
Test token expiration and refresh logic under network stress

### Transaction Processing  
Ensure payment flows handle temporary failures gracefully

### Real-time Notifications
Test webhook delivery with network issues

### Mobile Applications
Simulate poor mobile network conditions

## 📊 Monitoring

Track how your application performs under chaos:

```bash
# Monitor success/failure rates
grep "API call" app.log | grep -c "success"
grep "API call" app.log | grep -c "failed"

# Check response times
curl -w "@curl-format.txt" http://localhost:3000/za/pb/v1/accounts
```

## 🤝 Contributing

Enhance chaos testing by adding:
- Different error types (timeouts, network errors)
- More realistic failure patterns
- Circuit breaker simulation
- Rate limiting scenarios

Build bulletproof banking applications with chaos engineering! 💪
