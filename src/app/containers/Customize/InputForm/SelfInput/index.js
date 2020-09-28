import React, { Fragment } from 'react';

import { InputContext } from '../../../Customize/InputProvider';
import Autocomplete from '../../../../components/Autocomplete';

const SelfInput = () => {
  return (
    <div className="form">
      <InputContext.Consumer>
        {context => (
          <Fragment>
            <h1>Your Stats</h1>

            <div className="form__group">
              <label htmlFor="championLevel" className="form__label">
                Your Champion Level
              </label>
              <input
                className="form__input"
                type="number"
                name="championLevel"
                id="championLevel"
                value={context.state.championLevel}
                onChange={context.handleChange}
                step="1"
                min="0"
                max="18"
              />
            </div>

            <div className="form__group">
              <label htmlFor="timeAlive" className="form__label">
                Time Alive (secs)
              </label>
              <input
                className="form__input"
                type="number"
                name="timeAlive"
                id="timeAlive"
                value={context.state.timeAlive}
                onChange={context.handleChange}
                step="1"
                min="0"
              />
            </div>

            <Autocomplete inputField={'champion'} />
            <Autocomplete inputField={'item'} />
          </Fragment>
        )}
      </InputContext.Consumer>
    </div>
  );
};

export default SelfInput;
