const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const courses = require('./Data/course.json');
const categoryList = require('./Data/categoryList.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('This is home server and it is running.....')
})

app.get('/categories-list', (req, res) => {
    res.send(categoryList);
})

app.get('/category/:category_id', (req, res) => {
    const category = parseInt(req.params.category_id);
    const coursecategory_id = courses.filter(course => course.category_id === category)
    res.send(coursecategory_id);
})

app.get('/category', (req, res) => {
    res.send(courses);
})

app.get('/courses/:_id', (req, res) => {
    const id = req.params._id;
    const courseData = courses.find(course => course._id === id)
    res.send(courseData);
})
app.get('/courses', (req, res) => {
    res.send(courses);
})

app.listen(port, () => {
    console.log('intellectx server is running on port:', port)
})