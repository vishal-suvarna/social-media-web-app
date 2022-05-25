const express=require('express');
const port=8000;

const app=express();

// use express router which was exported
app.use('/',require('./routes'));


app.listen(port,(err)=>{
    if(err){
        // console.log("error in creating server",err);
        // using interpolation 
        console.log(`error in running server: ${err}`);
        return;
    }
    console.log(`Server created and running on port : ${port}`);
});
