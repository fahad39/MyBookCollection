const express=require("express")
const {ROUTE}= require("./routes.js")
const router=express.Router()

router.get(ROUTE.Home,(req,res)=>{
    res.render("index")
})

module.exports=router