import React from "react";

function CountryTable({ countries }) {

    return (

        <div>

            <table border="1">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Country</th>
                        <th>Population</th>
                        <th>Created</th>
                    </tr>
                </thead>

                <tbody>

                    {countries.map((item) => (

                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.country}</td>
                            <td>{item.population}</td>
                            <td>{new Date().toDateString()}</td>
                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
}

export default CountryTable;