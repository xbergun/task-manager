import mongoose from "mongoose";
import { Schema } from "mongoose";
import bcyrpt from "bcryptjs";
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1024
    },
    date: {
        type: Date,
        default: Date.now
    },
    tasks : [
        {
            type: Schema.Types.ObjectId,
            ref: "Task"
        }
    ]
});

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    const salt = await bcyrpt.genSalt(10);
    this.password = await bcyrpt.hash(this.password, salt);
    next();
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
