/* eslint-disable complexity */
import React from 'react';
import { effectiveHpFormula } from '../../helperFunctions';

const Formulas = ({
  timeAlive,
  lethality,
  flatMagicPen,
  percentArmPen,
  percentMagicPen,
  physicalPercent,
  totalCritChance,
  totalCritDamage,
  totalHealth,
  totalHpRegen,
  totalArmor,
  totalMagicResist,
  totalAD,
  totalAttackSpeed,
  enemyArmor,
  enemyMagicResist,
  enemyHealth
}) => {
  const physicalEHP =
    Math.round(
      effectiveHpFormula(
        totalArmor,
        totalHealth,
        totalHpRegen,
        timeAlive,
        percentArmPen,
        lethality
      )
    ) || 0;

  const magicEHP =
    Math.round(
      effectiveHpFormula(
        totalMagicResist,
        totalHealth,
        totalHpRegen,
        timeAlive,
        percentMagicPen,
        flatMagicPen
      )
    ) || 0;

  const weightedEHP = Math.round(
    physicalEHP * physicalPercent + magicEHP * Math.abs(1 - physicalPercent) ||
      0
  );

  const yourPercentPen = 0;
  const yourLethality = 0;

  const dmgPerHit =
    totalAD * (1 - totalCritChance) +
    totalAD * totalCritChance * (2 + totalCritDamage);
  const enemyMitigationArmor =
    100 / (100 + (enemyArmor * (1 - yourPercentPen) - yourLethality));
  const dpsBeforeMitigation = totalAttackSpeed * dmgPerHit;
  const dpsAfterMitigation =
    totalAttackSpeed * dmgPerHit * enemyMitigationArmor;

  return (
    <table className="formulas-table">
      <thead>
        <tr>
          <th>Formulas</th>
        </tr>
      </thead>
      {/* <thead>Effective HP and Auto Attack DPS</thead> */}
      <tbody className="health-formulas">
        <tr>
          <td>Effective Physical Health </td>
          <td>{physicalEHP}</td>
        </tr>
        <tr>
          <td>Effective Magic Health</td>
          <td>{magicEHP}</td>
        </tr>
        <tr>
          <td>Effective Weighted Health</td>
          <td>{weightedEHP}</td>
        </tr>
      </tbody>

      <tbody className="dps-formulas">
        <tr>
          <td>Auto Attack DPS Before Resist</td>
          <td>{Math.round(dpsBeforeMitigation)}</td>
        </tr>
        <tr>
          <td>Auto Attack DPS After Resist</td>
          <td>{Math.round(dpsAfterMitigation)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Formulas;
