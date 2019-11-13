import React from "react";
// import ItemContainer from './ItemContainer'
import AutocompleteItem from "../AutocompleteItem";

const ChampionStats = ({ localItems, onClickItem }) => {
  return (
    <section className="champion-stats-section">
      <AutocompleteItem localItems={localItems} onClickItem={onClickItem} />

      {/* level and time alive input */}
      <div className="level-alive-section">
        <div className="stat-panel-name">
          <p>Your Stats</p>
        </div>
        <div className="level-alive-container">
          <div className="level-container">
            <div className="stat-panel-values">
              <p>Level</p>
            </div>
            <div className="stat-panel-input">
              <input />
            </div>
          </div>
          <div className="alive-container">
            <div className="stat-panel-values">
              <p>Time Alive (secs)</p>
            </div>
            <div className="stat-panel-input">
              <input />
            </div>
          </div>
        </div>
      </div>

      {/* Champion and champ banner to left, Stats to right */}
      <div className="champion-selection-container">
        {/* Champ */}
        <div
          // style={{ border: '1px solid red' }}
          className="champ-search-container"
        >
          <div className="search-bar-container">
            <input className="search-bar" placeholder="Type a champion" />
          </div>
          <div>
            {/* <img
              width="25%"
              alt="Graves"
              src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg"
            /> */}
          </div>
        </div>

        {/* Stats */}
        <div className="champion-stats-container">
          <div className="champion-stats-tables">
            <table className="offense-table">
              <tbody>
                <tr>
                  <td>Attack Damage</td>
                  <td>110</td>
                </tr>

                <tr>
                  <td>Ability Power</td>
                  <td>0</td>
                </tr>

                <tr>
                  <td>Attack Speed</td>
                  <td>1.2</td>
                </tr>

                <tr>
                  <td>Lethality</td>
                  <td>10</td>
                </tr>

                <tr>
                  <td>Percent Armor Pen</td>
                  <td>.4</td>
                </tr>

                <tr>
                  <td>Flat Magic Pen</td>
                  <td>0</td>
                </tr>

                <tr>
                  <td>Percent Magic Pen</td>
                  <td>0</td>
                </tr>

                <tr>
                  <td>CDR</td>
                  <td>.4</td>
                </tr>

                <tr>
                  <td>Crit</td>
                  <td>.3</td>
                </tr>
              </tbody>
            </table>

            <table className="defense table">
              <tbody>
                <tr>
                  <td>Armor</td>
                  <td>50</td>
                </tr>

                <tr>
                  <td>Magic Resist</td>
                  <td>32</td>
                </tr>

                <tr>
                  <td>Movespeed</td>
                  <td>340</td>
                </tr>

                <tr>
                  <td>Health</td>
                  <td>2000</td>
                </tr>

                <tr>
                  <td>Health Regen</td>
                  <td>1.5</td>
                </tr>

                <tr>
                  <td>Mana</td>
                  <td>500</td>
                </tr>

                <tr>
                  <td>Mana Regen</td>
                  <td>2.2</td>
                </tr>

                <tr>
                  <td>Lifesteal</td>
                  <td>.12</td>
                </tr>

                <tr>
                  <td>Crit Damage</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChampionStats;
