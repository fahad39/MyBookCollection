const express=require("express")
const { ROUTE } = require("./routes")
const router=express.Router()
const Author=require("../models/author")

// All Authors

router.get(ROUTE.AuthorHome,(req,res)=>{
    res.render("authors/index")
})

// New Authors

router.get(ROUTE.NewAuthor,(req,res)=>{
    res.render("authors/new",{author: new Author()})
})

// Create new Author

router.post(ROUTE.CreateAuthor,(req,res)=>{
    res.send("create")
})

module.exports=router