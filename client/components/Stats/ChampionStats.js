import React, { Fragment } from 'react';
// import ItemContainer from './ItemContainer'
import AutocompleteItem from '../Autocompletes/AutocompleteItem';
import AutocompleteChamp from '../Autocompletes/AutocompleteChampion';

import CalculateBuild from '../CalculateBuild';

const ChampionStats = ({
  onClickChampion,
  localChamp,
  localItems,
  onClickItem,
  championLevel,
  timeAlive,
  handleChange,
  lethality,
  flatMagicPen,
  percentArmPen,
  percentMagicPen,
  physicalPercent,
  enemyHealth,
  enemyArmor,
  enemyMagicResist
}) => {
  return (
    <Fragment>
      <section className="champion-stats-section">
        {/* <AutocompleteItem localItems={localItems} onClickItem={onClickItem} /> */}

        {/* level and time alive input */}
        {/* <div className="level-alive-section">
          <div className="stat-panel-name">
            <p>Your Stats</p>
          </div>
          <div className="level-alive-container">
            <div className="level-container">
              <div className="stat-panel-values">
                <p>Level</p>
              </div>
              <div className="stat-panel-input">
                <input
                  type="number"
                  name="championLevel"
                  value={championLevel}
                  onChange={handleChange}
                  step="1"
                  max="18"
                  min="1"
                />
              </div>
            </div>
            <div className="alive-container">
              <div className="stat-panel-values">
                <p>Time Alive (secs)</p>
              </div>
              <div className="stat-panel-input">
                <input
                  type="number"
                  name="timeAlive"
                  value={timeAlive}
                  onChange={handleChange}
                  step=".5"
                  min=".5"
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* Champion and champ banner to left, Stats to right */}
        <div className="champion-selection-container">
          {/* <AutocompleteChamp
            onClickChampion={onClickChampion}
            localChamp={localChamp}
          /> */}

          {/* Stats */}
          <CalculateBuild
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
        </div>
      </section>
    </Fragment>
  );
};

export default ChampionStats;
