# Investec Token Playground

Interactive tool for testing and understanding Investec's OAuth 2.0 **client_credentials** flow. This demonstrates the correct authentication pattern used by Investec APIs.

## ✨ Features

- **Client Credentials Flow**: Demonstrates the correct OAuth flow for machine-to-machine authentication
- **Interactive Web UI**: Test authentication and API calls through a web interface
- **CLI Tool**: Command-line interface for automated testing
- **Realistic API Testing**: Make actual calls to mock Investec endpoints
- **Educational**: Clear explanations of each step in the authentication process

## 🚀 Quick Start

### Start the Web Interface

```bash
npm install
npm start
```

Open http://localhost:3001 in your browser.

### Use the CLI Tool

```bash
npm install
node cli.js
```

## 📖 How It Works

### Client Credentials Flow

The client_credentials flow is used for machine-to-machine authentication. This is the correct flow for Investec API integration:

1. **Request Token**: POST to `/identity/v2/oauth2/token` with:
   - `Authorization: Basic {base64(client_id:client_secret)}`
   - `x-api-key: {your-api-key}`
   - `grant_type=client_credentials&scope=accounts`

2. **Use Token**: Include in API requests:
   - `Authorization: Bearer {access_token}`
   - `x-api-key: {your-api-key}`

### Authentication Pattern

```javascript
// Get access token
const auth = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const tokenResponse = await fetch('https://openapisandbox.investec.com/identity/v2/oauth2/token', {
  method: 'POST',
  headers: {
    'Authorization': `Basic ${auth}`,
    'x-api-key': apiKey,
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'grant_type=client_credentials&scope=accounts'
});

// Use token for API calls
const apiResponse = await fetch('https://openapisandbox.investec.com/za/pb/v1/accounts', {
  headers: {
    'Authorization': `Bearer ${token.access_token}`,
    'x-api-key': apiKey
  }
});
```

## 🔧 Configuration

The playground uses mock credentials for testing:

- **Client ID**: `mock-client`
- **Client Secret**: `mock-secret`
- **API Key**: `mock-api-key`
- **Token URL**: `https://openapisandbox.investec.com/identity/v2/oauth2/token`
- **Scope**: `accounts`

## 🧪 Testing Endpoints

The playground can test these mock API endpoints:

- `GET /za/pb/v1/accounts` - List accounts
- `GET /za/pb/v1/accounts/{id}/balance` - Account balance
- `GET /za/pb/v1/accounts/{id}/transactions` - Account transactions

## 🎯 Use Cases

### For Developers
- Understand Investec's authentication flow
- Test API integration before implementing
- Debug authentication issues
- Learn OAuth 2.0 best practices

### For AI Assistants
- Reference implementation for code generation
- Correct authentication patterns
- Working examples for copy-paste
- Error handling patterns

## 📊 Mock Server Integration

This playground works with the mock server running on port 3000:

```bash
# Start mock server first
cd ../mock-server
npm start

# Then start token playground
cd ../token-playground
npm start
```

## 🔍 Troubleshooting

### Common Issues

1. **"No access token available"**
   - Click "Get Access Token" first
   - Check that mock server is running

2. **API request fails**
   - Ensure mock server is running on port 3000
   - Check console for detailed error messages

3. **Token request fails**
   - Check network connection
   - Verify mock server has OAuth endpoints

### Debug Mode

Set environment variables for verbose logging:

```bash
DEBUG=true npm start
```

## 🎓 Learning Resources

- [OAuth 2.0 Client Credentials Flow](https://tools.ietf.org/html/rfc6749#section-4.4)
- [Investec API Documentation](https://developer.investec.com/)
- [Banking API Security Best Practices](https://openbanking.atlassian.net/wiki/spaces/DZ/pages/83919096/Open+Banking+Security+Profile+-+Implementer+s+Draft+v1.1.2)

This playground provides a complete, working example of Investec API authentication that you can study, modify, and integrate into your own applications.
