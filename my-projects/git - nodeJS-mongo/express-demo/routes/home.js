const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index',{title:'My Express App Kurwaaaaa', message:'Hello Kurwa Matikiii'})
});

module.exports=router;