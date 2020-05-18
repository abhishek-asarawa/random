const express = require('express');
const morgan = require('morgan');
const userRouter = require('./UserRouter.js');


const app = express();


app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/user', userRouter);


app.set('views', 'src/views');
app.set('view engine', 'hbs');


app.get("/", (req, res) => {
    res.render('home');
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});


app.listen(3000, () => {
    console.log("Server is running...")
});

// module.exports = {UserDB};