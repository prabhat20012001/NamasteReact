import React, { useState, useEffect } from 'react';
import ResturantCard from "./ResturantCard";
import Shimmer from './Shimmer';

const Body = () => {
  const [originalResturantList, setOriginalResturantList] = useState([]);
  const [filterResturant, setFilterResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9622536&lng=77.6979885&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    const restaurants = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setOriginalResturantList(restaurants);
    setFilterResturant(restaurants);
  };

  const handleSearch = () => {
    const filteredResturant = originalResturantList.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

    setFilterResturant(filteredResturant)
    // setFilterResturant(filteredResturant);
  };

  const handleTopRatedFilter = () => {
    const filteredList = originalResturantList.filter(res => res.info.avgRating > 4);
    setFilterResturant(filteredList);
  };

  return filterResturant.length === 0 ? (<Shimmer />) : (
    <div className="body">
      <div className="filter">
        <div className='search'>
          <input type='text' className='search-box' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <button onClick={handleSearch}>
            Search
          </button>
        </div>

        <button className="filter-btn" onClick={handleTopRatedFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          filterResturant.map((resturant, index) => (
            <ResturantCard key={index} resData={resturant} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;
