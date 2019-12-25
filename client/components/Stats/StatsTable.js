/* eslint-disable complexity */
import React, { Fragment } from 'react';
import { Formulas } from '../Stats/';
import { growthFormula } from '../../helperFunctions';

const StatsTable = ({
  timeAlive,
  parseItemStats,
  localChamp,
  championLevel,
  percentArmPen,
  percentMagicPen,
  lethality,
  flatMagicPen,
  physicalPercent,
  enemyArmor,
  enemyHealth,
  enemyMagicResist
}) => {
  const stats = localChamp.length ? localChamp[0].stats : 0;
  // console.log('stats', stats);
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
    <Fragment>
      <div className="champion-stats-container">
        <div className="champion-stats-tables">
          <table className="offense-table">
            <tbody>
              <tr>
                <td>Attack Damage</td>
                <td>{Math.round(totalAD)}</td>
              </tr>

              <tr>
                <td>Ability Power</td>
                <td>
                  {stats && Math.round(parseItemStats.FlatMagicDamageMod || 0)}
                </td>
              </tr>

              <tr>
                <td>Attack Speed</td>
                <td>{totalAttackSpeed.toFixed(3)}</td>
              </tr>

              <tr>
                <td>Lethality</td>
                <td>-</td>
              </tr>

              <tr>
                <td>Percent Armor Pen</td>
                <td>-</td>
              </tr>

              <tr>
                <td>Flat Magic Pen</td>
                <td>-</td>
              </tr>

              <tr>
                <td>Percent Magic Pen</td>
                <td>-</td>
              </tr>

              <tr>
                <td>CDR</td>
                <td>-</td>
              </tr>

              <tr>
                <td>Crit</td>
                <td>{totalCritChance}</td>
              </tr>
            </tbody>
          </table>

          <table className="defense table">
            <tbody>
              <tr>
                <td>Armor</td>
                <td>{Math.round(totalArmor)}</td>
              </tr>

              <tr>
                <td>Magic Resist</td>
                <td>{Math.round(totalMagicResist)}</td>
              </tr>

              <tr>
                <td>Movespeed</td>
                <td>-</td>
              </tr>

              <tr>
                <td>Health</td>
                <td>{Math.round(totalHealth)}</td>
              </tr>

              <tr>
                <td>Health Regen</td>
                <td>{totalHpRegen.toFixed(1)}</td>
              </tr>

              <tr>
                <td>Mana</td>
                <td>{Math.round(totalMana)}</td>
              </tr>

              <tr>
                <td>Mana Regen</td>
                <td>{totalManaRegen.toFixed(1)}</td>
              </tr>

              <tr>
                <td>Lifesteal</td>
                <td>{stats && (parseItemStats.PercentLifeStealMod || 0)}</td>
              </tr>

              <tr>
                <td>Crit Damage</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
    </Fragment>
  );
};

export default StatsTable;
