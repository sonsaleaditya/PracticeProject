const express = require('express');
const port = 5000;
const app = express();
app.get('/',(req,res)=>{
res.json({message : "hello i am aditya!!"})
});

app.listen(port,()=>{
    console.log(`server listening to port ${port}`)
})