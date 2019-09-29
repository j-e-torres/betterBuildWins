import React from 'react';

const EnemyOffense = () => {
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
              <p className="stat-panel-values-name">Incoming Physical Damage</p>
            </div>
            <div className="stat-panel-input">
              <input />
            </div>
          </div>
          <div>
            <div>
              <p className="stat-panel-values-name">Incoming Magic Damage</p>
            </div>
            <div className="stat-panel-input">
              <input />
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
            <div>Armor Penetration</div>
            <div className="stat-panel-input">
              <input />
            </div>
          </div>
          <div>
            <div>Magic Penetration</div>
            <div className="stat-panel-input">
              <input />
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
            <div>Armor Penetration</div>
            <div className="stat-panel-input">
              <input />
            </div>
          </div>
          <div>
            <div>Magic Penetration</div>
            <div className="stat-panel-input">
              <input />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnemyOffense;
