import React from 'react';

const CountryInformation = (props) => {
  const currentCountryInfo = props.currentCountryInfo;

  if (Object.keys(currentCountryInfo).length < 1) {
    return <div></div>
  }

  return (
    <div>
      <ul>
        <li>Name: {currentCountryInfo.name}</li>
        <li>Alpha2Code: {currentCountryInfo.alpha2Code}</li>
        <li>Capital: {currentCountryInfo.capital}</li>
        <li>Region: {currentCountryInfo.region}</li>
        <li>Population: {currentCountryInfo.population}</li>
        <li>Area: {currentCountryInfo.area}</li>
        <li>Number of timezones: {currentCountryInfo.timezones.length}</li>
        <li>List of languages spoken:</li>
        <ul>
          {currentCountryInfo.languages.map(language => (<li key={language.name}>{language.name}</li>))}
        </ul>
      </ul>
    </div>
  )
};

export default CountryInformation;
