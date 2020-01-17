import React from 'react';

const DefenseTable = ({
  totalArmor,
  totalMagicResist,
  totalHealth,
  totalHpRegen,
  totalMana,
  parseItemStats,
  stats,
  totalManaRegen
}) => {
  return (
    <tbody className="defense-table">
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
  );
};

export default DefenseTable;
