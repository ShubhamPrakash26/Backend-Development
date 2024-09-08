const express = require("express");
const path = require("path");

const app = express();

const port = 8080;

app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req,res)=>{
    res.render("home");
});

app.get("/hello", (req,res)=>{
    res.send("Hello");
});

app.get("/rolldice", (req,res)=>{
    let diceValue = Math.floor(Math.random()*6) +1;
    res.render("rolldice", { num: diceValue});
});

// app.get("/ig/:username", (req,res)=>{
//     const followers= ["rahul", "shubham", "DemoUser", "user2"];
//     let {username} = req.params;
//     res.render("instagram", { username, followers });
// });

app.get("/ig/:username", (req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("instagram", {data});
    } else {
        res.render("error", {username});
    }
});