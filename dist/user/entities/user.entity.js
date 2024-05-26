"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userschema = void 0;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
exports.userschema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is requried'],
    },
    email: {
        type: String,
        required: [true, 'email is requried'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'password is requried'],
        minlength: 4,
        select: false,
    },
    confirmpassword: {
        type: String,
        required: [true, 'password is requried'],
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: 'confirmpassword must meatch password',
        },
    },
    forgotingpassword: String,
    expiredforgotingpassword: Number,
    enablestep: Boolean,
    secret: String,
});
exports.userschema.pre("save", async function (next) {
    if (!this.isModified('password')) {
        return next;
    }
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmpassword = undefined;
    next();
});
//# sourceMappingURL=user.entity.js.map