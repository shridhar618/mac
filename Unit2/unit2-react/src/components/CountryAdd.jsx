import React from "react";

function CountryAdd() {

    return (
        <div>
            <h2>Add Country</h2>

            <form>
                <input
                    type="text"
                    placeholder="Enter Country Name"
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Enter Capital"
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Enter Population"
                />

                <br /><br />

                <button type="submit">
                    Add Country
                </button>
            </form>
        </div>
    );
}

export default CountryAdd;