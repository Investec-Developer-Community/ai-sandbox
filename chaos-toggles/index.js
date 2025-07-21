// Chaos Toggles Middleware for Express
// Usage: Add to your mock server to simulate latency and errors

function chaosToggles(options = {}) {
  const latency = parseInt(process.env.CHAOS_LATENCY_MS, 10) || options.latency || 0;
  const errorRate = parseFloat(process.env.CHAOS_ERROR_RATE) || options.errorRate || 0;

  return function (req, res, next) {
    // Simulate latency
    setTimeout(() => {
      // Simulate error
      if (Math.random() < errorRate) {
        res.status(500).json({ error: 'Simulated chaos error' });
      } else {
        next();
      }
    }, latency);
  };
}

module.exports = chaosToggles;
