/* eslint-disable no-alert */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { EnemyStatsForm, YourStatsForm } from './StatsForms';

import { ChampionStats } from './Stats';

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

  onClickChampion = (champObj, event) => {
    const { localChamp } = this.state;
    // event.preventDefault();

    const leftOverLocalChamp = localChamp.filter(
      champ => champ.name !== champObj.name
    );

    this.setState({ localChamp: leftOverLocalChamp });
  };

  addChampionToState = champObj => {
    this.setState({ localChamp: [champObj] });
  };

  addItemToState = itemObj => {
    const { localItems } = this.state;

    this.setState({ localItems: [...localItems, itemObj] });
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
    const {
      handleChange,
      onClickItem,
      onClickChampion,
      addChampionToState,
      addItemToState
    } = this;

    return (
      <Fragment>
        <section className="stats-input-form">
          <form className="clearfix">
            <EnemyStatsForm
              physicalPercent={physicalPercent}
              handleChange={handleChange}
              lethality={lethality}
              flatMagicPen={flatMagicPen}
              percentArmPen={percentArmPen}
              percentMagicPen={percentMagicPen}
              enemyArmor={enemyArmor}
              enemyHealth={enemyHealth}
              enemyMagicResist={enemyMagicResist}
            />

            <YourStatsForm
              championLevel={championLevel}
              handleChange={handleChange}
              timeAlive={timeAlive}
              localChamp={localChamp}
              localItems={localItems}
              addChampionToState={addChampionToState}
              addItemToState={addItemToState}
              onClickChampion={onClickChampion}
              onClickItem={onClickItem}
            />
          </form>
        </section>

        <ChampionStats
          championLevel={championLevel}
          timeAlive={timeAlive}
          localChamp={localChamp}
          localItems={localItems}
          lethality={lethality}
          flatMagicPen={flatMagicPen}
          percentArmPen={percentArmPen}
          percentMagicPen={percentMagicPen}
          physicalPercent={physicalPercent}
          enemyArmor={enemyArmor}
          enemyHealth={enemyHealth}
          enemyMagicResist={enemyMagicResist}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ champions, items }) => ({ champions, items });

export default connect(mapStateToProps)(Customizer);
