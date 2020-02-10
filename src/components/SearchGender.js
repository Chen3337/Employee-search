import React from 'react';


function SearchForm(props) {
    return (
        <div className="card" style={{ width: "50%", float: "left" }}>
            <div className="card-body">
                <h5 className="card-title">Search by gender</h5>
                <input
                    name="searchGender"
                    placeholder="Enter Male or Female"
                    type="text"
                    onChange={props.handleInputChange}
                    value={props.value}
                />
                <br />
                <br />

                <button className="btn btn-primary" onClick={props.matchingGender}>Search Gender</button>
            </div>
        </div>
    );
}

export default SearchForm;