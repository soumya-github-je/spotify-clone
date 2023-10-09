import mongoose from "mongoose";

const UserScheema = mongoose.Schema({
    userName: String,
    password: String,
    email: String
})

export default mongoose.model("users", UserScheema)