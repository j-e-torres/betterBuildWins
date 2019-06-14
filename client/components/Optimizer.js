import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import EnemyStatsForm from './EnemyStats/EnemyStatsForm';

class Optimizer extends Component {
  constructor() {
    super();
    this.state = {
      localChamp: {},
      champion: '',
      item: '',
      localItems: [],
      physicalPercent: 50
    };
  }
  render() {
    const { match } = this.props;
    const optimizeFilter = match.params.optimizeFilter;
    return <EnemyStatsForm />;
  }
}

export default Optimizer;
