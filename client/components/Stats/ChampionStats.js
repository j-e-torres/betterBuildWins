/* eslint-disable complexity */
import React, { Fragment } from 'react';

import { growthFormula } from '../../helperFunctions';
import Formulas from './Formulas';
import { OffenseTable, DefenseTable } from '../StatsTables';

const ChampionStats = ({
  localChamp,
  localItems,
  championLevel,
  timeAlive,
  lethality,
  flatMagicPen,
  percentArmPen,
  percentMagicPen,
  physicalPercent,
  enemyHealth,
  enemyArmor,
  enemyMagicResist
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

  const stats = localChamp.length ? localChamp[0].stats : 0;
  // Defense

  const totalArmor =
    stats.armor +
      growthFormula(stats.armorperlevel, championLevel) +
      (parseItemStats.FlatArmorMod || 0) || 0;

  const totalMagicResist =
    stats.spellblock +
      growthFormula(stats.spellblockperlevel, championLevel) +
      (parseItemStats.FlatSpellBlockMod || 0) || 0;

  const totalHealth =
    stats.hp +
      growthFormula(stats.hpperlevel, championLevel) +
      (parseItemStats.FlatHPPoolMod || 0) || 0;

  // DPS
  const totalAD =
    growthFormula(stats.attackdamageperlevel, championLevel) +
      stats.attackdamage +
      (parseItemStats.FlatPhysicalDamageMod || 0) || 0;

  const totalAttackSpeed =
    stats.attackspeed *
      (1 +
        growthFormula(stats.attackspeedperlevel / 100, championLevel) +
        (parseItemStats.PercentAttackSpeedMod || 0)) || 0;

  const totalCritChance =
    growthFormula(stats.critperlevel, championLevel) +
      stats.crit +
      (parseItemStats.FlatCritChanceMod || 0) || 0;

  const totalMana =
    growthFormula(stats.mpperlevel, championLevel) +
      stats.mp +
      (parseItemStats.FlatMPPoolMod || 0) || 0;

  //just champ regen
  const totalHpRegen =
    stats.hpregen + growthFormula(stats.hpregenperlevel, championLevel) || 0;

  const totalManaRegen =
    growthFormula(stats.mpregenperlevel, championLevel) + stats.mpregen || 0;

  const totalCritDamage = 0;
  return (
    <section className="champion-stats-section clearfix">
      <table className="champion-stats-table">
        <thead>
          <tr>
            <th>Champion Stats</th>
          </tr>
        </thead>
        <OffenseTable
          totalAD={totalAD}
          parseItemStats={parseItemStats}
          totalAttackSpeed={totalAttackSpeed}
          totalCritChance={totalCritChance}
          stats={stats}
        />

        <DefenseTable
          totalArmor={totalArmor}
          totalMagicResist={totalMagicResist}
          totalHealth={totalHealth}
          totalHpRegen={totalHpRegen}
          totalMana={totalMana}
          parseItemStats={parseItemStats}
          stats={stats}
          totalManaRegen={totalManaRegen}
        />
      </table>

      <Formulas
        timeAlive={timeAlive}
        lethality={lethality}
        flatMagicPen={flatMagicPen}
        percentArmPen={percentArmPen}
        percentMagicPen={percentMagicPen}
        physicalPercent={physicalPercent}
        totalAD={totalAD}
        totalCritChance={totalCritChance}
        totalCritDamage={totalCritDamage}
        totalHealth={totalHealth}
        totalHpRegen={totalHpRegen}
        totalArmor={totalArmor}
        totalMagicResist={totalMagicResist}
        totalAttackSpeed={totalAttackSpeed}
        enemyArmor={enemyArmor}
        enemyHealth={enemyHealth}
        enemyMagicResist={enemyMagicResist}
      />
    </section>
  );
};

export default ChampionStats;
