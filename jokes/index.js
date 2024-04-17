// importing modules
import express from "express";
import axios from "axios";

const app = express();
const API_URL =  "https://v2.jokeapi.dev/joke/Any"

let joke = "";

app.use(express.static("public"));

app.get("/",  (req, res) => {
    
    res.render("index.ejs", {joke});
});

app.post("/jokess", async (req, res) => {
    const result = await axios.get(API_URL);
    joke =  result.data.setup + " " + result.data.delivery;
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
