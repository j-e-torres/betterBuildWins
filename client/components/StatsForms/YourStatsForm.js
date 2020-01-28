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
    <div className="your-input-form">
      <div className="input-row">
        <div className="input-title">Your level</div>
        <div className="input">
          <input
            type="number"
            name="championLevel"
            value={championLevel}
            onChange={handleChange}
            step="1"
            max="18"
            min="1"
          />
        </div>
      </div>

      <div className="input-row">
        <div className="input-title">Time alive (secs)</div>
        <div className="input">
          <input
            type="number"
            name="timeAlive"
            value={timeAlive}
            onChange={handleChange}
            step=".5"
            min=".5"
          />
        </div>
      </div>

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
  );
};

export default YourStatsForm;
