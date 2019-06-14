import React, { Component, Fragment } from 'react';

import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  withStyles
} from '@material-ui/core';

class EnemyDefense extends Component {
  constructor() {
    super();
    this.state = {
      health: 1500,
      armor: 75,
      magicResist: 75,
      physicalDmg: 50,
      magicDmg: 50
    };
  }
  render() {
    const { health, armor, magicResist, physicalDmg, magicDmg } = this.state;

    return (
      <Fragment>
        <Grid container>
          <Grid item>
            <TextField
              id="armor"
              label="Enemy Armor"
              name="armor"
              placeholder="How much armor do they have?"
              margin="normal"
              required
              type="text"
              fullWidth
              value={armor}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default EnemyDefense;
