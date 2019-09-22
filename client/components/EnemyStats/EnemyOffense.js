import React, { Component } from 'react';

const EnemyOffense = () => {
  return (
    <div>
      {/* 1st Stat panel */}
      <div>
        {/* Stat panel name */}
        <div>Enemy Damage Distribution</div>

        {/* State panel value */}
        <div>
          <div>
            <div>Incoming Physical Damage</div>
            <div>
              <input />
            </div>
          </div>
          <div>
            <div>Incoming Magic Damage</div>
            <div>
              <input />
            </div>
          </div>
        </div>
      </div>

      {/* 2nd Stat panel */}
      <div>
        {/* Stat panel name */}
        <div>Enemy Flat Penetration</div>

        {/* State panel value */}
        <div>
          <div>
            <div>Armor Penetration</div>
            <div>
              <input />
            </div>
          </div>
          <div>
            <div>Magic Penetration</div>
            <div>
              <input />
            </div>
          </div>
        </div>
      </div>

      {/* 3rd Stat panel */}
      <div>
        {/* Stat panel name */}
        <div>Enemy Percent Penetration</div>

        {/* State panel value */}
        <div>
          <div>
            <div>Armor Penetration</div>
            <div>
              <input />
            </div>
          </div>
          <div>
            <div>Magic Penetration</div>
            <div>
              <input />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnemyOffense;
