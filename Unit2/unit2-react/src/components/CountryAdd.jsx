import React, { useState } from "react";

function CountryAdd({ onAdd }) {

    const [country, setCountry] = useState("");
    const [capital, setCapital] = useState("");
    const [population, setPopulation] = useState("");

    const handleAdd = () => {
        if (country && capital && population) {
            onAdd({ country, capital, population });
            setCountry("");
            setCapital("");
            setPopulation("");
        } else {
            alert("Please fill all fields");
        }
    };

    return (

        <div className="bottom-links">

            <h2>Add Country</h2>

            <input
                type="text"
                placeholder="Country Name"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            />

            <input
                type="text"
                placeholder="Capital"
                value={capital}
                onChange={(e) => setCapital(e.target.value)}
            />

            <input
                type="text"
                placeholder="Population"
                value={population}
                onChange={(e) => setPopulation(e.target.value)}
            />

            <button onClick={handleAdd}>Add Country</button>

        </div>

    );
}

export default CountryAdd;