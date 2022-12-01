const express=require("express")
const { ROUTE } = require("./routes")
const router=express.Router()
const Book=require("../models/book")
const Author=require("../models/author")

// All Books Route

router.get(ROUTE.Books,async(req,res)=>{
    res.send("All Books")
})

// New Books

router.get(ROUTE.NewBooks,async(req,res)=>{
   try {
    const authors=await Author.find({})
    const book=new Book()
     res.render("books/new",{
        authors:authors,
        book:book
     })
   } catch{
     res.redirect("/books")
   }
})

// Create new Books

router.post(ROUTE.CreateBooks,async (req,res)=>{
    res.send("create books")
    
    
    
})

module.exports=router