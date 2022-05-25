const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');

console.log("router loades successfully");
router.get('/',homeController.home);
router.get('/about',homeController.about);
router.get('/contactus',homeController.contactUs);



// for any further routes access from here like belowwwwww!!!!
// router.use('/routerName',require('./routerFile'));

// handles the user requests
router.use('/users',require('./users'));
// handles the product requests
router.use('/products',require('./product'));

// exported the router to index.js 
module.exports=router;
