const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const cors = require("cors");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.get("/",async(req,res)=>{
    res.status(200).json({"HELLO" : "HOW ARE YOU PRITAM?"})
})

app.listen(port);