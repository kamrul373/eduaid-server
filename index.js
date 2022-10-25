// initialization
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
// cors
const cors = require("cors");
app.use(cors());

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
});
// course details api
app.get("/course/:id", (req, res) => {
    const courseId = req.params.id;
    const selectedCourse = courses.find(course => course.id === parseInt(courseId));
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log("EDU AID server is running at port : ", port);
})