import React, { useState ,useEffect } from 'react'
import './Home.css';
import Rent from './cardData.js'
import Rentcard from './Rentcard.jsx';
import Welcomecard from './Welcomecard.jsx';

const Home = () => {

  const [rentData, setRentData] = useState(Rent);

  const [query, setQuery] = useState("");

  // Handle search functionality
  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    const filteredData = Rent.filter(
      (item) =>
        item.desc.toLowerCase().includes(searchQuery) ||
        item.category.toLowerCase().includes(searchQuery)
    );

    setRentData(filteredData);
  };

  return (
    <>
    {/* Welcomecard */}
    <Welcomecard/>

    {/* SearchBar */}
    <div className="search-bar">
    <input
          type="text"
          placeholder="Search Here ..."
          value={query}
          onChange={handleSearch} // Dynamically filter data as the user types
        />
      <button>🔍</button>
    </div>

    {/* Rentcards */}
    <Rentcard rentData={rentData} />
    </>
  )
}

export default Home