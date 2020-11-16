const express = require('express');
const path = require('path');
 
const app = express();
 
app.use(express.static(__dirname + '/test-cicd-heroku-app'));
 
app.get('/*', function(req,res) {
 
res.sendFile(path.join(__dirname+'/test-cicd-heroku-app/index.html'));
});
 
app.listen(process.env.PORT || 8080);