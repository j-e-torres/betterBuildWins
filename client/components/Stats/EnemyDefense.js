import React, { Fragment } from 'react';

const EnemyDefense = ({ health, armor, magicResist, handleChange }) => {
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
              <input />
            </div>
          </div>
          <div>
            <div>
              <p>Magic resist</p>
            </div>
            <div className="stat-panel-input">
              <input />
            </div>
          </div>
          <div>
            <div>
              <p>Health</p>
            </div>
            <div className="stat-panel-input">
              <input />
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div>
    //   <div>
    //     <label className="label-input">Enemy Armor</label>
    //     <input
    //       type="number"
    //       className="inputFields"
    //       id="armor"
    //       name="armor"
    //       placeholder="Enemy Armor"
    //       value={armor}
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <div>
    //     <label className="label-input">Enemy Magic Resist</label>
    //     <input
    //       type="number"
    //       className="inputFields"
    //       id="magicResist"
    //       name="magicResist"
    //       placeholder="Enemy Magic Resist"
    //       value={magicResist}
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <div>
    //     <label className="label-input">Enemy Health</label>
    //     <input
    //       type="number"
    //       className="inputFields"
    //       id="health"
    //       name="health"
    //       placeholder="Enemy Health"
    //       value={health}
    //       onChange={handleChange}
    //     />
    //   </div>
    // </div>
  );
};

export default EnemyDefense;
