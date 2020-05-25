const mongoose = require('mongoose');
const uuid = require('uuid').v4;
const bcrypt = require('bcryptjs');
const userSchema = mongoose.Schema;

const user = new userSchema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false,
    },
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    }]
});

user.pre('save', function(next){
    bcrypt.genSalt(10)
    .then(salt => bcrypt.hash(this.password, salt))
    .then(hashedPassword => {
        this.password = hashedPassword;
        next();
    })
    .catch(err => next(err));
});

user.methods.isCorrectPassword = function(newPassword){
    try{
        return bcrypt.compare(newPassword, this.password)
    } catch(err) {
        throw new Error(err)
    }
}

module.exports = mongoose.model('user', user);