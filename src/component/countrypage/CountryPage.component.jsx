import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "./CountryPage.style.scss";
const CountryPage = ({ data }) => {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchVal, setSearchVal] = useState('')

  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const filterCountries = data
  .filter(country =>
    selectedRegion === 'All' || country.region === selectedRegion
  )
  .filter(country =>
    country.name.common.toLowerCase().includes(searchVal.toLocaleLowerCase())
  )

    
    const handleSearchChange = (e) =>{
        setSearchVal(e.target.value)
    }

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  return (
    <div className="container">
      <nav className="nav-bar">
        <div className="logo">
          <h1 className="brand-name">Where in the World?</h1>
        </div>
        <div className="mode">
          <FontAwesomeIcon icon={faMoon} />
          <p>Dark Mode</p>
        </div>
      </nav>
      <div className="search-filter">
      <div className="search">
        <input
          className="search-box"
          type="text"
          placeholder="search for a country..."
        onChange={handleSearchChange} />
      </div>
      <div className="filter">
        <select
          name="country"
          id="filter-country"
          onChange={handleRegionChange}
        >
            
          {regions.map((region, index) => (
            <option key={index} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
      </div>
      <div className="country-cards">
        {filterCountries.map((country, index) => (
          <div key={index} className="country-card">
            <img src={country.flags.png} alt={`${country.name.common} flag`} className="country-flag" />
            <div className="country-info">
              <h2>{country.name.common}</h2>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default CountryPage;
