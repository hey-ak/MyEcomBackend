const express = require('express');
const router = express.Router();


router.get('/login', (request, response)=>{
    return response.send("Login Sucessfull")


})
router.get('/register', (request, response)=>{
    return response.send("Registration Sucessfull")


})

module.exports = router