/* eslint-disable no-alert */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { EnemyOffense, EnemyDefense, ChampionStats } from './Stats';

class Customizer extends Component {
  constructor() {
    super();
    this.state = {
      localChamp: [],
      localItems: [],

      //Enemy offense
      physicalPercent: 0.5,
      lethality: 0,
      flatMagicPen: 0,
      percentArmPen: 0,
      percentMagicPen: 0,

      //Enemy defense
      enemyHealth: 1000,
      enemyArmor: 100,
      enemyMagicResist: 100,

      //Champ stats
      championLevel: 1,
      timeAlive: 5
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

  onClickItem = (itemObj, { target }) => {
    const { localItems } = this.state;

    const leftOverLocalItems = localItems.filter(
      item => item.name !== itemObj.name
    );

    this.setState({ localItems: leftOverLocalItems });
  };

  onClickChampion = (champObj, { target }) => {
    const { localChamp } = this.state;

    const leftOverLocalChamp = localChamp.filter(
      champ => champ.name !== champObj.name
    );

    this.setState({ localChamp: leftOverLocalChamp });
  };

  render() {
    const {
      localChamp,
      localItems,
      physicalPercent,
      flatMagicPen,
      lethality,
      percentArmPen,
      percentMagicPen,
      enemyArmor,
      enemyHealth,
      enemyMagicResist,
      championLevel,
      timeAlive
    } = this.state;
    const { handleChange, onClickItem, onClickChampion } = this;

    return (
      <div>
        <section className="stats-container">
          <EnemyOffense
            physicalPercent={physicalPercent}
            lethality={lethality}
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
          <ChampionStats
            championLevel={championLevel}
            timeAlive={timeAlive}
            handleChange={handleChange}
            localChamp={localChamp}
            localItems={localItems}
            onClickItem={onClickItem}
            onClickChampion={onClickChampion}
          />
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ champions, items }) => ({ champions, items });

export default connect(mapStateToProps)(Customizer);
