import React from 'react';

const EnemyOffense = ({
  physicalPercent,
  flatArmPen,
  flatMagicPen,
  percentArmPen,
  percentMagicPen,
  handleChange
}) => {
  return (
    <section className="enemy-offense-stats">
      {/* 1st Stat panel */}
      <div className="stat-panel">
        {/* Stat panel name */}
        <div className="stat-panel-name">Enemy Damage Distribution</div>

        {/* State panel value */}
        <div className="stat-panel-values">
          <div>
            <div>
              <p>Incoming Physical Damage</p>
            </div>
            <div className="stat-panel-input">
              <input
                type="number"
                name="physicalPercent"
                value={physicalPercent}
                onChange={handleChange}
                step=".1"
              />
            </div>
          </div>
          <div>
            <div>
              <p>Incoming Magic Damage</p>
            </div>
            <div className="stat-panel-input">
              <input
                disabled
                value={Math.abs(1 - physicalPercent).toFixed(2)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2nd Stat panel */}
      <div className="stat-panel">
        {/* Stat panel name */}
        <div className="stat-panel-name">Enemy Flat Penetration</div>

        {/* State panel value */}
        <div className="stat-panel-values">
          <div>
            <div>
              <p>Armor Penetration</p>
            </div>
            <div className="stat-panel-input">
              <input
                type="number"
                name="flatArmPen"
                value={flatArmPen}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <p>Magic Penetration</p>
            </div>
            <div className="stat-panel-input">
              <input
                type="number"
                name="flatMagicPen"
                value={flatMagicPen}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3rd Stat panel */}
      <div className="stat-panel">
        {/* Stat panel name */}
        <div className="stat-panel-name">Enemy Percent Penetration</div>

        {/* State panel value */}
        <div className="stat-panel-values">
          <div>
            <div>
              <p>Armor Penetration</p>
            </div>
            <div className="stat-panel-input">
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
          <div>
            <div>
              <p>Magic Penetration</p>
            </div>
            <div className="stat-panel-input">
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
        </div>
      </div>
    </section>
  );
};

export default EnemyOffense;
