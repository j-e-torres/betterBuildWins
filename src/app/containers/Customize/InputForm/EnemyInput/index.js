import React, { Fragment } from 'react';

import { InputContext } from '../../../Customize/InputProvider';

const EnemyInput = () => {
  return (
    <div className="form">
      <InputContext.Consumer>
        {context => (
          <Fragment>
            <div className="form__group">
              <label htmlFor="physicalPercent" className="form__label">
                Physical Distribution
              </label>
              <input
                className="form__input"
                type="number"
                name="physicalPercent"
                id="physicalPercent"
                value={context.state.physicalPercent}
                onChange={context.handleChange}
                step=".1"
                min="0"
              />
            </div>

            <div className="form__group">
              <label htmlFor="magicPercent" className="form__label">
                Magic Distribution
              </label>
              <input
                className="form__input"
                type="number"
                disabled
                id="magicPercent"
                value={Math.abs(
                  1 - Number(context.state.physicalPercent),
                ).toFixed(1)}
              />
            </div>

            <div className="form__group">
              <label htmlFor="lethality" className="form__label">
                Lethality
              </label>
              <input
                className="form__input"
                type="number"
                name="lethality"
                id="lethality"
                value={context.state.lethality}
                onChange={context.handleChange}
                min="0"
              />
            </div>

            <div className="form__group">
              <label htmlFor="flatMagicPen" className="form__label">
                Flat Magic Pen
              </label>
              <input
                className="form__input"
                type="number"
                name="flatMagicPen"
                id="flatMagicPen"
                value={context.state.flatMagicPen}
                onChange={context.handleChange}
                min="0"
              />
            </div>

            <div className="form__group">
              <label htmlFor="percentArmPen" className="form__label">
                Percent Arm Pen
              </label>
              <input
                className="form__input"
                type="number"
                name="percentArmPen"
                id="percentArmPen"
                value={context.state.percentArmPen}
                onChange={context.handleChange}
                step=".1"
                max="1"
                min="0"
              />
            </div>

            <div className="form__group">
              <label htmlFor="percentMagicPen" className="form__label">
                Percent Magic Pen
              </label>
              <input
                className="form__input"
                type="number"
                name="percentMagicPen"
                id="percentMagicPen"
                value={context.state.percentMagicPen}
                onChange={context.handleChange}
                step=".1"
                max="1"
                min="1"
              />
            </div>

            <div className="form__group">
              <label htmlFor="health" className="form__label">
                Health
              </label>
              <input
                className="form__input"
                type="number"
                name="health"
                id="health"
                value={context.state.health}
                onChange={context.handleChange}
                min="0"
              />
            </div>

            <div className="form__group">
              <label htmlFor="armor" className="form__label">
                Armor
              </label>
              <input
                className="form__input"
                type="number"
                name="armor"
                id="armor"
                value={context.state.armor}
                onChange={context.handleChange}
                min="0"
              />
            </div>

            <div className="form__group">
              <label htmlFor="magicResist" className="form__label">
                Magic Resist
              </label>
              <input
                className="form__input"
                type="number"
                name="magicResist"
                id="magicResist"
                value={context.state.magicResist}
                onChange={context.handleChange}
                min="0"
              />
            </div>
          </Fragment>
        )}
      </InputContext.Consumer>
    </div>
  );
};

export default EnemyInput;
