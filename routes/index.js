const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');

console.log("router loades successfully");
router.get('/',homeController.home);
router.get('/about',homeController.about);
router.get('/contactus',homeController.contactUs);

// exported the router to index.js 
module.exports=router;
