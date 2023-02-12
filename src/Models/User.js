import mongoose from "mongoose";
import { Schema } from "mongoose";

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

export default mongoose.model("User", UserSchema);

