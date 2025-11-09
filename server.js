const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

// Enable CORS for all origins
server.use(cors());

// Add logging middleware
server.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Use body parser for POST/PUT requests
server.use(jsonServer.bodyParser);

// Use the router
server.use(router);

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🍹 Juice Store API is running on port ${PORT}`);
  console.log(`📡 Access your API at http://localhost:${PORT}/juices`);
});