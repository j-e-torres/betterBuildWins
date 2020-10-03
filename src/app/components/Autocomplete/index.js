import React, { useState } from 'react';
import { connect } from 'react-redux';

import './suggestion.scss';

const Autocomplete = ({
  addToLocal,
  localData,
  inputField,
  reducerState,
  apiVersion,
}) => {
  const [data, setData] = useState('');
  const [activeOptions, setActiveOptions] = useState(0);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, toggleShowOptions] = useState(false);

  const handleChange = ({ target }) => {
    const data = target.value;

    // Filter our suggestions that don't contain the user's input
    const filteredOptions = Object.values(reducerState).filter(
      suggestion =>
        suggestion.name.toLowerCase().indexOf(data.toLowerCase()) > -1,
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    setData(data);
    setActiveOptions(0);
    toggleShowOptions(true);
    setFilteredOptions(filteredOptions);
  };

  const onClickSuggestion = (suggestion, addToLocal) => {
    addToLocal(suggestion, inputField);

    setData('');
    setActiveOptions(0);
    toggleShowOptions(false);
    setFilteredOptions([]);
  };

  let suggestionsListComponent;

  if (showOptions && data) {
    if (filteredOptions.length) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {filteredOptions.map((suggestion, index) => {
            let activeBool;

            if (index === activeOptions) {
              activeBool = 'suggestion__active';
            }

            return (
              <li
                className={activeBool}
                onClick={() => onClickSuggestion(suggestion, addToLocal)}
              >
                <div className="suggestion__icon">
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/${apiVersion.version}/img/${inputField}/${suggestion.image.full}`}
                    alt={suggestion.name}
                  />
                </div>
                <div key={suggestion.id} className="suggestion__name">
                  {suggestion.name}
                </div>
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = (
        <div className="suggestion__none">
          <em>No match</em>
        </div>
      );
    }
  }

  const disable =
    inputField === 'champion' ? localData.length >= 1 : localData.length >= 6;

  return (
    <div className="form__group">
      <label htmlFor={inputField} className="form__label">
        Select {inputField}
      </label>
      {suggestionsListComponent}

      <div className="form__input-box">
        <input
          className="form__input"
          type="text"
          name={inputField}
          id={inputField}
          value={data}
          onChange={handleChange}
          disabled={disable}
          placeholder={disable ? 'Max Selected' : inputField}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { inputField } = ownProps;
  const { apiVersion } = state;

  let reducerState;

  if (inputField === 'champion') {
    reducerState = state.champions.champions;
  } else if (inputField === 'item') {
    reducerState = state.items.items;
  }

  return { reducerState, apiVersion };
};

export default connect(mapStateToProps)(Autocomplete);
