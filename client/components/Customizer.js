/* eslint-disable no-alert */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import AutocompleteChamp from './Autocompletes/AutocompleteChampion';
import AutocompleteItem from './Autocompletes/AutocompleteItem';

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
      <div>
        <section className="stats-container">
          <form>
            <div className="enemy-stats-form">
              <label>
                Physical Distribution
                <input
                  type="number"
                  name="physicalPercent"
                  value={physicalPercent}
                  onChange={handleChange}
                  step=".1"
                />
              </label>

              <label>
                Magic Distribution
                <input disabled value={Math.abs(1 - physicalPercent)} />
              </label>

              <label>
                Lethality
                <input
                  type="number"
                  name="lethality"
                  value={lethality}
                  onChange={handleChange}
                />
              </label>

              <label>
                Flat Magic Pen
                <input
                  type="number"
                  name="flatMagicPen"
                  value={flatMagicPen}
                  onChange={handleChange}
                />
              </label>

              <label>
                Percent Arm Pen
                <input
                  type="number"
                  name="percentArmPen"
                  value={percentArmPen}
                  onChange={handleChange}
                  max="1"
                  step=".1"
                />
              </label>

              <label>
                Percent Magic Pen
                <input
                  type="number"
                  name="percentMagicPen"
                  value={percentMagicPen}
                  onChange={handleChange}
                  max="1"
                  step=".1"
                />
              </label>

              <label>
                Armor
                <input
                  type="number"
                  name="enemyArmor"
                  value={enemyArmor}
                  onChange={handleChange}
                />
              </label>

              <label>
                Magic Resist
                <input
                  type="number"
                  name="enemyMagicResist"
                  value={enemyMagicResist}
                  onChange={handleChange}
                />
              </label>

              <label>
                Health
                <input
                  type="number"
                  name="enemyHealth"
                  value={enemyHealth}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="your-stats-form">
              <label>
                Your level
                <input
                  type="number"
                  name="championLevel"
                  value={championLevel}
                  onChange={handleChange}
                  step="1"
                  max="18"
                  min="1"
                />
              </label>

              <label>
                Time alive (secs)
                <input
                  type="number"
                  name="timeAlive"
                  value={timeAlive}
                  onChange={handleChange}
                  step=".5"
                  min=".5"
                />
              </label>

              <AutocompleteChamp
                onClickChampion={onClickChampion}
                localChamp={localChamp}
                addChampionToState={addChampionToState}
              />

              <AutocompleteItem
                localItems={localItems}
                onClickItem={onClickItem}
                addItemToState={addItemToState}
              />

              <div className="champ-and-items">
                <div className="champ-selected">
                  {localChamp.length > 0 && (
                    <img
                      onClick={event => onClickChampion(localChamp[0], event)}
                      alt={localChamp[0].name}
                      src={`https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${localChamp[0].name}_0.jpg`}
                    />
                  )}
                </div>
                <div className="items-list-container">
                  <ul className="items-list">
                    {localItems.map((itemObj, index) => {
                      return (
                        <li
                          key={index}
                          className="item"
                          onClick={event => onClickItem(itemObj, event)}
                        >
                          <img
                            src={`https://ddragon.leagueoflegends.com/cdn/9.21.1/img/item/${itemObj.image.full}`}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <button type="submit">Calculate</button>
            </div>
          </form>

          <ChampionStats
            championLevel={championLevel}
            timeAlive={timeAlive}
            handleChange={handleChange}
            localChamp={localChamp}
            localItems={localItems}
            onClickItem={onClickItem}
            onClickChampion={onClickChampion}
            lethality={lethality}
            flatMagicPen={flatMagicPen}
            percentArmPen={percentArmPen}
            percentMagicPen={percentMagicPen}
            physicalPercent={physicalPercent}
            enemyArmor={enemyArmor}
            enemyHealth={enemyHealth}
            enemyMagicResist={enemyMagicResist}
          />
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ champions, items }) => ({ champions, items });

export default connect(mapStateToProps)(Customizer);
