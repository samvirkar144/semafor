const mongoose = require('mongoose');
const validator = require('validator');

var UserSchema = new mongoose.Schema({
    Id: {
        type: Number,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 5,
        unique: true,
    },
    UserName: {
        type: String,
        minlength: 4,
        maxlength: 8,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9_]*$/.test(v);
            },
            message: props => `${props.value} should be combination of  number , string and underscore`
        },
        required: [true, 'Last name required']
    },
    Fname: {
        type: String,
        require: true,
        minlength: 4,
        maxlength: 8,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z]*$/.test(v);
            },
            message: props => `${props.value} is not a string!`
        },
        required: [true, 'First name required']
        //regex: "[a-zA-Z]"
    },
    Lname: {
        type: String,
        minlength: 4,
        maxlength: 8,
        //match: "a-zA-Z"
        validate: {
            validator: function (v) {
                return /^[a-zA-Z]*$/.test(v);
            },
            message: props => `${props.value} is not a string!`
        },
        required: [true, 'Last name required']
    
    },
    Mobile: {
        type: Number,
        required: true,
        unique: true,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} Mobile number should be integer only'
        }
    },
    Country: {
        type: String,
        //match: "A-Z",
        minlength: 2,
        maxlength: 2,
        validate: {
            validator: function (v) {
                return /^[A-Z]*$/.test(v);
            },
            message: props => `${props.value} is not a string!`
        },
        default: "IN"
    },
    
});

var User = mongoose.model('User', UserSchema);

module.exports = { User }