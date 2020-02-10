import React from 'react';


function SearchForm(props) {
    return (
        <div className="card" style={{width: "50%", float: "left"}}>
            <div className="card-body">
                <h5 className="card-title">Search by first name</h5>
                <input 
                name = "searchName"
                placeholder = "Enter a name"
                type = "text"
                onChange = {props.handleInputChange}
                value = {props.value}
                />
                <br />
                <br />

                <button className="btn btn-primary">Search Employee</button>
            </div>
        </div>
    );
}

export default SearchForm;