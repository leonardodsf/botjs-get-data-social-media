const server = require('./src/server');


const port = 5555;

server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port} \n`)
})