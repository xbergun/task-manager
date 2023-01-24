import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add a title"],
        trim: true,
        maxlength: [20, "Title cannot be more than 20 characters"],
    },
    description: {
        type: String,
        required: [true, "Please add a description"],
        trim: true,
        maxlength: [100, "Description cannot be more than 100 characters"],
    },
    done: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);