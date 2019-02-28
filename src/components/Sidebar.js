import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'

const sidebarWidth = 140;
const styles = theme => ({
  sidebar: {
    width: sidebarWidth,
    flexShrink: 0,
  },
  sidebarPaper: {
    width: sidebarWidth,
  },
  toolbar: theme.mixins.toolbar,
});


const Sidebar = props => {
  const { classes, continents } = props;

  if (continents.length < 1) {
    return <div>Loading...</div>
  }

  const handleClick = (continent) => {
    props.onClick(continent)
  };

  const continent = continents.map((continent, index) => (
    <ListItem button key={index} onClick={e => {
      e.preventDefault();
      handleClick(continent)
    }}>
      <ListItemText primary={continent} />
    </ListItem>
  ));

  return (
    <div className={classes.sidebar} variant="permanent" classes={{
      paper: classes.sidebarPaper,
    }}>
      <div className={classes.toolbar} />
      <List>
        {continent}
      </List>
    </div>
  )
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
