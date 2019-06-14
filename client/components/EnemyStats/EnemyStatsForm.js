import React, { Fragment, Component } from 'react';

import EnemyDefense from './EnemyDefense';
import EnemyOffense from './EnemyOffense';

class EnemyStatsForm extends Component {
  render() {
    return (
      <Fragment>
        <EnemyDefense />
        <EnemyOffense />
      </Fragment>
    );
  }
}

export default EnemyStatsForm;
