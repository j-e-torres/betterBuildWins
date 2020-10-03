import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { InputContext } from '../../../Customize/InputProvider';
import Autocomplete from '../../../../components/Autocomplete';
import { ddragonBase } from '../../../../../api/ddragonAPI';

const SelfInput = ({ apiVersion }) => {
  const inputChampion = 'champion';
  const inputItem = 'item';
  return (
    <div className="form">
      <InputContext.Consumer>
        {context => (
          <Fragment>
            <h1 className="heading-primary">Your Stats</h1>

            <div className="form__group">
              <label htmlFor="championLevel" className="form__label">
                Your Champion Level
              </label>

              <div className="form__input-box">
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
            </div>

            <div className="form__group">
              <label htmlFor="timeAlive" className="form__label">
                Time Alive (secs)
              </label>

              <div className="form__input-box">
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
            </div>

            <Autocomplete
              addToLocal={context.addToLocal}
              localData={context.state.localChamp}
              inputField={inputChampion}
            />
            <Autocomplete
              addToLocal={context.addToLocal}
              localData={context.state.localItems}
              inputField={inputItem}
            />

            <figure className="form__figure u-margin-bottom-small">
              {context.state.localChamp.length > 0 && (
                <img
                  onClick={() =>
                    context.removeFromLocal(
                      context.state.localChamp[0],
                      inputChampion,
                    )
                  }
                  alt={context.state.localChamp[0].name}
                  src={`${ddragonBase}/cdn/img/champion/tiles/${context.state.localChamp[0].name}_0.jpg`}
                  className="form__img form__img--champion"
                />
              )}
            </figure>

            <ul className="form__list">
              {context.state.localItems.map((item, index) => {
                return (
                  <Fragment>
                    <li
                      key={index}
                      className="form__listItem"
                      onClick={() => context.removeFromLocal(item, inputItem)}
                    >
                      <img
                        src={`${ddragonBase}/cdn/${apiVersion.version}/img/item/${item.image.full}`}
                        alt={item.name}
                        className="form__img form__img--item"
                      />
                    </li>

                    {/* <div className="form__tooltip">
                      <span className="form__itemInfo">{item.name}</span>
                      <span className="form__itemInfo">
                        {item.description.replace(/<\W*\w*\s*\S*>/g, '')}
                      </span>
                      <span className="form__itemInfo">
                        Cost:{item.gold.base}
                      </span>
                    </div> */}
                  </Fragment>
                );
              })}
            </ul>
          </Fragment>
        )}
      </InputContext.Consumer>
    </div>
  );
};

const mapState = ({ apiVersion }) => ({ apiVersion });

export default connect(mapState)(SelfInput);
