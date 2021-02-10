const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const registrationController = require('./routes/registration');
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello');
});

registrationController.main(app);

app.listen(port, () => {
    console.log('App on port 3000');
});