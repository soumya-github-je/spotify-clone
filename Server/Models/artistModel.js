import mongoose from "mongoose";

const ArtistSheema = mongoose.Schema({
    name: String,
    profilePicture: String,
    songs: [{type: mongoose.Schema.Types.ObjectId, ref:"Songs"}]
})

export default mongoose.model("artist", ArtistSheema )