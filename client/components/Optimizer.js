import React, { Component } from 'react';

import { Grid } from '@material-ui/core';

import EnemyDefense from './EnemyStats/EnemyDefense';
import EnemyOffense from './EnemyStats/EnemyOffense';
import OptimizerButtons from './Buttons/OptimizerButtons';

class Optimizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      localChamp: {},
      champion: '',
      item: '',
      localItems: [],

      //Enemy Defense
      health: 1500,
      armor: 75,
      magicResist: 75,

      //Enemy Offense
      incomingPhysicalPercent: 50,
      incomingMagicPercent: 50,
      flatArmorPen: 0,
      flatMagicPen: 0,
      percentArmorPen: 0,
      percentMagicPen: 0
    };
  }

  handleChange = ({ target }) => {
    if (target.name === 'physicalPercent') {
      if (Number(target.value) > 100) {
        this.setState({ incomingPhysicalPercent: 100 });
      } else if (Number(target.value) < 0) {
        this.setState({ incomingPhysicalPercent: 0 });
      } else this.setState({ incomingPhysicalPercent: target.value });
    } else this.setState({ [target.name]: target.value });
  };

  render() {
    const {
      health,
      armor,
      magicResist,
      incomingPhysicalPercent,
      incomingMagicPercent
    } = this.state;
    const { handleChange } = this;
    const { match } = this.props;
    const optimizeFilter = match.params.optimizeFilter;

    return (
      <Grid container>
        <OptimizerButtons />

        {optimizeFilter === 'dps' && (
          <EnemyDefense
            health={health}
            armor={armor}
            magicResist={magicResist}
            handleChange={handleChange}
          />
        )}

        {optimizeFilter === 'effectiveHealth' && (
          <EnemyOffense
            health={health}
            armor={armor}
            magicResist={magicResist}
            handleChange={handleChange}
          />
        )}
      </Grid>
    );
  }
}

export default Optimizer;
