/* eslint-disable no-alert */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { itemValidation, champValidation } from '../helperFunctions';

import { LocalItems } from './LocalItems';
import { CalculateBuild } from './CalculateBuild';
import { EnemyOffense, EnemyDefense, ChampionStats, Formulas } from './Stats';

class Customizer extends Component {
  constructor() {
    super();
    this.state = {
      localChamp: {},
      champion: '',
      item: '',
      localItems: [],

      //Enemy offense
      physicalPercent: 0.5,
      flatArmPen: 0,
      flatMagicPen: 0,
      percentArmPen: 0,
      percentMagicPen: 0,

      //Enemy defense
      enemyHealth: 1000,
      enemyArmor: 100,
      enemyMagicResist: 100
    };
  }

  handleChange = ({ target }) => {
    if (target.name === 'physicalPercent') {
      if (Number(target.value) > 1) {
        this.setState({ physicalPercent: 1 });
      } else if (Number(target.value) < 0) {
        this.setState({ physicalPercent: 0 });
      } else this.setState({ physicalPercent: target.value });
    } else this.setState({ [target.name]: target.value });
  };

  render() {
    const {
      champion,
      item,
      localChamp,
      localItems,
      physicalPercent,
      flatMagicPen,
      flatArmPen,
      percentArmPen,
      percentMagicPen,
      enemyArmor,
      enemyHealth,
      enemyMagicResist
    } = this.state;
    const { handleChange, addToItemsArr, addChampion } = this;

    const addItemDisable = localItems.length >= 6;

    return (
      <div>
        <section className="stats-container">
          <EnemyOffense
            physicalPercent={physicalPercent}
            flatArmPen={flatArmPen}
            flatMagicPen={flatMagicPen}
            percentArmPen={percentArmPen}
            percentMagicPen={percentMagicPen}
            handleChange={handleChange}
          />
          <EnemyDefense
            enemyArmor={enemyArmor}
            enemyHealth={enemyHealth}
            enemyMagicResist={enemyMagicResist}
            handleChange={handleChange}
          />
          <ChampionStats />
          <Formulas />
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ champions, items }) => ({ champions, items });

export default connect(mapStateToProps)(Customizer);
