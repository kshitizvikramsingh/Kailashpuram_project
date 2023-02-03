const express= require("express");
const path=require("path");


const app=express();      //express() creates an express application. It is a top-level function exported by the express module.
console.log(__dirname);
const port=3000;

app.set("view engine","ejs"); //app setting configurations for the html engine to be used by the app
app.set("views",path.join(__dirname,"/views")); // setting the html pages directory
app.set("title","Kailashpuram Society");

app.use(express.static(path.join(__dirname,"/public"))); //defining static middleware to serve static items like images


app.get("/",(req,res)=>{                    //function to display home page when address is at base
    res.render("home.ejs");
});

app.get("/about",(req,res)=>{                    //function to display home page when address is at base
    res.render("about.ejs");
});

app.get("/rwa_issues",(req,res)=>{
    res.render("rwa_issues.ejs")
})



app.listen(port,()=>{                       //setting the port to listen
    console.log("app is up on port 3000");
});