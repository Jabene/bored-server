const server = require('./api/server')

const HOST = 'localhost';
const PORT = process.env.DATABASE_URL || 8080;

server.listen(PORT, () => console.log(`Server running at ${HOST}:${PORT}`))
