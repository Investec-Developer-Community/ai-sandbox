#!/usr/bin/env node

import inquirer from 'inquirer';
import axios from 'axios';

const config = {
  client_id: 'mock-client',
  client_secret: 'mock-secret',
  api_key: 'mock-api-key',
  token_url: 'http://localhost:3000/identity/v2/oauth2/token', // Use mock server
  scope: 'accounts'
};

async function main() {
  console.log('Investec OAuth Token Playground (CLI) - Client Credentials Flow');
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What do you want to do?',
      choices: [
        'Get access token (client_credentials)',
        'Test API with token',
        'Exit'
      ]
    }
  ]);

  if (action === 'Get access token (client_credentials)') {
    try {
      console.log('Getting access token using client_credentials flow...');
      
      // Create Basic Auth header
      const auth = Buffer.from(`${config.client_id}:${config.client_secret}`).toString('base64');
      
      const tokenResp = await axios.post(config.token_url, 
        'grant_type=client_credentials&scope=' + encodeURIComponent(config.scope),
        {
          headers: {
            'Authorization': `Basic ${auth}`,
            'x-api-key': config.api_key,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
      
      console.log('✅ Access Token:', tokenResp.data.access_token);
      console.log('Token Type:', tokenResp.data.token_type);
      console.log('Expires In:', tokenResp.data.expires_in + ' seconds');
      console.log('Scope:', tokenResp.data.scope);
      
      // Store token for API test
      global.accessToken = tokenResp.data.access_token;
      
    } catch (error) {
      console.error('❌ Token request failed:', error.response?.data || error.message);
    }
  } else if (action === 'Test API with token') {
    if (!global.accessToken) {
      console.log('❌ No access token available. Get a token first.');
      return;
    }
    
    const { apiEndpoint } = await inquirer.prompt([
      { 
        type: 'list', 
        name: 'apiEndpoint', 
        message: 'Which API endpoint to test?',
        choices: [
          'GET /za/pb/v1/accounts',
          'GET /za/pb/v1/accounts/{id}/balance',
          'Custom endpoint'
        ]
      }
    ]);
    
    try {
      let apiUrl = 'http://localhost:3000';
      
      if (apiEndpoint === 'Custom endpoint') {
        const { customUrl } = await inquirer.prompt([
          { type: 'input', name: 'customUrl', message: 'Enter API endpoint URL:' }
        ]);
        apiUrl = customUrl;
      } else if (apiEndpoint === 'GET /za/pb/v1/accounts') {
        apiUrl = 'http://localhost:3000/za/pb/v1/accounts';
      } else if (apiEndpoint === 'GET /za/pb/v1/accounts/{id}/balance') {
        apiUrl = 'http://localhost:3000/za/pb/v1/accounts/12345/balance';
      }
      
      console.log(`Making API request to: ${apiUrl}`);
      
      const apiResp = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer ${global.accessToken}`,
          'x-api-key': config.api_key
        }
      });
      
      console.log('✅ API Response:', JSON.stringify(apiResp.data, null, 2));
      
    } catch (error) {
      console.error('❌ API request failed:', error.response?.data || error.message);
    }
  } else {
    process.exit(0);
  }
}

main();
