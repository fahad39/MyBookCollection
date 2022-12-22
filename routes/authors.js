const express=require("express")
const { ROUTE } = require("./routes")
const router=express.Router()
const Author=require("../models/author")

// All Authors

router.get(ROUTE.AuthorHome,async(req,res)=>{
    let searchOptions={}
    if(req.query.name!=null && req.query.name!==""){
        searchOptions.name=new RegExp(req.query.name,"i")
    }
    try {
        const authors=await Author.find(searchOptions)
        res.render("authors/index",{
            authors:authors,
            searchOptions:req.query
        })
    } catch  {
        res.redirect("/")
    }
    
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
    console.log("author is ",author)
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

router.get("/:id",(req,res)=>{
    res.send("Show Author"+req.params.id)
})

router.get("/:id/edit",async(req,res)=>{
    try {
        const author=await Author.findById(req.params.id)
        res.render("authors/edit",{author: author})
    } catch (error) {
        res.redirect("/authors")
    }
    
})

router.put("/:id",(req,res)=>{
    res.send("Update Author"+req.params.id)
})

router.delete("/:id",(req,res)=>{
    res.send("Delete Author"+req.params.id)
})

module.exports=router