const express = require("express")
const path =  require("path")
const hbs = require("hbs")
const app = express()
const port = 8000;
require("./conn")
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath =  path.join(__dirname, "../templates/partials");
const Users =  require("./Register");
const { urlencoded } = require("express");
app.set("view engine", "hbs")
app.set("views", templatePath)
hbs.registerPartials(partialsPath);
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(staticPath));


app.get("/", (req,res)=>{
    res.render("index")
})
app.get("/about", (req,res)=>{
    res.render("about")
})

app.get("/academic", (req,res)=>{
    res.render("academic")
})

app.get("/admission", (req,res)=>{
    res.render("admission")
})

app.get("/contactus", (req,res)=>{
    res.render("contactUs")
})
app.get("/gallery", (req,res)=>{
    res.render("gallery")
})
app.get("/examination", (req,res)=>{
    res.render("examination")
})

app.get("/submitted",(req,res)=>{
    res.send("submitted")
})

app.get("/register",(req,res)=>{
    res.send("registered")
})

app.post("/register",async(req,res)=>{
    try{
        const userStudent = new Users({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            date:req.body.date,
            write_text:req.body.write_text
        })
        const registered = await userStudent.save()
        res.status(201).render("submitted")
    }catch(e){
        console.log(e)
        res.status(400).send("invalid credential")
    }
})

app.listen("8000",()=>{
    console.log("listening to port no 8000")
})