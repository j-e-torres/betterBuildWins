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
      physicalPercent: 50,
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
          />
          <EnemyDefense />
          <ChampionStats />
          <Formulas />
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ champions, items }) => ({ champions, items });

export default connect(mapStateToProps)(Customizer);
