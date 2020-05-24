const express = require('express')
const session = require('express-session');
const uuid = require('uuid').v4;


const user = express.Router();


user.use(session({
    genid: (req) => uuid(),
    secret: 'abhishek',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000*60*60
    }
}));


UserDb = [];


user.post("/register", (req, res) => {
    let {name, email, username, password, verifyPassword} = req.body

    if(password !== verifyPassword){
        return res.redirect('/register?passwordMissmatch=true');
    }

    for(let user of UserDb){
        if(username == user.username){
            return res.redirect('/register?userNameExist=true');
        };
    };

    UserDb.push({name, email, username, password});
    res.send('user added succesfully');
});


user.post('/login', (req, res) => {
    let {username, password} = req.body;
    console.log(UserDb, "in user route");

    for(let user of UserDb){
        if(user.username === username){
            if(user.password === password ){
                req.session.username = username;
                return res.send("succesfully login.")
            } else {
                return res.redirect('/login?loginFailed=true');
            }
        }
    }

    return res.redirect('/login?loginFailed=true');
});


user.get("/sessionDetail", (req, res) =>{
    if(req.session.username){
        res.send(req.session);
    } else {
        res.send("No login attempt");
    }
});


module.exports = user;