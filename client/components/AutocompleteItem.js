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
    const { items } = this.props;
    const item = target.value;

    // Filter our suggestions that don't contain the user's input
    const filteredOptions = Object.values(items).filter(
      suggestion =>
        suggestion.name.toLowerCase().indexOf(item.toLowerCase()) > -1
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

  onClickSuggestion = (itemSuggestion, { target }) => {
    const { localItems } = this.props;
    localItems.push(itemSuggestion);

    // Update the user input and reset the rest of the state
    this.setState({
      activeOptions: 0,
      filteredOptions: [],
      showOptions: false,
      item: ''
    });

    document.getElementById('item-search').select();
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
    const { handleChange, onClickSuggestion } = this;
    const { localItems, onClickItem } = this.props;

    const addItemDisable = localItems.length >= 6;

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
                <li
                  className={activeBool}
                  key={index}
                  onClick={event => onClickSuggestion(suggestion, event)}
                >
                  <div className="item-search-icon">
                    <img
                      src={`https://ddragon.leagueoflegends.com/cdn/9.21.1/img/item/${suggestion.image.full}`}
                    />
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
            <em>No items match</em>
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
            id="item-search"
            className="search-bar"
            placeholder={
              addItemDisable ? "You've reached 6 items" : 'Type an item'
            }
            type="text"
            name="item"
            value={item}
            onChange={handleChange}
            disabled={addItemDisable}
          />
          {suggestionsListComponent}
        </div>
        <div className="items-list-container">
          <ul className="items-list">
            {/* create li as items search */}
            {localItems.map((itemObj, index) => {
              return (
                <li
                  key={index}
                  className="item"
                  onClick={event => onClickItem(itemObj, event)}
                  // onMouseOver={() => <div>tesiting?</div>}
                >
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/9.21.1/img/item/${itemObj.image.full}`}
                  />
                  {/* <span className="item-tooltip">{itemObj.name}</span> */}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ items }) => ({ items });

export default connect(mapStateToProps)(AutocompleteItem);
