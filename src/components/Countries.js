import React from 'react';

const Countries = props => {
  const countries = props.countries;

  if (!countries) {
    return <div>Loading...</div>
  }

  const handleClick = (country) => {
    console.log('in country handleclick');
    props.onClick(country)
  };

  const country = countries.map((country, index) => (
    <li key={index} onClick={e => {
      e.preventDefault();
      handleClick(country)
    }}>{country.name}</li>
  ));

  return (
    <div>
      <ul>
        {country}
      </ul>
    </div>
  )
};

export default Countries;