import React from 'react';

const EnemyStatsForm = ({
  physicalPercent,
  handleChange,
  lethality,
  flatMagicPen,
  percentArmPen,
  percentMagicPen,
  enemyArmor,
  enemyHealth,
  enemyMagicResist
}) => {
  return (
    <div className="enemy-stats-form">
      <label>
        Physical Distribution
        <input
          type="number"
          name="physicalPercent"
          value={physicalPercent}
          onChange={handleChange}
          step=".1"
        />
      </label>

      <label>
        Magic Distribution
        <input disabled value={Math.abs(1 - physicalPercent)} />
      </label>

      <label>
        Lethality
        <input
          type="number"
          name="lethality"
          value={lethality}
          onChange={handleChange}
        />
      </label>

      <label>
        Flat Magic Pen
        <input
          type="number"
          name="flatMagicPen"
          value={flatMagicPen}
          onChange={handleChange}
        />
      </label>

      <label>
        Percent Arm Pen
        <input
          type="number"
          name="percentArmPen"
          value={percentArmPen}
          onChange={handleChange}
          max="1"
          step=".1"
        />
      </label>

      <label>
        Percent Magic Pen
        <input
          type="number"
          name="percentMagicPen"
          value={percentMagicPen}
          onChange={handleChange}
          max="1"
          step=".1"
        />
      </label>

      <label>
        Armor
        <input
          type="number"
          name="enemyArmor"
          value={enemyArmor}
          onChange={handleChange}
        />
      </label>

      <label>
        Magic Resist
        <input
          type="number"
          name="enemyMagicResist"
          value={enemyMagicResist}
          onChange={handleChange}
        />
      </label>

      <label>
        Health
        <input
          type="number"
          name="enemyHealth"
          value={enemyHealth}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default EnemyStatsForm;
