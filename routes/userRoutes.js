const express = require('express');
const { getUsers, addUser, updateUser, deleteUser, getCurrentUserDetails } = require('../controllers/userController');
const router = express.Router();

router.get('/user',getUsers)
router.get('/user/:userId',getCurrentUserDetails)
router.post('/user',addUser)
router.put('/user/:userId',updateUser)
router.delete('/user/:userId',deleteUser)



module.exports = router


