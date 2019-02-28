import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
});


const NavBar = (props) => {
  const { classes } = props;

  return(
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            Prometheus Research - Engineering Assessment
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
