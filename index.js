const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const courses = require('./Data/course.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('This is home server and it is running.....')
})

app.get('/category/:category', (req, res) => {
    const category = parseInt(req.params.category);
    const courseCategory = courses.filter(course => course.category === category)
    res.send(courseCategory);
})

app.get('/category', (req, res) => {
    res.send(courses);
})

app.listen(port, () => {
    console.log('intellectx server is running on port:', port)
})