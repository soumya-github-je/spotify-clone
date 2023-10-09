import React from 'react'
import SearchCard from "../components/search/SearchCard"
import "./search.css"
const Search = () => {
  return (
    <div className='search-main-container'>
        <p className="browse-all-text">Browse all</p>  
        <div className="search-cards-container">
              {
                  [1,2,3,4,5,6,7,8,9,10,1,2,3,4,2,3,4,5,6,7,8,9,1].map(ele => <SearchCard key={ele} />)
              }
        </div>
    </div>
  )
}

export default Search