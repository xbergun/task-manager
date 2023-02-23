import mongoose from "mongoose";
import { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

//? Generate JWT
UserSchema.methods.generateJwt = function () {
    const user = this;
    const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;
    const payload = {
        id: user._id,
        name: user.name,
        tasks: user.tasks,
    };
    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
    });
    return token;
}; 


// Hash password before saving to database
UserSchema.pre("save", function (next) {
    const user = this;
  if (!user.isModified("password")) {
    next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) next(err);
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) next(err);
      user.password = hash;
      next();
    });
  });
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
