import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { InputContext } from '../../InputProvider';

import { effectiveHpFormula } from '../../../../../utils';

const FormulasTable = ({
  items,
  totalAD,
  totalCritChance,
  totalCritDamage,
  totalHealth,
  totalHpRegen,
  totalArmor,
  totalMagicResist,
  totalAttackSpeed,
  totalMana,
  totalManaegen,
}) => {
  const inputContext = useContext(InputContext);

  const physicalEHP =
    Math.round(
      effectiveHpFormula(
        totalArmor,
        totalHealth,
        totalHpRegen,
        inputContext.state.timeAlive,
        inputContext.state.percentArmPen,
        inputContext.state.lethality,
      ),
    ) || 0;

  const magicEHP =
    Math.round(
      effectiveHpFormula(
        totalMagicResist,
        totalHealth,
        totalHpRegen,
        inputContext.state.timeAlive,
        inputContext.state.percentMagicPen,
        inputContext.state.flatMagicPen,
      ),
    ) || 0;

  const weightedEHP = Math.round(
    physicalEHP * inputContext.state.physicalPercent +
      magicEHP * Math.abs(1 - inputContext.state.physicalPercent) || 0,
  );

  const yourPercentPen = 0;
  const yourLethality = 0;

  const dmgPerHit =
    totalAD * (1 - totalCritChance) +
    totalAD * totalCritChance * (2 + totalCritDamage);

  const enemyMitigationArmor =
    100 /
    (100 + (inputContext.state.armor * (1 - yourPercentPen) - yourLethality));

  const dpsBeforeMitigation = totalAttackSpeed * dmgPerHit;
  const dpsAfterMitigation =
    totalAttackSpeed * dmgPerHit * enemyMitigationArmor;

  return (
    <table className="table">
      <caption className="heading-primary">Formulas</caption>
      <tbody>
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

const mapState = ({ items }) => ({ items });

export default connect(mapState)(FormulasTable);
