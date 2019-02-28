import React, { Component } from 'react';

import Sidebar from './components/Sidebar';
import Main from './components/Main';

import './app.css';

const COUNTRIES_API = 'https://restcountries.eu/rest/v2/all';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentContents: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    this.fetchCountries();
  }

  fetchCountries = () => {
    return fetch(COUNTRIES_API)
      .then(res => res)
      .then(data => data.json())
      .then(jsonData => {
        this.setState({
          items: jsonData,
          region: '',
          isLoaded: true
        })
      })
  };

  getCountries = (region) => {
    this.setState({
      currentContents: this.state.items.filter(x => x.region === region),
      region
    })
  };

  render() {
    const {
      items,
      isLoaded,
      currentContents,
      region
    } = this.state;

    if (!isLoaded) {
      return <div> loading </div>
    }

    const continents = [...new Set(items
      .map(item => item.region)
      .filter(item => item)
    )];

    return (
      <div>
        <Sidebar
          continents={continents}
          onClick={this.getCountries}
        />
        <Main
          mainContents={currentContents}
          region={region}
        />
      </div>
    )
  }
}

export default App;
