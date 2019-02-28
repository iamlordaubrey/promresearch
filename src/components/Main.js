import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Countries from './Countries';
import Info from './Info';

const styles = theme => ({
  content: {
    marginTop: 30,
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    display: 'flex',
    alignItems: 'flex-start'
  },
  center_vh: {
    position: 'absolute',
    left: '40%',
    top: '20%',
    fontWeight: 600,
    fontSize: 30,
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryInfo: {}
    }
  }
  componentDidMount() {
    this.setState({
      temp: true
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.region !== this.props.region) {
      this.setState({
        countryInfo: {},
        temp: false
      })
    }
  }

  getCountryInfo = (country) => {
    let newCountryInfo = {
      'name': country.name,
      'alpha2Code': country.alpha2Code,
      'capital': country.capital,
      'region': country.region,
      'population': country.population,
      'area': country.area,
      'timezones': country.timezones,
      'languages': country.languages
    };

    this.setState({
      countryInfo: newCountryInfo
    })
  };

  render() {
    const { classes } = this.props;

    if (this.state.temp) {
      return (
        <div className={classes.center_vh}>
          <p>Please select a continent</p>
        </div>
      )
    }

    return (
      <main className={classes.content}>
        <Countries
          countries={this.props.mainContents}
          onClick={this.getCountryInfo}
        />
        <Info currentCountryInfo={this.state.countryInfo}/>
      </main>
    )
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
