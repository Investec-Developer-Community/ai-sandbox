import express from 'express';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

const config = {
  client_id: 'mock-client',
  client_secret: 'mock-secret',
  api_key: 'mock-api-key',
  token_url: 'http://localhost:3000/identity/v2/oauth2/token', // Use mock server
  scope: 'accounts'
};

let currentToken = null;

// Serve the main HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Get access token using client_credentials flow
app.post('/api/token', async (req, res) => {
  try {
    console.log('Getting access token using client_credentials flow...');
    
    // Create Basic Auth header
    const auth = Buffer.from(`${config.client_id}:${config.client_secret}`).toString('base64');
    
    const tokenResponse = await axios.post(
      config.token_url,
      `grant_type=client_credentials&scope=${encodeURIComponent(config.scope)}`,
      {
        headers: {
          'Authorization': `Basic ${auth}`,
          'x-api-key': config.api_key,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    
    currentToken = tokenResponse.data;
    console.log('✅ Token received successfully');
    
    res.json({
      success: true,
      token: tokenResponse.data
    });
    
  } catch (error) {
    console.error('❌ Token request failed:', error.response?.data || error.message);
    res.status(400).json({
      success: false,
      error: error.response?.data || error.message
    });
  }
});

// Test API endpoints with the current token
app.post('/api/test', async (req, res) => {
  try {
    if (!currentToken) {
      return res.status(400).json({
        success: false,
        error: 'No access token available. Get a token first.'
      });
    }

    const { endpoint } = req.body;
    let apiUrl = 'http://localhost:3000';

    // Map endpoint choices to actual URLs
    switch (endpoint) {
      case 'accounts':
        apiUrl = 'http://localhost:3000/za/pb/v1/accounts';
        break;
      case 'balance':
        apiUrl = 'http://localhost:3000/za/pb/v1/accounts/12345/balance';
        break;
      case 'transactions':
        apiUrl = 'http://localhost:3000/za/pb/v1/accounts/12345/transactions';
        break;
      default:
        apiUrl = endpoint; // Custom URL
    }

    console.log(`Making API request to: ${apiUrl}`);

    const apiResponse = await axios.get(apiUrl, {
      headers: {
        'Authorization': `Bearer ${currentToken.access_token}`,
        'x-api-key': config.api_key
      }
    });

    res.json({
      success: true,
      data: apiResponse.data
    });

  } catch (error) {
    console.error('❌ API request failed:', error.response?.data || error.message);
    res.status(400).json({
      success: false,
      error: error.response?.data || error.message
    });
  }
});

// Get configuration for the frontend
app.get('/api/config', (req, res) => {
  res.json({
    client_id: config.client_id,
    token_url: config.token_url,
    scope: config.scope,
    flow_type: 'client_credentials'
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('🚀 Investec Token Playground Web Server (Client Credentials Flow)');
  console.log(`📱 Web UI: http://localhost:${PORT}`);
  console.log(`🔧 API Base: http://localhost:3000`);
  console.log(`📚 Mock Server should be running on port 3000`);
  console.log('');
  console.log('This playground demonstrates the correct Investec API client_credentials flow:');
  console.log('1. Get access token using Basic Auth + x-api-key');
  console.log('2. Use token to make authenticated API requests');
  console.log('3. Test with mock Investec API endpoints');
});
