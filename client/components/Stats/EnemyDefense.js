import React from 'react';

const EnemyDefense = ({
  enemyArmor,
  enemyHealth,
  enemyMagicResist,
  handleChange
}) => {
  return (
    <section className="enemy-defense-stats">
      {/* 1st Stat panel */}
      <div className="stat-panel">
        {/* Stat panel name */}
        <div className="stat-panel-name">Enemy Defense</div>

        {/* State panel value */}
        <div className="stat-panel-values">
          <div>
            <div>
              <p>Armor</p>
            </div>
            <div className="stat-panel-input">
              <input
                type="number"
                name="enemyArmor"
                value={enemyArmor}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <p>Magic resist</p>
            </div>
            <div className="stat-panel-input">
              <input
                type="number"
                name="enemyMagicResist"
                value={enemyMagicResist}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <p>Health</p>
            </div>
            <div className="stat-panel-input">
              <input
                type="number"
                name="enemyHealth"
                value={enemyHealth}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnemyDefense;
