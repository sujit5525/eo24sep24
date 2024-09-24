const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());


app.get("/check",(req,res)=>{
let num = req.query.number;
console.log(num);
let n = parseInt(num);
let r = n%2===0?"even":"odd";
res.json({"msg":r});

});
app.listen(9000, ()=>{console.log("ready@9000");});