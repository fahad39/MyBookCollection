const express=require("express")
const { ROUTE } = require("./routes")
const router=express.Router()
const multer = require('multer');
const Book=require("../models/book")
const path=require("path")
const uploadPath=path.join("public",Book.coverImageBasePath )
const Author=require("../models/author")
const upload=multer({
  dest:uploadPath 
})

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
  const book=new Book({
    title:req.body.title,
    author:req.body.author,
    publishDate:new Date(req.body.publishDate),
    pageCount:req.body.pageCount,
    description:req.body.description,
  })
    
    
    
})

module.exports=router