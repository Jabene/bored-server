const server = require('./api/server')

const HOST = 'localhost';
// const PORT = process.env.DATABASE_URL || 8080;

server.set('port', process.env.PORT || 8080)

server.listen(server.get('port'), () => console.log(`Server running`))
