import * as mongoose from 'mongoose';
import * as bcrypt from "bcrypt"
export const userschema = new mongoose.Schema({
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

userschema.pre("save", async function (next) {
    if (!this.isModified('password')) {
        return next
    }
    this.password = await bcrypt.hash(this.password, 12)
    this.confirmpassword = undefined
    next()
})
