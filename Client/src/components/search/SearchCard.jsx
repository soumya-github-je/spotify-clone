import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./searchcard.css"
const SearchCard = () => {
    const navigate = useNavigate()
  return (
    
        <div className='search-card-container' 
            onClick={() => navigate("/search-card-details")}
        >
                <p className="serach-card-title">podcasts</p>
                <img src="https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5" alt=""  className="search-card-image"/>
        </div>
    
    
  )
}

export default SearchCard