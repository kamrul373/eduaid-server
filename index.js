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
const course_type = require("./data/courseType.json");

// course categories api
app.get("/categories", (req, res) => {
    res.send(categories);
});
// courses api
app.get("/courses", (req, res) => {
    res.send(courses)
});
// course details api
app.get("/courses-details/:id", (req, res) => {
    const courseId = req.params.id
    const selectedCourse = courses.find(course => course.id === parseInt(courseId));
    res.send(selectedCourse)
});
// courses based on course type
app.get("/course-type/:type", (req, res) => {
    const type = req.params.type;
    const selectedCourses = courses.filter(course => course.info.course_type.toLowerCase() === type.toLowerCase());
    res.send(selectedCourses);
});
// course type
app.get("/course-type", (req, res) => {
    res.send(course_type);
})

// courses on a category
app.get("/categories/:id", (req, res) => {
    const categoryId = parseInt(req.params.id)
    if (categoryId === 10) {
        return res.send(courses);
    } else {
        const categoryCourses = courses.filter(course => course.category_id === categoryId);
        res.send(categoryCourses);
    }

});


app.listen(port, () => {
    console.log("EDU AID server is running at port : ", port);
})