const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const router = require('./blog-post-router')

app.use('/',jsonParser,router);



app.listen(8080, () => {
    console.log("Your app is running in port 8080");
});
