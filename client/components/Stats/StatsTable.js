/* eslint-disable complexity */
import React, { Fragment } from 'react';
import { Formulas } from '../Stats/';
import { growthFormula } from '../../helperFunctions';

const StatsTable = ({
  timeAlive,
  parseItemStats,
  localChamp,
  championLevel
}) => {
  const stats = localChamp.length ? localChamp[0].stats : 0;
  // console.log('stats', stats);
  return (
    <Fragment>
      <div className="champion-stats-container">
        <div className="champion-stats-tables">
          <table className="offense-table">
            <tbody>
              <tr>
                <td>Attack Damage</td>
                <td>
                  {stats &&
                    Math.round(
                      growthFormula(stats.attackdamageperlevel, championLevel) +
                        stats.attackdamage +
                        (parseItemStats.FlatPhysicalDamageMod || 0)
                    )}
                </td>
              </tr>

              <tr>
                <td>Ability Power</td>
                <td>
                  {stats && Math.round(parseItemStats.FlatMagicDamageMod || 0)}
                </td>
              </tr>

              <tr>
                <td>Attack Speed</td>
                <td>
                  {stats &&
                    (
                      stats.attackspeed *
                      (1 +
                        growthFormula(
                          stats.attackspeedperlevel / 100,
                          championLevel
                        ) +
                        (parseItemStats.PercentAttackSpeedMod || 0))
                    ).toFixed(3)}
                </td>
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
                <td>
                  {stats &&
                    growthFormula(stats.critperlevel, championLevel) +
                      stats.crit +
                      (parseItemStats.FlatCritChanceMod || 0)}
                </td>
              </tr>
            </tbody>
          </table>

          <table className="defense table">
            <tbody>
              <tr>
                <td>Armor</td>
                <td>
                  {stats &&
                    Math.round(
                      growthFormula(stats.armorperlevel, championLevel) +
                        stats.armor +
                        (parseItemStats.FlatArmorMod || 0)
                    )}
                </td>
              </tr>

              <tr>
                <td>Magic Resist</td>
                <td>
                  {stats &&
                    Math.round(
                      growthFormula(stats.spellblockperlevel, championLevel) +
                        stats.spellblock +
                        (parseItemStats.FlatSpellBlockMod || 0)
                    )}
                </td>
              </tr>

              <tr>
                <td>Movespeed</td>
                <td>
                  {/* {stats &&
                  Math.round(
                    stats.movespeed + (parseItemStats.FlatMovementSpeedMod || 0)
                  )} */}{' '}
                  -
                </td>
              </tr>

              <tr>
                <td>Health</td>
                <td>
                  {stats &&
                    Math.round(
                      growthFormula(stats.hpperlevel, championLevel) +
                        stats.hp +
                        (parseItemStats.FlatHPPoolMod || 0)
                    )}
                </td>
              </tr>

              <tr>
                <td>Health Regen</td>
                <td>
                  {/* just champ stats */}
                  {stats &&
                    Math.round(
                      growthFormula(stats.hpregenperlevel, championLevel) +
                        stats.hpregen
                    )}
                </td>
              </tr>

              <tr>
                <td>Mana</td>
                <td>
                  {stats &&
                    Math.round(
                      growthFormula(stats.mpperlevel, championLevel) +
                        stats.mp +
                        (parseItemStats.FlatMPPoolMod || 0)
                    )}
                </td>
              </tr>

              <tr>
                <td>Mana Regen</td>
                <td>
                  {/* just champ stats */}
                  {stats &&
                    Math.round(
                      growthFormula(stats.mpregenperlevel, championLevel) +
                        stats.mpregen
                    )}
                </td>
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
        stats={stats}
        parseItemStats={parseItemStats}
        championLevel={championLevel}
        timeAlive={timeAlive}
      />
    </Fragment>
  );
};

export default StatsTable;
