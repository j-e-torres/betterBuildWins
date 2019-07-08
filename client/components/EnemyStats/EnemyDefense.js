import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';

const EnemyDefense = ({ health, armor, magicResist, handleChange }) => {
  return (
    <Grid container>
      <Grid item sm={4}>
        <label className="label-input">Enemy Armor</label>
        <input
          type="number"
          className="inputFields"
          id="armor"
          name="armor"
          placeholder="Enemy Armor"
          value={armor}
          onChange={handleChange}
        />
      </Grid>
      <Grid item sm={4}>
        <label className="label-input">Enemy Magic Resist</label>
        <input
          type="number"
          className="inputFields"
          id="magicResist"
          name="magicResist"
          placeholder="Enemy Magic Resist"
          value={magicResist}
          onChange={handleChange}
        />
      </Grid>
      <Grid item sm={4}>
        <label className="label-input">Enemy Health</label>
        <input
          type="number"
          className="inputFields"
          id="health"
          name="health"
          placeholder="Enemy Health"
          value={health}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};

// export default withStyles(styles)(EnemyDefense);
export default EnemyDefense;
