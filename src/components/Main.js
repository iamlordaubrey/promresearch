import React, { Component } from 'react';
import Countries from './Countries';
import Info from './Info';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryInfo: {}
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.region !== this.props.region) {
      this.setState({
        countryInfo: {}
      })
    }
  }

  getCountryInfo = (country) => {
    console.log('country clicked', country)
    let newCountryInfo = {
      'name': country.name,
      'alpha2Code': country.alpha2Code,
      'region': country.region
    };

    this.setState({
      countryInfo: newCountryInfo
    })
  };

  render() {
    return (
      <div>
        <Countries
          countries={this.props.mainContents}
          onClick={this.getCountryInfo}
        />
        <Info currentCountryInfo={this.state.countryInfo}/>
      </div>
    )
  }
}

export default Main;
