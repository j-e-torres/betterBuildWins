import React, { Fragment } from 'react';
import { StatsTable } from './Stats';

const CalculateBuild = ({
  championLevel,
  timeAlive,
  localChamp,
  localItems
}) => {
  const parseItemStats = localItems
    .map(item => {
      return Object.keys(item.stats).reduce((acc, stat) => {
        if (acc[stat]) acc[stat] += item.stats[stat];
        else acc[stat] = item.stats[stat];
        return acc;
      }, {});
    })
    .reduce((acc, statObj) => {
      for (let stat in statObj) {
        if (acc[stat]) acc[stat] += statObj[stat];
        else acc[stat] = statObj[stat];
      }
      return acc;
    }, {});
  console.log('parseStats', parseItemStats);
  return (
    <Fragment>
      <StatsTable
        championLevel={championLevel}
        localChamp={localChamp}
        parseItemStats={parseItemStats}
        timeAlive={timeAlive}
      />
    </Fragment>
  );
};

export default CalculateBuild;
