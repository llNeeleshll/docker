const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send('Hi There Dude WIU!');
});

app.listen(8080, ()=>{
    console.log("Listening on port 8080");
});