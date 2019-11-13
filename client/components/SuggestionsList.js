import React, { Fragment } from "react";

const SuggestionsList = ({
  item,
  showOptions,
  filteredOptions,
  onClickItem
}) => {
  if (showOptions && item) {
    if (filteredOptions.length) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {filteredOptions.map((suggestion, index) => {
            let activeBool;

            // Flag the active suggestion with a class
            if (index === activeOptions) {
              activeBool = "suggestion-active";
            }

            return (
              <li
                className={activeBool}
                key={index}
                onClick={event => onClickItem(suggestion, event)}
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

  //   return (
  //      <Fragment>
  //          {showOptions && item && (

  //          )}

  //      </Fragment>
  //   )
};

export default SuggestionsList;
