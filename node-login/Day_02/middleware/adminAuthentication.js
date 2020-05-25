const user = require("../model/userModel");

module.exports = (req, res, next) => {
    if(req.session.userId){
        user.find({_id: req.session.userId}, (err, User) => {
            if(err) return res.status(403).render('err', {err});
            if(User.length > 0 && User[0].admin){
                req.username = User[0].username;
                next();
            } else {
                res.status(403).redirect('/login')
            }
        });
    } else {
        res.redirect('/login');
    }
}