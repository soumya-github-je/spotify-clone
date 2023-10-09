import {register, login} from "../Services/authService.js"
import {createSong, deleteSong, updateSong} from "../Services/SongService.js"
import { createArtist } from "../Services/artistService.js"

export const resolvers = {
    Query: {
        register,
        login,
    },
    Mutation:{
        createSong,
        deleteSong,
        updateSong,
        createArtist
    }
}