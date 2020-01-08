import React from 'react';

import { AutocompleteItem, AutocompleteChampion } from '../Autocompletes';

const YourStatsForm = ({
  championLevel,
  handleChange,
  timeAlive,
  localChamp,
  localItems,
  addChampionToState,
  addItemToState,
  onClickChampion,
  onClickItem
}) => {
  return (
    <div className="your-stats-form">
      <label>
        Your level
        <input
          type="number"
          name="championLevel"
          value={championLevel}
          onChange={handleChange}
          step="1"
          max="18"
          min="1"
        />
      </label>

      <label>
        Time alive (secs)
        <input
          type="number"
          name="timeAlive"
          value={timeAlive}
          onChange={handleChange}
          step=".5"
          min=".5"
        />
      </label>

      <AutocompleteChampion
        onClickChampion={onClickChampion}
        localChamp={localChamp}
        addChampionToState={addChampionToState}
      />

      <AutocompleteItem
        localItems={localItems}
        onClickItem={onClickItem}
        addItemToState={addItemToState}
      />

      <div className="champ-and-items">
        <div className="champ-selected">
          {localChamp.length > 0 && (
            <img
              onClick={event => onClickChampion(localChamp[0], event)}
              alt={localChamp[0].name}
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${localChamp[0].name}_0.jpg`}
            />
          )}
        </div>
        <div className="items-list-container">
          <ul className="items-list">
            {localItems.map((itemObj, index) => {
              return (
                <li
                  key={index}
                  className="item"
                  onClick={event => onClickItem(itemObj, event)}
                >
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/9.21.1/img/item/${itemObj.image.full}`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default YourStatsForm;
