const express = require("express");

const app = express();

const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is the Root");
});

app.get("/register", (req, res) => {
    let {user, password}= req.query;
    res.send(`Standard GET Response ${user}`);
});

app.post("/register", (req, res) => {
    let {user,password} = req.body;
    res.send(`Standard POST Response for ${user}`);
});

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});