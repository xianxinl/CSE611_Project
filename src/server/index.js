const express = require('express');
const app = express();
const routesUrls = require('./router')

app.use(express.json());
app.use('', routesUrls);
app.listen(3000, () => console.log("server is running"));
