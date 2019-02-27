import React from 'react';

const CountryInformation = (props) => {
  const currentCountryInfo = props.currentCountryInfo;

  if (Object.keys(currentCountryInfo).length < 1) {
    return <div></div>
  }

  return (
    <div>
      <ul>
        <li>Alpha2Code: {currentCountryInfo.alpha2Code}</li>
        <li>Name: {currentCountryInfo.name}</li>
        <li>Region: {currentCountryInfo.region}</li>
      </ul>
    </div>
  )
};

export default CountryInformation;
