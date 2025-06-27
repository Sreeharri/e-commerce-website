import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    cartData: {
        type: Object,
        default: {}
    }
},{minimize: false}) //to create why data with empty object we need to provide this in the end so it will create cart data with empty object

const userModel = mongoose.models.user || mongoose.model("user" , userSchema)

export default userModel;