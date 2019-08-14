// Require in modules
const express = require('express');
const layout = require('express-ejs-layouts');

// Instantiate the express app
const app = express()
//middleware
app.set('view engine', 'ejs');
//body parser middleware that puts the form data into req.body
app.use(express.urlencoded({extended: false}));

//controller routes
app.use('/dinosaurs', require('./controllers/dinosaur'));
app.use('/cryptids', require('./controllers/cryptids'));


// add in routs
app.get('/', (req, res) => {
    res.render('home');
})
//catch all rout
app.get('/*', (req, res) => {
    res.render('404');
})

// Listen on a port
app.listen(3001, () => {
    console.log("Server is live @ port 3001")
})