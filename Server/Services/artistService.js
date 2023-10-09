import ArtistModel from "../Models/artistModel.js";

export const createArtist = async (_, args)=> {
    try {
        const {name, profilePicture, songs} = args
        const newSong = new ArtistModel({
            name, profilePicture,songs
        });
        await newSong.save()
       return{
            status: true,
            message: "Artist created"
       }

        
    } catch (error) {
        return{
            status: false,
            message: error
        }
    }
}

export const deleteArtist = async(_, args)=> {
    try {
        const {id} = args
        await ArtistModel.deleteOne({_id: id})
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

export const updateArtist = async(_, args)=> {
    try {
        const {id,title, artist, songDuration, songPostedYear} = args
        await ArtistModel.updateOne({_id: id},
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

