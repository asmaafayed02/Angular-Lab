const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const port=4000;
app.use(bodyParser.json());
app.use(cors())
app.get('/', function(req, res) {
    res.send('hello')
})

app.listen(port,()=>{
    console.log('listening on port '+port);
});
app.post('/register', function(req, res) {
    console.log(req.body);
    res.status(200).send(req.body)
})
app.post('/login', function(req, res) {
    console.log(req.body);
    res.status(200).send(req.body)
})