const express=require("express")
const { ROUTE } = require("./routes")
const router=express.Router()
const Author=require("../models/author")

// All Authors

router.get(ROUTE.AuthorHome,(req,res)=>{
    try {
        
    } catch  {
        
    }
    res.render("authors/index")
})

// New Authors

router.get(ROUTE.NewAuthor,(req,res)=>{
    res.render("authors/new",{author: new Author()})
})

// Create new Author

router.post(ROUTE.CreateAuthor,async (req,res)=>{
    const author=new Author({
        name:req.body.name
    })
    try {
        const newAuthor=await author.save()
        // res.redirect(`authors/${newAuthor.id}`)
        res.redirect("authors")
    } catch {
        res.render("authors/new",{
            author:author,
            errorMessage:"Error creating author"
        })
    }
    
    
    
})

module.exports=router