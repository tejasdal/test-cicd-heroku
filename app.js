const express = require('express'); // importing express package
const app = express(); // defining the app as an express app
const path = require('path'); // importing path package

app.use(express.static(path.join(__dirname, '/angularapp/test-cicd-heroku-app'))); //defining the directory name for the path

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname,'/angularapp/test-cicd-heroku-app/index.html')); // defining the path for running the index.html file on the express app
})
module.exports = app; //exporting the app to be run on the server in server.js
