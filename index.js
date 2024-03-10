const port = 3000;
const db = require('./connection')
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

db.connect((error)=>{
    if (error) throw error;
    app.get('/',(req,res)=>{
        const q = "select * from students"
        db.query(q,(err,result)=>{
            if(err) console.error("executing error ",err);
            console.log("hii");
            res.render('index.ejs',{table : result.rows});
        })
        
    })
    
    
    app.post('/insert',(req,res)=>{
        const name = req.body['name'];
        const mob = req.body['number'];
        console.log(name + " "+ mob);
        const q = "insert into students(name,mob) values($1,$2);"
        const values = [name,mob];
        db.query(q,values,(err,result)=>{
            if(err) console.error("executing error ",err);
            res.redirect('/');
        });
    })

    app.listen(port,()=>{
        console.log(`server is running on port ${port}`)
    });
});
// first one 
// app.get('/',(req,res)=>{
// res.json({message : "hello i am aditya!!"})
// });
//helllo



