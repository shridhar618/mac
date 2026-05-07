import React from "react";

function CountryFilter() {

    return (
        <div>
            <h2>Filter Countries</h2>

            <input
                type="text"
                placeholder="Search Country"
            />

            <br /><br />

            <select>
                <option>All</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>North America</option>
                <option>Africa</option>
            </select>
        </div>
    );
}

export default CountryFilter;