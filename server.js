const http = require('http'); //this is required to create an http server
const app = require('./app'); //this defines which app to run

// defining the port on which the server will run
const port = process.env.PORT || 3000;  

//creating the server to run on app
const server = http.createServer(app);

//listening the server on the defined port
server.listen(port);