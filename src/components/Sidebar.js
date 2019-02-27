import React from 'react';

const Sidebar = props => {
  const continents = props.continents;

  if (!continents) {
    return <div>Loading...</div>
  }

  const handleClick = (continent) => {
    props.onClick(continent)
  };

  const continent = continents.map((continent, index) => (
    <li key={index} onClick={e => {
      e.preventDefault();
      handleClick(continent)
    }}>
      {continent}
    </li>
  ));

  return (
    <div>
      <ul>
        {continent}
      </ul>
    </div>
  )
};

export default Sidebar;
