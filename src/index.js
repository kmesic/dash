// index.js
import express from 'express';
import path from 'path';

/**
 * Required External Modules
 */

/**
 * App Variables
 */

 const app = express();
 const port = process.env.PORT || "8000";
 const __dirname = path.dirname(new URL(import.meta.url).pathname);

/**
 *  App Configuration
 */

// Serve all static files from public directory
app.use('/', express.static(path.join(__dirname, '../public')))

/**
 * Routes Definitions
 */

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});