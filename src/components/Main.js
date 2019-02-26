import React, { Component } from 'react';
import Countries from './Countries';
import Info from './Info';

// const Main = props => {
//   return (
//     <div>
//       <Countries
//         countries={props.mainContents}
//         onClick={this.getCountryInfo}
//       />
//     </div>
//   )
// };

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

// const Countries = ({mainContents}) => {
//   const countries = <div>{mainContents.map(x => <div> {x.name} </div>)}</div>
//   return (
//     <div>
//       <Countries countryList={countries}/>
//       <Info />
//     </div>
//   )
// };

export default Main;