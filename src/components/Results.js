import React from 'react';
import EmployeeList from "../data/employeeList.json";
function Results(props) {
    var searchResults = [];
    if (props.searchBy === "searchName") {
        searchResults = EmployeeList.filter((employee) => employee.name.first.toLowerCase().includes(props.searchName.toLowerCase()));
    }
    else if (props.searchBy === "searchGender") {
        if (props.searchGender.charAt(0).toLowerCase() === "m"){
            searchResults = EmployeeList.filter((employee) => !employee.gender.toLowerCase().includes("female"));
        }
        else if (props.searchGender.charAt(0).toLowerCase() === "f"){
            searchResults = EmployeeList.filter((employee) => employee.gender.toLowerCase().includes("female"));
        }
            
    }



return (
    <div className="text-center" style={{ width: "100%", float: "left" }}>
        {searchResults.length > 0 ? (
            <ul className="list-group">
                <h2>employee names</h2>
                {searchResults.map(result => (
                    <li className="list-group-item" key={result.phone}>
                        <b>{result.name.first + " " + result.name.last}</b>
                        <p>{result.location.city + ", " + result.location.state}</p>
                        <p>{result.gender}</p>
                        
                    </li>
                ))}
            </ul >
        ) : (
                <h2>No Results</h2>
            )}
    </div>
);
}

export default Results;