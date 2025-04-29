const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
}, { timestamps: true });

// Static signup function
userSchema.statics.signup = async function(email, password, name) {
    // Validation
    if (!email || !password || !name) {
        throw Error('All fields must be filled');
    }
    if (!email.includes('@')) {
        throw Error('Email is not valid');
    }
    if (password.length < 6) {
        throw Error('Password must be at least 6 characters long');
    }

    const exists = await this.findOne({ email });
    if (exists) {
        throw Error('Email already in use');
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ email, password: hash, name });
    return user;
};

// Static login function
userSchema.statics.login = async function(email, password) {
    // Validation
    if (!email || !password) {
        throw Error('All fields must be filled');
    }
    const user = await this.findOne({ email });
    if (!user) {
        throw Error('Incorrect email or password');
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error('Incorrect email or password');
    }
    return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
