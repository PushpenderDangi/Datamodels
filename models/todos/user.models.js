import mongoose from 'mongoose'
const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            lowercase: true,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true
        },
        createdBy : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User" // in reference we use the data model
        }
    }
    )
export const User = mongoose.model("User", userSchema)