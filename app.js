const express=require("express")


const app=express();


app.get("/",(req,res)=>{
    return res.status(200).json({
      message: "hello world v3",
    });
})

module.exports=app;