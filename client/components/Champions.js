import React, { Component } from 'react'
import axios from 'axios'

export default class Champions extends Component {
  constructor() {
    super()

    this.state = {
      champions: {},
      items: {}
    }
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = () => {
    return Promise.all([
      axios.get(
        'http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json'
      ),
      axios.get(
        'http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/item.json'
      )
    ]).then(([champions, items]) => {
      const champData = champions.data.data
      const itemsData = items.data.data

      this.setState({ champions: champData, items: itemsData })
    })
  }
  render() {
    const { champions, items } = this.state
    // console.log(items)

    return (
      <div>
        testing
        <div>
          {Object.keys(champions).map(champ => (
            <div key={champ}>
              {champ} {champions[champ].stats.hp}
            </div>
          ))}
        </div>
      </div>
    )
  }
}
