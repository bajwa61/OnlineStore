const express=require('express');
const app=express();
const mysql=require('mysql');
var cors = require('cors');
const bodyParser=require('body-parser');


app.use(bodyParser.json());
app.use(cors());

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'e_store'
});

app.get("/",(req,res)=>{
    const q="SELECT * FROM products";
    connection.query(q,(err,result,field)=>{
        res.send(result);
    })
})

connection.connect((error)=>{
   if(error)
   {
       console.log(error);
   }
   else
   {
       console.log("Connected to Database");
   }
});

app.listen(3000,()=>{
    console.log("Server Running");
})
