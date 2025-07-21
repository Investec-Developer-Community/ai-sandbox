# AI Prompt Pack for Investec Sandbox

## Getting Started

Copy and paste these prompts into ChatGPT, Claude, Copilot, or any AI assistant to instantly scaffold your Investec API integration or Programmable Banking card code. Each prompt includes the context and examples your AI needs to give you working code.

---

## 🏦 Programmable Banking Card Prompts

### 1. Build a simple spending tracker for Investec card
```
I'm using the Investec Programmable Banking API. Help me build a Node.js script that:
1. Fetches my card transactions from the last 7 days using GET /za/pb/v1/accounts/{id}/transactions
2. Categorizes spending by merchant type
3. Sends me a daily summary via email

Authentication pattern (client_credentials flow):
const auth = Buffer.from('client_id:client_secret').toString('base64');
const tokenResp = await fetch('https://openapisandbox.investec.com/identity/v2/oauth2/token', {
  method: 'POST',
  headers: {
    'Authorization': `Basic ${auth}`,
    'x-api-key': 'your-api-key',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'grant_type=client_credentials&scope=accounts'
});

Use these mock credentials for testing:
- client_id: mock-client
- client_secret: mock-secret
- api_key: mock-api-key
- base_url: http://localhost:3000

Include error handling for rate limits and token refresh. Show me the complete working code with comments.
```

### 2. Create a card spending limit alert system
```
Build a Python script using the Investec Programmable Banking API that:
1. Monitors real-time card transactions using GET /za/pb/v1/accounts/{id}/transactions
2. Tracks spending against monthly budgets by category (groceries, fuel, entertainment)
3. Sends WhatsApp alerts when I'm 80% of budget in any category
4. Includes a "pause card" function if spending exceeds limits

Correct Investec authentication (client_credentials):
import base64
import requests

def get_access_token():
    auth = base64.b64encode(f"{client_id}:{client_secret}".encode()).decode()
    response = requests.post(
        'https://openapisandbox.investec.com/identity/v2/oauth2/token',
        headers={
            'Authorization': f'Basic {auth}',
            'x-api-key': api_key,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data='grant_type=client_credentials&scope=accounts'
    )
    return response.json()['access_token']

Mock environment:
- client_id: mock-client
- client_secret: mock-secret
- api_key: mock-api-key
- API base: http://localhost:3000

Show complete code with proper async handling and webhook setup.
```

### 3. Auto-save spare change from card purchases
```
Help me code an Investec card "spare change" feature that:
1. Rounds up every card purchase to the nearest R10
2. Transfers the difference to my savings account
3. Tracks total savings accumulated
4. Sends monthly progress reports

Correct API endpoints to use:
- GET /za/pb/v1/accounts/{accountId}/transactions for card purchases
- POST /za/pb/v1/accounts/{accountId}/transfers for savings transfers

Authentication using client_credentials flow:
const getToken = async () => {
  const auth = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
  const response = await fetch('https://openapisandbox.investec.com/identity/v2/oauth2/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'x-api-key': api_key,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials&scope=accounts'
  });
  return response.json();
};

Mock credentials: 
- client_id: mock-client
- client_secret: mock-secret
- api_key: mock-api-key

Include proper OAuth flow and error handling. Language: JavaScript/Node.js.
```

---

## 🔧 Quick Setup & Testing Prompts

### 4. Spin up local Investec mock server with realistic data
```
Set up a local mock server for Investec APIs with:
1. Realistic South African banking transaction data (groceries, fuel, restaurants)
2. Multiple account types (current, savings, credit card)
3. Programmable Banking card transaction webhooks
4. OAuth client_credentials token endpoints that work with Basic Auth + x-api-key

Use the correct Investec API endpoints:
- GET /za/pb/v1/accounts
- GET /za/pb/v1/accounts/{id}/balance
- GET /za/pb/v1/accounts/{id}/transactions

Base URL: http://localhost:3000
Include Docker setup and chaos testing (latency/errors).
```

### 5. Generate OAuth client_credentials flow for Investec sandbox
```
Create a complete OAuth 2.0 client_credentials implementation for Investec API testing:
1. Token request using Basic Auth + x-api-key headers
2. Proper grant_type=client_credentials flow
3. Automatic token refresh handling
4. Error handling for expired/invalid tokens

Correct authentication pattern:
const auth = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const response = await fetch('https://openapisandbox.investec.com/identity/v2/oauth2/token', {
  method: 'POST',
  headers: {
    'Authorization': `Basic ${auth}`,
    'x-api-key': apiKey,
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'grant_type=client_credentials&scope=accounts'
});

Mock credentials:
- client_id: mock-client
- client_secret: mock-secret
- api_key: mock-api-key

Show both web-based and CLI approaches. Include testing examples.
```

