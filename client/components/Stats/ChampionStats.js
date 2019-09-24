import React from 'react';

const ChampionStats = () => {
  return (
    <section>
      {/* items div */}
      <div className="items-container">
        <div>
          <p>Select Your Items</p>
        </div>
        <div className="search-bar-container">
          <input className="search-bar" placeholder="Type an item" />
        </div>
        <div>
          <ul>
            {/* create li as items search */}
            <li>item 1</li>
            <li>item 2</li>
          </ul>
        </div>
      </div>

      {/* level and time alive input */}
      <div>
        <div>
          <div>Level</div>
          <div>
            <input />
          </div>
        </div>
        <div>
          <div>Time Alive(secs)</div>
          <div>
            <input />
          </div>
        </div>
      </div>

      {/* Champion and champ banner to left, Stats to right */}
      <div>
        {/* Champ */}
        <div>
          <div>
            <input placeholder="search champ" />
          </div>
          <div>
            <img
              width="100%"
              alt="Graves"
              src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg"
            />
          </div>
        </div>

        {/* Stats */}
        <div>
          <table>
            <tr>
              <td>Attack Damage</td>
              <td>110</td>
              <td>Armor</td>
              <td>50</td>
            </tr>

            <tr>
              <td>Ability Power</td>
              <td>0</td>
              <td>Magic Resist</td>
              <td>32</td>
            </tr>

            <tr>
              <td>Attack Speed</td>
              <td>1.2</td>
              <td>Movespeed</td>
              <td>340</td>
            </tr>

            <tr>
              <td>Flat Armor Pen</td>
              <td>10</td>
              <td>Health</td>
              <td>2000</td>
            </tr>

            <tr>
              <td>Percent Armor Pen</td>
              <td>.4</td>
              <td>Health Regen</td>
              <td>1.5</td>
            </tr>

            <tr>
              <td>Flat Magic Pen</td>
              <td>0</td>
              <td>Mana</td>
              <td>500</td>
            </tr>

            <tr>
              <td>Percent Magic Pen</td>
              <td>0</td>
              <td>Mana Regen</td>
              <td>2.2</td>
            </tr>

            <tr>
              <td>CDR</td>
              <td>.4</td>
              <td>Lifesteal</td>
              <td>.12</td>
            </tr>

            <tr>
              <td>Crit</td>
              <td>.3</td>
              <td>Crit Damage</td>
              <td>2</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ChampionStats;
