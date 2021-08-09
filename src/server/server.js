const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const api= require('./api.js')
const PORT = 3000;
const user = require('./models/userschema')

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api', api);
app.get('/', function(req,res){
    res.send("Hello from server");
})
app.listen(PORT, function(){
    console.log("server is running at :" +PORT)
})

// app.post('/register', function(req,res){
//     console.log(req.body);
//     res.status(200).send({
//         "message":"data received"
//     })
// })

app.get('/users', (req,res) => {
    user.find({},(err,data) => {
        if(err) {
            res.json(err)
        } 
        else {
            res.json(data)
        }   
    })
})