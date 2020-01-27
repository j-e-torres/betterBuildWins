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
    <div className="enemy-input-form">
      <div className="input-row">
        <div className="input-title">Physical Distribution</div>

        <div className="input">
          <input
            type="number"
            name="physicalPercent"
            value={physicalPercent}
            onChange={handleChange}
            step=".1"
          />
        </div>
      </div>

      <div className="input-row">
        <div className="input-title">Magic Distribution</div>
        <div className="input">
          <input disabled value={Math.abs(1 - physicalPercent)} />
        </div>
      </div>

      <div className="input-row">
        <div className="input-title">Lethality</div>
        <div className="input">
          <input
            type="number"
            name="lethality"
            value={lethality}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="input-row">
        <div className="input-title">Flat Magic Pen</div>
        <div className="input">
          <input
            type="number"
            name="flatMagicPen"
            value={flatMagicPen}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="input-row">
        <div className="input-title">Percent Arm Pen</div>
        <div className="input">
          <input
            type="number"
            name="percentArmPen"
            value={percentArmPen}
            onChange={handleChange}
            max="1"
            step=".1"
          />
        </div>
      </div>

      <div className="input-row">
        <div className="input-title">Percent Magic Pen</div>
        <div className="input">
          <input
            type="number"
            name="percentMagicPen"
            value={percentMagicPen}
            onChange={handleChange}
            max="1"
            step=".1"
          />
        </div>
      </div>

      <div className="input-row">
        <div className="input-title">Armor</div>
        <div className="input">
          <input
            type="number"
            name="enemyArmor"
            value={enemyArmor}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="input-row">
        <div className="input-title">Magic Resist</div>
        <div className="input">
          <input
            type="number"
            name="enemyMagicResist"
            value={enemyMagicResist}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="input-row">
        <div className="input-title">Health</div>
        <div className="input">
          <input
            type="number"
            name="enemyHealth"
            value={enemyHealth}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default EnemyStatsForm;
