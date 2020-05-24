const Student = require("../model/student");

studentController = {};

studentController.create = function(req, res){
    let student = new Student(req.body)
    student.save((err, student) => {
        if (err) return res.status(422).send(err);
        res.send(`New student is registered. ID: ${student._id}`);
    });
};


studentController.show = function(req, res){
    Student.find((err, data) => {
        if(err) return res.status(403).send(err)
        res.send(data);
    });
};


studentController.specific = function(req, res){
    let id = req.params.id
    Student.find({_id: id}, (err, data) => {
        if(err) return res.status(403).send(err)
        res.send(data);
    });
};


studentController.update = (req, res) => {
    console.log(req.body);
    let id = req.body.id;
    Student.find({_id: id}, (err, data) => {
        if(err) return res.status(500).send(err)
        // console.log(data[0].name);
        if(req.body.name) data[0].name = req.body.name;
        if(req.body.username) data[0].username = req.body.username;
        if(req.body.email) data[0].email = req.body.email;
        if(req.body.password) data[0].password = req.body.password;
        if(req.body.group) data[0].group = req.body.group;
        data[0].save((err, updated) => {
            if(err) return res.status(500).send(err)
            res.status(200).send(updated);
        });
    });
};


studentController.delete = (req, res) => {
    let id = req.params.id;
    Student.find({_id: id}, (err, data) =>{
        if(err) return res.status(500).send(err);
        data[0].remove((err, doc) => {
            if(err) return res.status(403).send(err)
            res.send(`This data will deleted: ${doc}`);
        });
    });
};


module.exports = {studentController}