---

## 💳 Real-World Banking Use Cases

### 6. Build a merchant spending analysis dashboard
```
Create a web dashboard that uses Investec Programmable Banking API to:
1. Show spending patterns by merchant and location
2. Compare month-over-month spending trends
3. Identify unusual spending (fraud detection)
4. Export spending reports for tax purposes

Tech stack: React frontend, Node.js backend
Include charts using Chart.js or similar
Mock API should return 6 months of realistic SA transaction data
Base URL: http://localhost:3000/api
```

### 7. Automate bill payments with smart scheduling
```
Build a bill payment automation system using Investec API:
1. Schedule recurring payments (rent, insurance, utilities)
2. Check account balance before payments
3. Handle failed payments with retry logic
4. Send notifications for successful/failed payments
5. Pause payments if balance is too low

Include proper error handling for insufficient funds, network errors, API limits.
Use mock transfers endpoint and realistic account balances.
Language: Python with proper async/await patterns.
```

### 8. Create a family spending allowance system
```
Code a family allowance management system using Investec Programmable Banking:
1. Set up virtual "wallets" for family members
2. Track individual spending against allowances
3. Send weekly spending summaries to parents
4. Implement spending controls (block certain merchant types)
5. Top-up allowances automatically each month

Mock environment should include multiple linked accounts.
Show both parent dashboard and family member notifications.
Include proper authentication and authorization patterns.
```

---

## 🛠️ Debugging & Troubleshooting Prompts

### 9. Debug common Investec API issues
```
Help me troubleshoot these common Investec API problems:
1. "Invalid token" errors - show proper token refresh implementation
2. Rate limiting (429 errors) - implement exponential backoff
3. Webhook payload validation - verify signatures and handle duplicates
4. Transaction pagination - handle large result sets properly

Include logging patterns and error recovery strategies.
Show working examples for each scenario using mock server at http://localhost:3000.
```

### 10. Test API error handling with chaos simulation
```
Set up comprehensive error testing for my Investec integration:
1. Simulate 500ms latency and 10% error rate using CHAOS_LATENCY_MS=500 CHAOS_ERROR_RATE=0.1
2. Test timeout handling for slow responses
3. Verify retry logic for temporary failures
4. Test graceful degradation when API is unavailable

Show client code that handles all these scenarios properly.
Include monitoring and alerting setup for production use.
```

---

## 📚 Learning & Development Prompts

### 11. Explain Investec API authentication step-by-step
```
I'm new to banking APIs. Walk me through Investec's authentication using the client_credentials flow:
1. Explain the OAuth 2.0 client_credentials flow in simple terms
2. Show exactly what happens at each step with Investec's requirements
3. Provide working code examples for each step
4. Explain the Basic Auth + x-api-key pattern specific to Investec
5. Show how to test authentication locally

Step-by-step process:
1. Create Basic Auth header from client_id:client_secret
2. POST to https://openapisandbox.investec.com/identity/v2/oauth2/token
3. Include x-api-key header and grant_type=client_credentials
4. Use returned access_token in API calls with Bearer authentication

Mock credentials and include troubleshooting tips for beginners.
Make it tutorial-style with clear explanations of why this flow is used.
```

### 12. Learn banking API best practices with examples
```
Teach me banking API best practices using Investec as an example:
1. Data security and PCI compliance basics
2. Proper error handling for financial operations
3. Idempotency for payment operations
4. Audit logging and transaction tracking
5. Testing strategies for financial applications

Include code examples and explain the "why" behind each practice.
Use realistic scenarios with the mock server at http://localhost:3000.
```

---

## 🔄 Advanced Integration Prompts

### 13. Build event-driven architecture with Investec webhooks
```
Design an event-driven system using Investec Programmable Banking webhooks:
1. Set up webhook endpoints for transaction events
2. Implement event sourcing pattern for transaction history
3. Build real-time notifications for spending patterns
4. Add event replay capability for debugging
5. Include proper webhook signature verification

Use Node.js with Express, include proper queue handling with Redis.
Mock webhook events should include card transactions, transfers, account updates.
```

### 14. Create multi-account portfolio tracking system
```
Build a comprehensive portfolio tracker using Investec API:
1. Aggregate data from multiple Investec accounts
2. Track investment performance across account types
3. Calculate net worth and cash flow trends
4. Generate automated investment reports
5. Include currency conversion for foreign investments

Mock data should include savings, current accounts, and investment accounts.
Use proper data modeling and caching strategies.
Include export to Excel/PDF functionality.
```

---

Feel free to adapt these prompts for your preferred AI agent or specific use case. Each prompt includes enough context for AI assistants to generate working, production-ready code.
