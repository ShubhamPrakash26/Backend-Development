const express = require("express");

const app = express();
let PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req,res)=>{
    res.send("Hello from Root");
});


app.get("/:username/:id", (req,res)=>{
    let {username, id} = req.params;
    res.send(`Hello ${username}`);
    console.log(req.params)
})

app.get("/search", (req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("<h2>Nothing Searched</h2>");
        console.log("Nothing Searched");
    } else {
    res.send(`<h2>Search results for ${q}<h2>`);
    console.log(`${q}`);
    }
});
