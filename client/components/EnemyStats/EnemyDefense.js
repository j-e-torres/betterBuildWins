import React, { Fragment } from 'react';

const EnemyDefense = ({ health, armor, magicResist, handleChange }) => {
  return (
    <div>
      <div>
        <label className="label-input">Enemy Armor</label>
        <input
          type="number"
          className="inputFields"
          id="armor"
          name="armor"
          placeholder="Enemy Armor"
          value={armor}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="label-input">Enemy Magic Resist</label>
        <input
          type="number"
          className="inputFields"
          id="magicResist"
          name="magicResist"
          placeholder="Enemy Magic Resist"
          value={magicResist}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="label-input">Enemy Health</label>
        <input
          type="number"
          className="inputFields"
          id="health"
          name="health"
          placeholder="Enemy Health"
          value={health}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default EnemyDefense;
