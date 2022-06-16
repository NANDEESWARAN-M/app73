const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const xsenv = require('@sap/xsenv');
xsenv.loadEnv();
const services = xsenv.getServices({
});




app.use(bodyParser.json());

// app home
app.get('/srvjs', function (req, res) {
        res.status(200).send('app73');
});




const port = process.env.PORT || 5002;
app.listen(port, function () {
    console.info('Listening on http://localhost:' + port);
});