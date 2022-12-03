const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({

    firstName: { type: String,
        required: [true, "First name is required"],
        minlength: [3, "first name must be at least {MINLENGTH} characters"]
    },

    lastName: { type: String,
        required: [true, "Last name is required"],
        minlength: [3, "last name must be at least {MINLENGTH} characters"]
    }
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);