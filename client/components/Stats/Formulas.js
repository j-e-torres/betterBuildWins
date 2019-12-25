/* eslint-disable complexity */
import React from 'react';
import { effectiveHpFormula, growthFormula } from '../../helperFunctions';

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
    <section className="formulas-container">
      <table className="health-formulas">
        <thead>
          <th> Effective HP</th>
        </thead>
        <tbody>
          <tr>
            <td>Against Physical</td>
            <td>{physicalEHP}</td>
          </tr>
          <tr>
            <td>Against Magic</td>
            <td>{magicEHP}</td>
          </tr>
          <tr>
            <td>Weighted</td>
            <td>{weightedEHP}</td>
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
            <td>{Math.round(dpsBeforeMitigation)}</td>
          </tr>
          <tr>
            <td>After Mitigation</td>
            <td>{Math.round(dpsAfterMitigation)}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Formulas;
