import React from 'react';
import { connect } from 'react-redux';

class AutocompleteItem extends React.Component {
  constructor() {
    super();
    this.state = {
      activeOptions: 0,
      filteredOptions: [],
      showOptions: false,
      item: ''
    };
  }

  handleChange = ({ target }) => {
    const { itemNames } = this.props;

    const item = target.value;

    // Filter our suggestions that don't contain the user's input
    const filteredOptions = itemNames.filter(
      suggestion => suggestion.toLowerCase().indexOf(item.toLowerCase()) > -1
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeOptions: 0,
      filteredOptions,
      showOptions: true,
      item: target.value
    });
  };

  onClick = ({ target }) => {
    // Update the user input and reset the rest of the state
    this.setState({
      activeOptions: 0,
      filteredOptions: [],
      showOptions: false,
      item: target.innerText
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
        item: filteredOptions[activeOptions]
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
    const { activeOptions, filteredOptions, showOptions, item } = this.state;

    const { handleChange, onClick, onKeyDown } = this;

    let suggestionsListComponent;

    if (showOptions && item) {
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
                <li className={activeBool} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <div className="items-container">
        <div>
          <p className="stat-panel-name">Select Your Items</p>
        </div>
        <div className="search-bar-container">
          <input
            className="search-bar"
            placeholder="Type an item"
            type="text"
            name="item"
            value={item}
            onChange={handleChange}
          />
          {suggestionsListComponent}
        </div>
        <div className="items-list-container">
          <ul className="items-list">
            {/* create li as items search */}
            <li
              className="item"
              style={{
                backgroundImage: `url(
                'https://ddragon.leagueoflegends.com/cdn/9.19.1/img/item/1038.png'
              )`
              }}
            >
              item 1
            </li>
            <li className="item">item 2</li>
            <li className="item">item 3</li>
            <li className="item">item 4</li>
            <li className="item">item 5 </li>
            <li className="item">item 6</li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ itemNames }) => ({ itemNames });

export default connect(mapStateToProps)(AutocompleteItem);
