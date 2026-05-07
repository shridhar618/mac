import './App_Country.css';
import React, { useState } from 'react';

import CountryTable from './components/CountryTable';
import CountryAdd from './components/CountryAdd';
import CountryFilter from './components/CountryFilter';

function App() {

    const [countries, setCountries] = useState([
        {
            id: 1,
            country: "India",
            capital: "New Delhi",
            population: "1400000000"
        },
        {
            id: 2,
            country: "USA",
            capital: "Washington DC",
            population: "331000000"
        },
        {
            id: 3,
            country: "Japan",
            capital: "Tokyo",
            population: "125000000"
        }
    ]);

    const [filteredCountries, setFilteredCountries] = useState(countries);

    const addCountry = (newCountry) => {
        const updatedCountries = [...countries, { id: countries.length + 1, ...newCountry }];
        setCountries(updatedCountries);
        setFilteredCountries(updatedCountries);
    };

    const filterCountries = (searchTerm) => {
        if (searchTerm === '') {
            setFilteredCountries(countries);
        } else {
            const filtered = countries.filter((country) =>
                country.country.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredCountries(filtered);
        }
    };

    return (
        <div className='App'>

            <h1>Country Tracker</h1>

            <div className='nav-links'>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Add Country</a>
                <a href="/">Filter</a>
            </div>

            <CountryTable countries={filteredCountries} />

            <CountryAdd onAdd={addCountry} />

            <CountryFilter onFilter={filterCountries} />

        </div>
    )
}

export default App;