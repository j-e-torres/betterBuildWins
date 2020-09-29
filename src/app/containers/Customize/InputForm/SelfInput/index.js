import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { InputContext } from '../../../Customize/InputProvider';
import Autocomplete from '../../../../components/Autocomplete';

const SelfInput = ({ apiVersion }) => {
  const inputChampion = 'champion';
  const inputItem = 'item';
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
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${context.state.localChamp[0].name}_0.jpg`}
                  className="form__img form__img--champion"
                />
              )}
            </figure>

            <ul className="form__list">
              {context.state.localItems.map((itemObj, index) => {
                return (
                  <li
                    key={index}
                    className="form__listItem"
                    onClick={() => context.removeFromLocal(itemObj, inputItem)}
                  >
                    <img
                      src={`https://ddragon.leagueoflegends.com/cdn/${apiVersion.version}/img/item/${itemObj.image.full}`}
                      alt={itemObj.name}
                      className="form__img form__img--item"
                    />
                  </li>
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
