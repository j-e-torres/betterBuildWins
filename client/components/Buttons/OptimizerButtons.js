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
    border: '1px solid rgba(10, 180, 180, 1)',
    '&:hover': {
      color: 'white',
      background: '#222',
      border: '1px solid rgba(10, 180, 180, 10)'
    },
    '&:focus': {
      outline: 'none',
      color: 'white',
      textDecoration: 'none'
    }
  }
});

const OptimizerButtons = ({ classes }) => {
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
              root: classes.root
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
