import React from 'react';

import { Grid, Button, ButtonGroup } from '@material-ui/core';
import { withStyles, mergeClasses } from '@material-ui/styles';

const styles = theme => ({
  root: {
    margin: '1',
    color: '#9d9d9d',
    height: '5em',
    fontSize: '1em',
    background: '#222',
    // border: '1px solid rgba(10, 180, 180, 1)',
    border: 'none',
    '&:hover': {
      color: 'white',
      background: '#222'
      // border: '1px solid rgba(10, 180, 180, 10)'
    },
    '&:focus': {
      background: '#080808',
      outline: 'none',
      color: 'white',
      textDecoration: 'none',
      border: 'none'
    },
    // '&:active': {
    //   // background: '#080808'
    //   background: 'yellow'
    // }
  },
  buttonActive: {

      background: '#080808',
      outline: 'none',
      color: 'white',
      textDecoration: 'none',
      border: 'none'
  }
});

const OptimizerButtons = ({ classes, location: { pathname } }) => {
  return (
    <Grid container justify="center">
      <Grid item sm={12}>
        <ButtonGroup fullWidth>
          <Button
            classes={{
              root: classes.root
            }}
            href="#/optimize/dps"
          >
            Maximize DPS
          </Button>
          <Button
            classes={{
              root: pathname==='' ? classes.root
            }}
            href="#/optimize/effectiveHealth"
          >
            Maximize Effective Health
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(OptimizerButtons);
// export default OptimizerButtons;
