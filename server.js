const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const model = model.router('./blog-post-router')





app.listen(8080, () => {
    console.log("Your app is running in port 8080");
});
