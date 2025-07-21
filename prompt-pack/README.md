# AI Prompt Pack for Investec Development

The heart of the AI-friendly sandbox - **14 production-ready prompts** that give AI assistants everything they need to generate working Investec API code instantly.

## 🎯 What Makes These Prompts Special

Traditional API docs tell you *what* endpoints exist. These prompts tell AI assistants *how* to build real banking solutions:

✅ **Complete Context** - API patterns, mock credentials, realistic scenarios  
✅ **Working Code Output** - Not just explanations, but copy-paste ready applications  
✅ **Banking Domain Knowledge** - South African patterns, compliance considerations  
✅ **Production Patterns** - Error handling, testing, security best practices

## 🤖 How to Use

1. **Choose a prompt** from [prompts.md](prompts.md) based on your use case
2. **Copy the entire prompt** - includes all context AI needs
3. **Paste into ChatGPT, Claude, or Copilot** 
4. **Get working code** - ready to run with the mock server!

## 📋 Prompt Categories

### 🏦 **Programmable Banking Cards** (Prompts #1-3)
- **Spending Tracker** - Monitor transactions by category with email summaries
- **Budget Alerts** - WhatsApp notifications when approaching spending limits  
- **Spare Change Saver** - Round up purchases and transfer to savings

### 🔧 **Quick Setup & Testing** (Prompts #4-5)
- **Mock Server Setup** - Realistic banking data with chaos testing
- **OAuth Implementation** - Complete client_credentials flow examples

### 💳 **Real-World Use Cases** (Prompts #6-8) 
- **Merchant Analytics** - Dashboard for spending patterns and trends
- **Bill Automation** - Smart payment scheduling with balance checks
- **Family Allowances** - Multi-user spending control system

### �️ **Debugging & Troubleshooting** (Prompts #9-10)
- **API Error Handling** - Rate limits, token refresh, webhook validation
- **Chaos Testing** - Resilience testing with latency and error simulation

### 📚 **Learning & Development** (Prompts #11-12)
- **Authentication Tutorial** - Step-by-step OAuth explanation for beginners
- **Best Practices Guide** - Security, compliance, and production patterns

### 🔄 **Advanced Integration** (Prompts #13-14)
- **Event-Driven Architecture** - Webhook-based real-time systems
- **Multi-Account Portfolio** - Complex account aggregation and reporting

## ✨ Example Prompt

**Prompt #1: Build a Simple Spending Tracker**
```markdown
I'm using the Investec Programmable Banking API. Help me build a Node.js script that:
1. Fetches my card transactions from the last 7 days
2. Categorizes spending by merchant type  
3. Sends me a daily summary via email

Use these mock credentials:
- client_id: mock-client
- client_secret: mock-secret
- api_key: mock-api-key
- base_url: http://localhost:3000

Include proper client_credentials OAuth flow and error handling.
Show me the complete working code with comments.
```

**Result**: Complete Node.js application with authentication, API calls, categorization logic, and email integration!

## 🎯 Perfect For

| Developer Type | Use Case | Benefit |
|----------------|----------|---------|
| **Fintech Developers** | Building Investec integrations | Skip boilerplate, get working patterns |
| **Hackathon Teams** | Rapid prototyping | 5-minute setup to working demo |
| **AI Enthusiasts** | Leveraging ChatGPT/Claude | Prompts optimized for code generation |
| **Banking Newcomers** | Learning financial APIs | Tutorial-style explanations included |

## 🔧 Integration with Sandbox

All prompts are designed to work with the mock server:

1. **Start mock server**: `cd ../mock-server && npm start`
2. **Use any prompt**: They include correct base URL `http://localhost:3000`
3. **Test immediately**: Generated code works with realistic mock data

## 📚 Prompt Structure

Each prompt includes:
- **Clear objective** - What to build
- **Technical requirements** - APIs, patterns, error handling
- **Mock credentials** - Working test environment setup
- **Expected output** - Complete, runnable code
- **Context** - Banking domain knowledge AI needs

## 🤝 Contributing

Add your own prompts for:
- New banking scenarios
- Different programming languages  
- Advanced integration patterns
- Specific compliance requirements

See [main README](../README.md#contributing) for contribution guidelines.

## 📞 Getting Help

- **Prompt not working?** Check that mock server is running
- **Need modifications?** Adapt prompts for your specific use case
- **Want new scenarios?** Open an issue or submit a PR

Transform your Investec API development with AI assistance! 🚀

### 🔄 Advanced Integration
Event-driven architectures, multi-account systems, and production patterns.

## Usage Tips

1. **Copy entire prompts** - They include all context AI assistants need
2. **Modify for your needs** - Adjust tech stacks, requirements, or constraints  
3. **Combine prompts** - Use multiple prompts to build complex systems
4. **Test with mock server** - All prompts work with the included mock environment
5. **Iterate and refine** - Use AI responses as starting points for further development

## For AI Assistant Users

These prompts are designed to give you **working code, not just guidance**. They include:
- Mock credentials that work with the sandbox
- Realistic data patterns
- Proper error handling
- Security considerations
- Testing approaches

The goal is to get from idea to working prototype in minutes, not hours.
