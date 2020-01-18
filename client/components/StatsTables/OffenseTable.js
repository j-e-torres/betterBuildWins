import React from 'react';

const OffenseTable = ({
  totalAD,
  parseItemStats,
  totalAttackSpeed,
  totalCritChance,
  stats
}) => {
  return (
    <tbody className="offense-table">
      <tr>
        <td>Attack Damage</td>
        <td>{Math.round(totalAD)}</td>
      </tr>

      <tr>
        <td>Ability Power</td>
        <td>{stats && Math.round(parseItemStats.FlatMagicDamageMod || 0)}</td>
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
  );
};

export default OffenseTable;
