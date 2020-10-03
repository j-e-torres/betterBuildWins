import React, { useContext } from 'react';
import { InputContext } from '../InputProvider';
import { growthFormula } from '../../../../utils';
import { champStatCode } from '../../../../vars/champStatCode';
import { itemStatCode } from '../../../../vars/itemStatCode';

import FormulasTable from './FormulasTable';
import StatsOverview from './StatsOverview';
import './table.scss';

const ChampionOverview = () => {
  const inputContext = useContext(InputContext);

  const parseItemStats = inputContext.state.localItems
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

  const stats = inputContext.state.localChamp.length
    ? inputContext.state.localChamp[0].stats
    : 0;

  const totalArmor =
    stats[champStatCode.armor] +
      growthFormula(
        stats[champStatCode.armorperlevel],
        inputContext.state.championLevel,
      ) +
      (parseItemStats[itemStatCode.FlatArmorMod] || 0) || 0;

  const totalMagicResist =
    stats[champStatCode.spellblock] +
      growthFormula(
        stats[champStatCode.spellblockperlevel],
        inputContext.state.championLevel,
      ) +
      (parseItemStats[itemStatCode.FlatSpellBlockMod] || 0) || 0;

  const totalHealth =
    stats[champStatCode.hp] +
      growthFormula(
        stats[champStatCode.hpperlevel],
        inputContext.state.championLevel,
      ) +
      (parseItemStats[itemStatCode.FlatHPPoolMod] || 0) || 0;

  // DPS
  const totalAD =
    growthFormula(
      stats[champStatCode.attackdamageperlevel],
      inputContext.state.championLevel,
    ) +
      stats[champStatCode.attackdamage] +
      (parseItemStats[itemStatCode.FlatPhysicalDamageMod] || 0) || 0;

  const totalAttackSpeed =
    stats.attackspeed *
      (1 +
        growthFormula(
          stats[champStatCode.attackspeedperlevel] / 100,
          inputContext.state.championLevel,
        ) +
        (parseItemStats[itemStatCode.PercentAttackSpeedMod] || 0)) || 0;

  const totalCritChance =
    growthFormula(
      stats[champStatCode.critperlevel],
      inputContext.state.championLevel,
    ) +
      stats[champStatCode.crit] +
      (parseItemStats[itemStatCode.FlatCritChanceMod] || 0) || 0;

  const totalMana =
    growthFormula(
      stats[champStatCode.mpperlevel],
      inputContext.state.championLevel,
    ) +
      stats[champStatCode.mp] +
      (parseItemStats[itemStatCode.FlatMPPoolMod] || 0) || 0;

  //just champ regen
  const totalHpRegen =
    stats[champStatCode.hpregen] +
      growthFormula(
        stats[champStatCode.hpregenperlevel],
        inputContext.state.championLevel,
      ) || 0;

  const totalManaRegen =
    growthFormula(
      stats[champStatCode.mpregenperlevel],
      inputContext.state.championLevel,
    ) + stats[champStatCode.mpregen] || 0;

  const totalCritDamage = 0;

  return (
    <section className="section-overview">
      <FormulasTable
        totalAD={totalAD}
        totalCritChance={totalCritChance}
        totalCritDamage={totalCritDamage}
        totalHealth={totalHealth}
        totalHpRegen={totalHpRegen}
        totalArmor={totalArmor}
        totalMagicResist={totalMagicResist}
        totalAttackSpeed={totalAttackSpeed}
        totalMana={totalMana}
        totalManaRegen={totalManaRegen}
      />
      <StatsOverview
        parseItemStats={parseItemStats}
        totalAD={totalAD}
        totalCritChance={totalCritChance}
        totalCritDamage={totalCritDamage}
        totalHealth={totalHealth}
        totalHpRegen={totalHpRegen}
        totalArmor={totalArmor}
        totalMagicResist={totalMagicResist}
        totalAttackSpeed={totalAttackSpeed}
        totalMana={totalMana}
        totalManaRegen={totalManaRegen}
        stats={stats}
      />
    </section>
  );
};

export default ChampionOverview;
