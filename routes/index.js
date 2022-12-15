const express=require("express")
const {ROUTE}= require("./routes.js")
const Book = require('../models/book');
const router=express.Router()

router.get(ROUTE.Home,async(req,res)=>{
    let books;
    try {
        books=await Book.find().sort({createdAt:"desc"}).limit(10).exec()
    } catch (error) {
        books=[]
    }
    res.render("index",{books:books})
})

module.exports=router