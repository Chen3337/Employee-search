import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Results from "./Results";
import SearchGender from "./SearchGender";


class Container extends Component {
  state = {
    searchName: "",
    searchGender: "",
    searchBy: ""
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
      searchBy: name
    });

  };



  render() {
    return (
      <div className="container">
        <SearchForm
          handleInputChange={this.handleInputChange}
          value={this.state.searchName}
        />
        <SearchGender
          handleInputChange={this.handleInputChange}
          value={this.state.searchGender}
        />
        <Results
          searchName={this.state.searchName}
          searchGender={this.state.searchGender}
          searchBy={this.state.searchBy}
        />
      </div>
    );
  }
}

export default Container;
