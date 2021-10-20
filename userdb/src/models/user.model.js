const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    role: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);