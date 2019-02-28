import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'

const countriesWidth = 480;
const styles = theme => ({
  countries: {
    width: countriesWidth,
    flexShrink: 0,
  },
  countriesPaper: {
    width: countriesWidth,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  toolbar: theme.mixins.toolbar,
});

class Countries extends Component {
  constructor (props) {
    super(props);
    this.state = {
      sortBy: 'name'
    }
  }

  sortFunc = (id) => {
    this.setState({
      sortBy: id
    })
  };

  render() {
    const {
      classes,
      countries,
      onClick: countryClick
    } = this.props;

    const handleClick = (country) => {
      countryClick(country)
    };

    if (countries.length < 1) {
      return <div/>
    }

    console.log('in state', this.state)
    const country = countries
      .sort((a, b) => a[this.state.sortBy]
        .toString()
        .localeCompare(b[this.state.sortBy].toString(), undefined, {numeric: true})
      )
      .map((country, index) => (
        <ListItem button key={index} onClick={e => {
          e.preventDefault();
          handleClick(country)
        }}>
          <ListItemText primary={country.name} />
        </ListItem>
    ));

    let sortButtons = <div/>;
    if (country.length > 0) {
      sortButtons = (
        <div>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className={classes.margin}
            id="name"
            onClick={this.sortFunc.bind(null, "name")}>
            Sort by Name
          </Button>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className={classes.margin}
            id="population"
            onClick={this.sortFunc.bind(null, "population")}>
            Sort by Population
          </Button>
        </div>
      )
    }

    return (
      <div className={classes.countries} variant="permanent" classes={{
        paper: classes.countriesPaper,
      }}>
        <List>
          {sortButtons}
          {country}
        </List>
      </div>
    )
  }
}

Countries.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Countries);
