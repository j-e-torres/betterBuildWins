import React from 'react';

const StatsOverview = ({
  parseItemStats,
  totalAD,
  totalCritChance,
  totalCritDamage,
  totalHealth,
  totalHpRegen,
  totalArmor,
  totalMagicResist,
  totalAttackSpeed,
  totalMana,
  totalManaRegen,
  stats,
}) => {
  return (
    <table className="table">
      <caption className="heading-primary">Champion Stats</caption>
      <tbody>
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
  );
};

export default StatsOverview;
