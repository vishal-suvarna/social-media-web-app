const express=require('express');
const router=express.Router();
const userController=require("../controllers/users_controller");

router.get('/profile',userController.profile);
// routes for signin
router.get('/sign-in',userController.signIn);
// routes for sign up
router.get('/sign-up',userController.signUp);
// for user sign up
router.post('/create',userController.create);
// 

module.exports=router;