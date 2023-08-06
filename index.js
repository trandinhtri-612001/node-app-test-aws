const express = require('express');
const app = express();
require('dotenv').config();
app.get('/',(req,res) => {
    res.status(200).json({success:1,code:200,messages:'ok',data:["fsdfsd","dfdsfsd","dfsdfsfe","sdfsdfsdf"]});

})

app.get('/app',(req,res) => {
    res.status(200).json({success:1,code:200,messages:'ok',data:"hello viet nam"});
    
})
const PORT = 4000;

app.listen(PORT,() => {
    console.log("server is running");
})