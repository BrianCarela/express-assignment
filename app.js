const express = require("express");
const logger = require("morgan");
const path = require("path");

const app = express(); // initialize express app

app.use(logger("dev")); // logger tells what path i'm on, requests i'm taking etc
app.use(express.json()); // parse json files

// reminder that __dirname is a shortcut to the root folder of this app

// after you `mkdir views`
app.set('views', path.join(__dirname, "views")); // smart connection to views
app.set('view engine', "ejs"); // template engine for views

// after you `mkdir public`
app.use(express.static(path.join(__dirname, "public"))); // any static file, go to public

// created js, css, and imgs folder in public

app.get("/", function(req, res){
    // index.ejs
    res.render("index", {name:"Brian Carela", info:["has IBS", "is a night owl", "needs a drink"]})
})


app.get('/photo-fun', function(req, res){
    // photos.ejs
    res.render("photos")
})

// /:pet is a dynamic parameter, so info on the page changes with the URL
app.get("/:pet/:age", function(req, res){
    // pets.ejs
    // console.log(req.params.pet, req.params.age)
    res.render("pets", {pet: req.params.pet, age: req.params.age})
})


// Without this, none of this is being served on any port.
app.listen(3000, function(){
    console.log(`Server is running on PORT: ${3000}`);
})