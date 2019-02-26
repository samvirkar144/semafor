var express = require('express');
var router = express.Router();
var { User } = require('../models/user');

router.get("/candidate", function (req, res) {
    User.find().then((user) => {
        res.send(user);
        //res.send({ user });
    }, (e) => {
            res.send("error", { e:e });
    });
});
router.get("/candidate", function (req, res) {
    var id = parseInt(req.query.id || 0);
    User.find({ Id: id}).then((user) => {
        res.send(user);
        //res.send({ user });
    }, (e) => {
            res.send("error", { e:e });
    });
});

router.delete("/candidate", function (req, res) {
    var id = parseInt(req.query.Id || 0);
    console.log("\n=====\n"+id);
    User.deleteOne({ Id: id }).then((user) => {
        res.send("user Deleted successfully ");
        //res.send({ user });
    }, (e) => {
        res.send("error", { e: e });
    });
});
router.post('/candidate', (req, res) => {
   
    var user = new User({
        Id: req.body.Id,
        UserName: req.body.UserName,
        Fname: req.body.Fname,
        Lname: req.body.Lname,
        Mobile: req.body.Mobile,
        Country: req.body.Country
    });
    console.log("\n------\n"+JSON.stringify(user))
    user.save().then((doc) => {
        res.send("User added successfully ");
    }, (e) => {
            res.send(e);
    });
});
module.exports = router;