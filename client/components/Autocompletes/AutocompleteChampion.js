import React, { Fragment } from 'react';
import { connect } from 'react-redux';

class AutocompleteChampion extends React.Component {
  constructor() {
    super();
    this.state = {
      activeOptions: 0,
      filteredOptions: [],
      showOptions: false,
      champion: ''
    };
  }

  handleChange = ({ target }) => {
    const { champions } = this.props;
    const champion = target.value;

    // Filter our suggestions that don't contain the user's input
    const filteredOptions = Object.values(champions).filter(
      suggestion =>
        suggestion.name.toLowerCase().indexOf(champion.toLowerCase()) > -1
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeOptions: 0,
      filteredOptions,
      showOptions: true,
      champion: target.value
    });
  };

  onClickSuggestion = (champSuggestion, { target }) => {
    const { localChamp } = this.props;
    localChamp.push(champSuggestion);

    // Update the user input and reset the rest of the state
    this.setState({
      activeOptions: 0,
      filteredOptions: [],
      showOptions: false,
      champion: ''
    });
  };

  onKeyDown = e => {
    const { activeOptions, filteredOptions } = this.state;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      this.setState({
        activeOptions: 0,
        showOptions: false,
        champion: filteredOptions[activeOptions]
      });
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeOptions === 0) {
        return;
      }

      this.setState({ activeOptions: activeOptions - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeOptions - 1 === filteredOptions.length) {
        return;
      }

      this.setState({ activeOptions: activeOptions + 1 });
    }
  };

  render() {
    const {
      activeOptions,
      filteredOptions,
      showOptions,
      champion
    } = this.state;
    const { handleChange, onClickSuggestion } = this;
    const { localChamp, onClickChampion } = this.props;

    const addItemDisable = localChamp.length >= 1;

    let suggestionsListComponent;

    if (showOptions && champion) {
      if (filteredOptions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredOptions.map((suggestion, index) => {
              let activeBool;

              // Flag the active suggestion with a class
              if (index === activeOptions) {
                activeBool = 'suggestion-active';
              }

              return (
                <li
                  className={activeBool}
                  key={suggestion.id}
                  onClick={event => onClickSuggestion(suggestion, event)}
                >
                  <div className="item-search-icon">
                    <img
                      src={`https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/${suggestion.image.full}`}
                    />
                    {/* <img
                      src={`https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${suggestion.name}_0.jpg`}
                    /> */}
                  </div>
                  <div>{suggestion.name}</div>
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No Champions match</em>
          </div>
        );
      }
    }

    console.log(localChamp);

    return (
      <div className="champ-search-container">
        <div className="search-bar-container">
          <input
            className="search-bar"
            placeholder={
              addItemDisable ? 'Champion Selected' : 'Type a Champion'
            }
            value={champion}
            onChange={handleChange}
            name="champion"
            disabled={addItemDisable}
          />
          {suggestionsListComponent}
        </div>
        <div className="champ-selected">
          {localChamp.length > 0 ? (
            <img
              onClick={event => onClickChampion(localChamp[0], event)}
              alt={localChamp[0].name}
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${localChamp[0].name}_0.jpg`}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ champions }) => ({ champions });

export default connect(mapStateToProps)(AutocompleteChampion);
