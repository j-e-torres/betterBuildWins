import React from 'react';
import { effectiveHpFormula, growthFormula } from '../../helperFunctions';

const Formulas = ({ championLevel, parseItemStats, stats, timeAlive }) => {
  const totalArmor =
    stats.armor +
    growthFormula(stats.armor, championLevel) +
    (parseItemStats.FlatArmorMod || 0);
  return (
    <section className="formulas-container">
      <table className="health-formulas">
        <thead>
          <th> Effective HP</th>
        </thead>
        <tbody>
          <tr>
            <td>Against Physical</td>
            <td>
              {stats &&
                Math.round(effectiveHpFormula(stats.hpperlevel, championLevel))}
            </td>
          </tr>
          <tr>
            <td>Against Magic</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>Weighted</td>
            <td>1750</td>
          </tr>
        </tbody>
      </table>

      <table className="dps-formulas">
        <thead>
          <th>Auto Attack DPS</th>
        </thead>
        <tbody>
          <tr>
            <td>Before Mitigation</td>
            <td>200</td>
          </tr>
          <tr>
            <td>After Mitigation</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Formulas;
