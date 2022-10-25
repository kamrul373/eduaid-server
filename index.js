// initialization
const express = require("express");
const app = express();
const port = 5000;
// getting data
const categories = require("./data/category.json");
const courses = require("./data/courses.json");

// course categories api
app.get("/categories", (req, res) => {
    res.send(categories);
});

// courses api
app.get("/courses", (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log("EDU AID server is running at port : ", port);
})