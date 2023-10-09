import mongoose from "mongoose";

const SongSheema = mongoose.Schema({
    title: String, 
    artist: String, 
    songDuration: String, 
    songPostedYear: String
})

export default mongoose.model("Songs", SongSheema )