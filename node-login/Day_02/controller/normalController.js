const user = require("../model/userModel");

exports.loginPage = (req, res) => {
    if(req.query.loginFailed){
        res.render('login', {loginFailed: true});
    } else if (req.query.userAdded){
        res.render('login', {userAdded: true});
    } else {
        if(req.session.userId){
            user.find({_id: req.session.userId}, (err, User) => {
                if(err) return res.status(403).render('err', {err});
                if(User.length > 0){
                    res.status(200).render('userHome', {name: User[0].name, username: User[0].username});
                } else {
                    res.status(403).render('login')
                }
            });
        } else {
            res.render('login');
        }
    }
};


exports.registerPage = (req, res) => {
    if(req.query.passwordMiss){
        res.render('register', {passwordMiss: true})
    } else if(req.query.err){
        res.render('register', {err: true})
    } else {
        res.render('register');
    }
};


exports.editPage = (req, res) => {
    if(req.query.passwordMiss){
        res.render('edit', {passwordMiss: true});
    } else {
        res.render('edit');
    };
};


exports.deletePage = (req, res) => {
    res.render('delete');
}


exports.homePage = (req, res) => {
    res.render('home');
};