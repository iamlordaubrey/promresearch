import React, { Component } from 'react';

class Countries extends Component {
  constructor (props) {
    super(props);
    this.state = {
      sortBy: 'name'
    }
  }

  sortFunc = (e) => {
    this.setState({
      sortBy: e.target.id
    })
  };

  render() {
    const {
      countries,
      onClick: countryClick
    } = this.props;

    const handleClick = (country) => {
      console.log('in country handleClick');
      countryClick(country)
    };

    if (!countries) {
      return <div>Loading...</div>
    }

    const country = countries
      .sort((a, b) => a[this.state.sortBy]
        .toString()
        .localeCompare(b[this.state.sortBy].toString(), undefined, {numeric: true})
      )
      .map((country, index) => (
        <li key={index} onClick={e => {
          e.preventDefault();
          handleClick(country)
        }}>
          {country.name}
        </li>
    ));

    let sortButtons = <div></div>
    if (country.length > 0) {
      sortButtons = (
        <div>
          <h4>Sort Countries</h4>
          <button id="name" onClick={this.sortFunc}>Name</button>
          <button id="population" onClick={this.sortFunc}>Population</button>
        </div>
      )
    }

    return (
      <div>
        <ul>
          {sortButtons}
          {country}
        </ul>
      </div>
    )
  }
}

export default Countries;
