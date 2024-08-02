const express = require('express');
const auth = require('../middleware/auth');
const { getUsers, addUser, updateUser, deleteUser, getCurrentUserDetails } = require('../controllers/userController');
const router = express.Router();

router.get('/users',getUsers)
router.get('/user',auth,getCurrentUserDetails)
router.post('/user',addUser)
router.put('/user',auth,updateUser)
router.delete('/user/:userId',deleteUser)



module.exports = router


