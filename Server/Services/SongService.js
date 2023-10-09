import SongModel from "../Models/songModel.js";

export const createSong = async (_, args)=> {
    try {
        const {title, artist, songDuration, songPostedYear} = args
        const newSong = new SongModel({
            title,
            artist,
            songDuration,
            songPostedYear
        });
        await newSong.save()
       return{
            status: true,
            message: "New song created"
       }

        
    } catch (error) {
        return{
            status: false,
            message: error
        }
    }
}

export const deleteSong = async(_, args)=> {
    try {
        const {id} = args
        await SongModel.deleteOne({_id: id})
        return {
            status: true,
            message: "Song deleted"
        }
    } catch (error) {
        return{
            status: false,
            message: error
        }
    }
}

export const updateSong = async(_, args)=> {
    try {
        const {id,title, artist, songDuration, songPostedYear} = args
        await SongModel.updateOne({_id: id},
            {
                title,
                artist,
                songDuration,
                songPostedYear
            })
        return {
            status: true,
            message: "Song Updated"
        }
    } catch (error) {
        return{
            status: false,
            message: error
        }
    }
}

