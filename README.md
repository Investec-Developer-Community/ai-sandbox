# Investec Mock Server

Local Investec API server with realistic South African banking data, proper OAuth authentication, and chaos testing capabilities. Perfect for development, testing, and AI-assisted coding.

## ✨ Features

- **🏦 Realistic Banking Data** - South African transaction patterns, multiple account types
- **🔐 OAuth Client Credentials** - Proper Investec authentication flow implementation
- **📚 Swagger Documentation** - Interactive API docs at `/docs`
- **🌪️ Chaos Testing** - Simulate latency, errors, and rate limits
- **🐳 Docker Ready** - One-command deployment
- **🤖 AI-Friendly** - Works seamlessly with ChatGPT, Claude, and Copilot prompts

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) 18+
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Install and Run
```bash
npm install
npm start
```

The server runs at **http://localhost:3000** by default.

### Custom Port
```bash
npm start -- --port 4000
```

## 📡 API Endpoints

### OAuth Authentication
```bash
POST /identity/v2/oauth2/token
```
**Headers:**
- `Authorization: Basic {base64(client_id:client_secret)}`
- `x-api-key: {api_key}`
- `Content-Type: application/x-www-form-urlencoded`

**Body:**
```
grant_type=client_credentials&scope=accounts
```

### Banking APIs
```bash
GET  /za/pb/v1/accounts                     # List accounts
GET  /za/pb/v1/accounts/{id}/balance        # Account balance  
GET  /za/pb/v1/accounts/{id}/transactions   # Transaction history
GET  /health                                # Server health check
GET  /docs                                  # Swagger UI documentation
```

### Legacy Support
```bash
GET  /accounts                              # Redirects to /za/pb/v1/accounts
```

## 🧪 Testing

### Basic Test
```bash
# 1. Get access token
curl -X POST http://localhost:3000/identity/v2/oauth2/token \
  -H "Authorization: Basic bW9jay1jbGllbnQ6bW9jay1zZWNyZXQ=" \
  -H "x-api-key: mock-api-key" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=client_credentials&scope=accounts"

# 2. Use token to call API
curl -H "Authorization: Bearer {access_token}" \
     -H "x-api-key: mock-api-key" \
     http://localhost:3000/za/pb/v1/accounts
```

### Mock Credentials
For testing, use these mock credentials:
- **Client ID**: `mock-client`
- **Client Secret**: `mock-secret`  
- **API Key**: `mock-api-key`

## 🌪️ Chaos Testing

Simulate real-world conditions by setting environment variables:

```bash
# Add 500ms latency to all requests
CHAOS_LATENCY_MS=500 npm start

# Cause 10% of requests to fail with 500 errors
CHAOS_ERROR_RATE=0.1 npm start

# Combine both
CHAOS_LATENCY_MS=1000 CHAOS_ERROR_RATE=0.15 npm start
```

Check current chaos settings:
```bash
curl http://localhost:3000/health
```

## 🐳 Docker Usage

### Quick Start
```bash
docker-compose up --build
```

### Custom Configuration
```yaml
# docker-compose.yml
services:
  mock-server:
    environment:
      - CHAOS_LATENCY_MS=500
      - CHAOS_ERROR_RATE=0.05
    ports:
      - "3000:3000"
```

### Build Custom Image
```bash
docker build -t investec-mock-server .
docker run -p 3000:3000 investec-mock-server
```

## 🔧 Configuration

### Environment Variables
| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `CHAOS_LATENCY_MS` | Artificial delay in milliseconds | `0` |
| `CHAOS_ERROR_RATE` | Error rate (0.0 to 1.0) | `0` |

### Sample Data

The server includes realistic South African banking data:
- **Current Account**: Demo transactions with local merchants
- **Savings Account**: Typical saving patterns
- **Transaction Categories**: Groceries, fuel, restaurants, transfers
- **Currency**: South African Rand (ZAR)

## 🤖 AI Integration

This mock server works perfectly with AI assistants. All prompts in the [prompt pack](../prompt-pack/) are designed to work with this server.

**Example with ChatGPT:**
1. Copy any prompt from `../prompt-pack/prompts.md`
2. The prompt includes the correct base URL: `http://localhost:3000`
3. Get working code that connects to this mock server immediately!

## 📚 Swagger Specification

The server is built from official Investec Swagger specifications located in:
```
../Official swagger Docs/swagger SA PB Account Information.json
```

To sync with the latest specs:
```bash
npm run sync-swagger
```

## 🔍 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill existing process
lsof -ti:3000 | xargs kill -9
# Or use different port
npm start -- --port 4000
```

**OAuth errors:**
- Ensure you're using the correct mock credentials
- Check that you're including both `Authorization` and `x-api-key` headers
- Verify `Content-Type: application/x-www-form-urlencoded`

**API call failures:**
- Make sure you got a valid access token first
- Include both `Authorization: Bearer {token}` and `x-api-key` headers

### Debug Mode
```bash
DEBUG=true npm start
```

## 📄 Response Formats

All responses follow the official Investec API structure:

```json
{
  "data": [...],
  "links": {
    "self": "https://openapisandbox.investec.com/za/pb/v1/accounts"
  },
  "meta": {
    "totalPages": 1
  }
}
```

## 🤝 Contributing

1. **Add realistic data** - Enhance transaction patterns
2. **Improve error handling** - Add more edge cases  
3. **Update Swagger sync** - Keep API specs current
4. **Test scenarios** - Add more chaos testing options

## 📞 Support

For issues with the mock server:
1. Check the [troubleshooting section](#-troubleshooting)
2. Review server logs for error details
3. Test with the provided curl examples
4. Open an issue if problems persist

The mock server provides a complete, realistic Investec API experience for development and testing! 🚀
docker-compose up --build
```

### Or Run with Docker CLI
```
docker build -t investec/mock-api .
docker run -p 3000:3000 investec/mock-api
```

---

## Chaos Toggles

Simulate real-world API conditions:
- **Latency:** Set `CHAOS_LATENCY_MS` (e.g., `500` for 500ms delay)
- **Error Rate:** Set `CHAOS_ERROR_RATE` (e.g., `0.1` for 10% errors)

Example:
```
CHAOS_LATENCY_MS=500 CHAOS_ERROR_RATE=0.1 npm start
```

---

## API Reference
- All endpoints and responses are generated from the latest Investec Swagger spec.
- Supports all documented methods, parameters, and error codes.

---

## Contributing

1. Fork this repo and create a feature branch.
2. Make your changes and add tests if needed.
3. Run `npm run sync-swagger` to ensure the mock matches the latest API.
4. Submit a pull request with a clear description.

---

## License
MIT

---

## Support & Feedback
- Open an issue for bugs or feature requests.
- For API questions, see the [Investec Developer Portal](https://developer.investec.com/).

---

## Related Projects
- [Prompt Pack](../prompt-pack): AI prompts for rapid prototyping
- [Token Playground](../token-playground): OAuth flow CLI & web tools
- [Chaos Toggles](../chaos-toggles): Middleware for simulating API chaos
