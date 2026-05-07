import React, { useState } from "react";

function CountryFilter({ onFilter }) {

    const [searchTerm, setSearchTerm] = useState("");

    const handleFilter = (e) => {
        setSearchTerm(e.target.value);
        onFilter(e.target.value);
    };

    return (

        <div className="bottom-links">

            <h2>Filter Countries</h2>

            <input
                type="text"
                placeholder="Search Country Name..."
                value={searchTerm}
                onChange={handleFilter}
            />

        </div>

    );
}

export default CountryFilter;