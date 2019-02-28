import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  label: {
    fontWeight: 600,
  },
  toolbar: theme.mixins.toolbar,
});

const CountryInformation = (props) => {
  const { classes, currentCountryInfo } = props;

  if (Object.keys(currentCountryInfo).length < 1) {
    return <div />
  }

  return (
    <div>
        <p><span className={classes.label}>Name:</span> {currentCountryInfo.name} </p>
        <p><span className={classes.label}>Alpha2Code:</span> {currentCountryInfo.alpha2Code}</p>
        <p><span className={classes.label}>Capital:</span> {currentCountryInfo.capital} </p>
        <p><span className={classes.label}>Region:</span> {currentCountryInfo.region} </p>
        <p><span className={classes.label}>Population:</span> {currentCountryInfo.population} </p>
        <p><span className={classes.label}>Area:</span> {currentCountryInfo.area} </p>
        <p><span className={classes.label}>Number of timezones:</span> {currentCountryInfo.timezones.length}</p>
        <p><span className={classes.label}>List of languages spoken:</span></p>
        <ul>
          {currentCountryInfo.languages.map(language => (<li key={language.name}>{language.name}</li>))}
        </ul>
    </div>
  )
};

CountryInformation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CountryInformation);
