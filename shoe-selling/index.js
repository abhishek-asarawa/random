const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/UserRouter.js');

//instance
const app = express();

// middleware for data
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/user', userRouter);


app.set('views', 'src/views');
app.set('view engine', 'hbs');


app.get("/", (req, res) => {
    res.render('home');
});

app.get("/login", (req, res) => {
    let loginFailed = req.query.loginFailed;
    if(loginFailed){
        res.render("login", {loginFailed});
    } else {
        res.render("login");
    }
});

app.get("/register", (req, res) => {
    let passwordMissmatch = req.query.passwordMissmatch;
    let userNameExist = req.query.userNameExist;
    if(req.query.passwordMissmatch){
        res.render("register", {passwordMissmatch});
    } else if (userNameExist){
        res.render("register", {userNameExist});
    } else {
        res.render("register");
    }
});


app.listen(3000, () => {
    console.log("Server is running...")
});

// module.exports = {UserDB};