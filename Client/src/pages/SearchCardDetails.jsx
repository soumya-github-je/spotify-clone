import React from 'react'
import SongCard from '../components/home/SongCard'
import "./searchcarddetails.css"
import "./authordetails.css"

import "./artistalbum.css"
const SearchCardDetails = () => {
  return (
    <div className='search-card-details-container'>
        <p className="search-card-details-heading">Best episodes of the week</p>
        <div  className="album-song-cards-container album-song">
            {
                [1, 23, 3, 4, 5,].map(ele => <SongCard key={ele} 
                    path="/"
                    songImage='https://i.scdn.co/image/ab67656300005f1f3a25f49b353a55a6e825fcaf'
                    songTitle="S01 E02-Mohammed Siraj"
                    songDescription="Feb 2023 . 35 min"
                />)
            }
        </div>

        <p className="search-card-details-heading">fresh finds</p>
        <div  className="album-song-cards-container album-song">
            {
                [1, 23, 3, 4, 5,].map(ele => <SongCard key={ele} 
                    songImage='https://i.scdn.co/image/ab67656300005f1f3f4662cd2e2c10f3ed102fde'
                    songTitle="S01 E02-Mohammed Siraj"
                    songDescription="Feb 2023 . 35 min"
                />)
            }
        </div>

        <p className="search-card-details-heading">categories</p>
        <div  className="album-song-cards-container album-song">
            {
                [1, 23, 3, 4, 5,].map(ele => <SongCard key={ele} 
                    songImage='https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg'
                    songTitle="S01 E02-Mohammed Siraj"
                    songDescription="Feb 2023 . 35 min"
                />)
            }
        </div>
        
    </div>
  )
}

export default SearchCardDetails
