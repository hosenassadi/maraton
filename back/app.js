const express = require('express')
const app = express()

var cors = require('cors');
app.use(cors());

app.post('/upload_img', function (req, res) {

    
  res.send('Hello World');
})

app.listen(5000);