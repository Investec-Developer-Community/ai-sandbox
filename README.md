# Investec AI-Friendly Developer Sandbox

<div align="center">

![Investec Logo](https://developer.investec.com/assets/images/investec-logo.svg)

**A complete developer toolkit for building with Investec APIs using AI assistants like Claude, ChatGPT, and Copilot**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/docker-supported-blue)](https://www.docker.com/)
[![AI Ready](https://img.shields.io/badge/AI%20Ready-ChatGPT%20%7C%20Claude%20%7C%20Copilot-purple)](https://github.com/investec-developer-community/ai-sandbox)

[Quick Start](#-quick-start) • [Documentation](#-documentation) • [AI Prompts](#-ai-prompts) • [Examples](#-examples) • [Community](#-community)

</div>

---

## 🎯 What This Sandbox Provides

Get from **idea to working Investec integration** in minutes, not hours. This sandbox includes everything you need to build production-ready banking applications using AI assistants:

### 🤖 **AI-Ready Prompts** 
14 comprehensive prompts for real banking scenarios - copy-paste into ChatGPT, Claude, or Copilot for instant working code

### 🖥️ **Complete Mock Server**
Local Investec API server with realistic South African banking data, proper OAuth, and chaos testing

### 🔐 **Interactive OAuth Playground**
Visual web interface + CLI tool demonstrating the correct Investec client_credentials authentication flow

### 🌪️ **Chaos Testing**
Simulate latency, errors, and rate limits to build robust applications

---

## 🚀 Quick Start (5 Minutes)

### Prerequisites
- [Node.js](https://nodejs.org/) 18+ 
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (optional)

### 1. Clone the Repository
```bash
git clone https://github.com/investec-developer-community/ai-sandbox.git
cd ai-sandbox
```

### 2. Start the Mock Server
```bash
cd mock-server
npm install
npm start
```
🎉 Your mock Investec API is now running at `http://localhost:3000` with:
- Realistic account and transaction data
- OAuth client_credentials endpoint
- Swagger UI docs at `/docs`
- Health monitoring at `/health`

### 3. Try the OAuth Playground
```bash
# In a new terminal
cd ../token-playground
npm install
npm run web
```
🎉 Open `http://localhost:3001` for an interactive OAuth flow walkthrough

### 4. Use AI Prompts
1. Open [`prompt-pack/prompts.md`](prompt-pack/prompts.md)
2. Copy any prompt into ChatGPT, Claude, or Copilot
3. Get instant, working Investec integration code!

---

## 📦 What's Included

<table>
<tr>
<td width="50%">

### 🤖 AI Prompt Pack
**14 production-ready prompts** covering:
- Programmable Banking cards
- Real-world banking scenarios  
- OAuth setup and testing
- Error handling and debugging
- Advanced integration patterns

[📁 Browse all prompts](prompt-pack/prompts.md)

</td>
<td width="50%">

### 🖥️ Mock Server
**Local Investec API** featuring:
- Realistic banking data
- Proper OAuth client_credentials flow
- Swagger UI documentation
- Chaos testing capabilities
- Docker support

[📁 View mock server docs](mock-server/README.md)

</td>
</tr>
<tr>
<td width="50%">

### 🔐 Token Playground
**Master OAuth 2.0** with:
- Interactive web interface
- Step-by-step flow visualization
- CLI tool for automation
- Educational explanations

[📁 Explore OAuth playground](token-playground/README.md)

</td>
<td width="50%">

### 🌪️ Chaos Toggles
**Test resilience** using:
- Configurable latency simulation
- Random error injection
- Environment-based controls
- Production-ready patterns

[📁 Learn about chaos testing](chaos-toggles/README.md)

</td>
</tr>
</table>

---

## 🎓 Perfect For

<table>
<tr>
<td align="center" width="25%">
<img src="https://cdn-icons-png.flaticon.com/512/2104/2104069.png" width="64" height="64" alt="Developers"/>
<br><strong>Fintech Developers</strong>
<br><small>Building Investec integrations</small>
</td>
<td align="center" width="25%">
<img src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" width="64" height="64" alt="Hackathon"/>
<br><strong>Hackathon Teams</strong>
<br><small>Rapid banking app prototyping</small>
</td>
<td align="center" width="25%">
<img src="https://cdn-icons-png.flaticon.com/512/4712/4712139.png" width="64" height="64" alt="AI"/>
<br><strong>AI Enthusiasts</strong>
<br><small>Using ChatGPT/Claude for coding</small>
</td>
<td align="center" width="25%">
<img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" width="64" height="64" alt="Students"/>
<br><strong>Banking API Learners</strong>
<br><small>Understanding financial APIs</small>
</td>
</tr>
</table>

---

## 💡 Example Use Cases

### 🎯 **Instant AI-Generated Code**
```markdown
Prompt: "Build a Python spending tracker using Investec API that monitors card transactions and sends alerts when monthly budget is exceeded"

Result: Complete working Python application with proper authentication, error handling, and webhooks
```

### 💳 **Programmable Banking Cards**
- **Spending Trackers** - Monitor transactions by category
- **Budget Alerts** - WhatsApp notifications for overspending  
- **Spare Change** - Round up purchases, save the difference
- **Family Allowances** - Manage spending limits for family members

### 🏦 **Real Banking Applications**
- **Bill Automation** - Smart payment scheduling with balance checks
- **Merchant Analysis** - Dashboard for spending patterns and trends
- **Multi-Account** - Portfolio tracking across different account types
- **Fraud Detection** - Alert systems for unusual spending patterns

---

## 🔧 Technical Details

### Supported Investec APIs
- **Personal Banking**: Account information, transactions, balances
- **Programmable Banking**: Card controls, transaction monitoring
- **Foreign Exchange**: Multi-currency operations  
- **Business Banking**: Commercial account management

### Authentication
- **OAuth 2.0 Client Credentials** flow (correct for Investec APIs)
- **Basic Authentication** with client_id:client_secret
- **API Key** validation via x-api-key header
- **Token refresh** handling and error recovery

### API Endpoints
```
POST /identity/v2/oauth2/token           # OAuth authentication
GET  /za/pb/v1/accounts                  # List accounts
GET  /za/pb/v1/accounts/{id}/balance     # Account balance
GET  /za/pb/v1/accounts/{id}/transactions # Transaction history
```

---

## 📚 Documentation

| Component | Description | Quick Link |
|-----------|-------------|------------|
| **Getting Started** | Setup instructions and overview | [Main README](README.md) |
| **AI Prompts** | 14 ready-to-use prompts for AI assistants | [Prompt Pack](prompt-pack/README.md) |
| **Mock Server** | Local Investec API with realistic data | [Mock Server Guide](mock-server/README.md) |
| **OAuth Playground** | Interactive authentication learning tool | [OAuth Guide](token-playground/README.md) |
| **Chaos Testing** | Resilience testing and error simulation | [Chaos Guide](chaos-toggles/README.md) |
| **API Alignment** | How sandbox matches real Investec APIs | [API Alignment](API_ALIGNMENT.md) |

---

## 🛠️ Advanced Usage

### Docker Deployment
```bash
cd mock-server
docker-compose up --build
```

### Chaos Testing
```bash
# Simulate 500ms latency and 10% error rate
CHAOS_LATENCY_MS=500 CHAOS_ERROR_RATE=0.1 npm start
```

### Custom Configuration
```javascript
// Configure for your environment
const config = {
  client_id: 'your-client-id',
  client_secret: 'your-client-secret', 
  api_key: 'your-api-key',
  base_url: 'https://openapisandbox.investec.com'
};
```

---

## 🎯 AI Prompts Quick Reference

| Scenario | Prompt | AI Assistant |
|----------|--------|--------------|
| **Spending Tracker** | [Prompt #1](prompt-pack/prompts.md#1-build-a-simple-spending-tracker) | ChatGPT, Claude, Copilot |
| **Budget Alerts** | [Prompt #2](prompt-pack/prompts.md#2-create-a-card-spending-limit-alert-system) | ChatGPT, Claude, Copilot |
| **OAuth Setup** | [Prompt #5](prompt-pack/prompts.md#5-generate-oauth-client_credentials-flow) | ChatGPT, Claude, Copilot |
| **Bill Automation** | [Prompt #7](prompt-pack/prompts.md#7-automate-bill-payments) | ChatGPT, Claude, Copilot |
| **API Debugging** | [Prompt #9](prompt-pack/prompts.md#9-debug-common-investec-api-issues) | ChatGPT, Claude, Copilot |
| **Learning Guide** | [Prompt #11](prompt-pack/prompts.md#11-explain-investec-api-authentication) | ChatGPT, Claude, Copilot |

[📖 **View All 14 Prompts**](prompt-pack/prompts.md)

---

## 🌟 Community Examples

### Featured Projects Built with This Sandbox

> **Want your project featured here?** [Submit a PR](https://github.com/investec-developer-community/ai-sandbox/pulls) or [open an issue](https://github.com/investec-developer-community/ai-sandbox/issues)!

```markdown
Coming soon! Share your Investec AI-powered applications with the community.
```

### Community Contributions
- 🤖 **Additional AI Prompts** - Expand the prompt library
- 🔧 **Integration Examples** - Real-world implementation patterns  
- 📚 **Tutorials** - Step-by-step guides for specific use cases
- 🐛 **Bug Reports** - Help improve the sandbox

---

## 🤝 Contributing

We welcome contributions from the Investec developer community!

### Ways to Contribute
1. **🤖 Add AI Prompts** - Expand the [prompt library](prompt-pack/prompts.md)
2. **🔧 Improve Mock Data** - Enhance realism in [`mock-server/`](sandbox/mock-server/)
3. **📚 Update Documentation** - Keep guides current and helpful
4. **🐛 Report Issues** - Help us fix bugs and improve UX
5. **💡 Suggest Features** - Ideas for new sandbox capabilities

### Development Setup
```bash
git clone https://github.com/investec-developer-community/ai-sandbox.git
cd ai-sandbox

# Install dependencies for both components
cd mock-server && npm install && cd ..
cd token-playground && npm install && cd ..

# Start mock server (terminal 1)
cd mock-server && npm start

# Start OAuth playground (terminal 2)  
cd ../token-playground && npm run web
```

### Contribution Guidelines
- Follow the existing code style and patterns
- Update documentation for any new features
- Test your changes with the mock server
- Include examples in AI prompts

---

## 📞 Support & Community

### Get Help
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/investec-developer-community/ai-sandbox/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/investec-developer-community/ai-sandbox/discussions)  
- 📚 **Documentation**: [Sandbox Docs](sandbox/README.md)
- 🌐 **Official Docs**: [Investec Developer Portal](https://developer.investec.com/)

### Stay Connected
- 🐦 **Twitter**: [@InvestecDev](https://twitter.com/InvestecDev)
- 💼 **LinkedIn**: [Investec Developer Community](https://linkedin.com/company/investec)
- 📧 **Newsletter**: [Developer Updates](https://developer.investec.com/newsletter)

---

## ⚠️ Important Notes

### Security
- 🔒 **Mock Credentials Only** - Never use sandbox credentials in production
- 🛡️ **Follow Best Practices** - See [Investec Security Guidelines](https://developer.investec.com/security)
- 🔐 **Secure Your Keys** - Keep real API credentials safe and private

### Environments  
- 🧪 **Sandbox**: `https://openapisandbox.investec.com` (testing)
- 🚀 **Production**: `https://openapi.investec.com` (live transactions)

### Rate Limits
- **Sandbox**: Generous limits for development and testing
- **Production**: [See current limits](https://developer.investec.com/rate-limits)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

### Third Party Licenses
- Node.js packages: Various licenses (see individual package.json files)
- Swagger/OpenAPI specifications: [Investec API Terms](https://developer.investec.com/terms)

---

## 🙏 Acknowledgments

Built with ❤️ by the Investec Developer Community

**Special Thanks:**
- Investec API Team for comprehensive documentation
- Open source community for excellent tooling
- AI platforms (OpenAI, Anthropic) for making development more accessible
- All developers who contribute examples and feedback

---

<div align="center">

**Ready to build the future of banking with AI?**

⭐ **Star this repo** if it helped you build something awesome!

[🚀 Get Started](#-quick-start) • [💬 Join Discussion](https://github.com/investec-developer-community/ai-sandbox/discussions) • [🐛 Report Issue](https://github.com/investec-developer-community/ai-sandbox/issues)

---

*Made with 🤖 AI assistance and ❤️ for the developer community*

</div>
