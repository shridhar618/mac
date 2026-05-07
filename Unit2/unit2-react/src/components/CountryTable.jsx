import React from "react";

function CountryTable() {

    const countries = [
        {
            id: 1,
            name: "India",
            capital: "New Delhi",
            population: "1.4 Billion"
        },
        {
            id: 2,
            name: "USA",
            capital: "Washington D.C",
            population: "331 Million"
        },
        {
            id: 3,
            name: "Japan",
            capital: "Tokyo",
            population: "125 Million"
        }
    ];

    return (
        <div>
            <h2>Country List</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Country</th>
                        <th>Capital</th>
                        <th>Population</th>
                    </tr>
                </thead>

                <tbody>
                    {countries.map((country) => (
                        <tr key={country.id}>
                            <td>{country.id}</td>
                            <td>{country.name}</td>
                            <td>{country.capital}</td>
                            <td>{country.population}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CountryTable;