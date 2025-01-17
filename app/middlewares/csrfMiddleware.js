const csrf = require('csurf');

// Initialize CSRF protection with cookie-based tokens
const csrfProtection = csrf({ cookie: true });

module.exports = csrfProtection;
