import React from 'react';

const OptimizerButtons = ({ classes, location: { pathname } }) => {
  return (
    <div>
      <div>
        <div>
          <div href="#/optimize/dps">Maximize DPS</div>
          <div href="#/optimize/effectiveHealth">Maximize Effective Health</div>
        </div>
      </div>
    </div>
  );
};

export default OptimizerButtons;
