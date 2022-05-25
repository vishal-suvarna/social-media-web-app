const express=require('express');
const router=express.Router();
const product_controller=require('../controllers/product_controller');


router.get('/shoes',product_controller.shoes);

router.get('/shirt',product_controller.shirt);

router.get('/belt',product_controller.belt);

module.exports=router;