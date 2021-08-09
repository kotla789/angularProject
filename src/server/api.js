const express = require('express');
const router= express.Router()
const User = require('./models/userschema');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/angular',{
    useNewUrlParser: true,
    useFindAndModify:false,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(() => {
    console.log('DataBase connected sucessfully !')
},
    error => {
        console.log('DataBase could not be connected : ' + error)
})

router.post('/register', function(req,res){
    let userdata = req.body
    let user = User(userdata)
    user.save((error,registereduser) => {
        if(error){
            console.log("error"+error)
        }
        else{
            res.status(200).send({
                "message":"data received"
            })
        }
    })
})

router.post('/check',(req,res) => {
    // let data = req.body
    let enteredemail = req.body.email 
    let enteredpassword = req.body.password
    User.find({
        email : enteredemail,
        password : enteredpassword
    },(err,data) => {
        if(err) {
            res.json(err)
        } 
        else {
            res.json(data)
        }   
    })

})

router.post('/checkifemailisalreadyused', (req,res) => {
    let enteredmail =req.body.email 
    User.find({
        email :enteredmail
    },(err,data) => {
        if(err) {
            res.json(err)
        }
        else {
            res.json(data)
        }
    })
})

module.exports = router