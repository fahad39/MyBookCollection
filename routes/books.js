const express=require("express")
const { ROUTE } = require("./routes")
const router=express.Router()
const Book=require("../models/book")

// All Books Route

router.get(ROUTE.Books,async(req,res)=>{
    res.send("All Books")
})

// New Books

router.get(ROUTE.NewBooks,(req,res)=>{
   res.send("new Books")
})

// Create new Books

router.post(ROUTE.CreateBooks,async (req,res)=>{
    res.send("create books")
    
    
    
})

module.exports=router