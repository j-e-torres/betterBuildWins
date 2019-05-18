/* eslint-disable no-alert */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { itemValidation, champValidation } from '../helperFunctions'

import { LocalItems } from './LocalItems'
import { CalculateBuild } from './CalculateBuild'

class Customizer extends Component {
  constructor() {
    super()
    this.state = {
      championObj: {},
      champion: '',
      item: '',
      localItems: [],
      physicalPercent: 50
    }
  }

  handleChange = ({ target }) => {
    if (target.name === 'physicalPercent') {
      if (Number(target.value) > 100) {
        this.setState({ physicalPercent: 100 })
      } else if (Number(target.value) < 0) {
        this.setState({ physicalPercent: 0 })
      } else this.setState({ physicalPercent: target.value })
    } else this.setState({ [target.name]: target.value })
  }

  addChampion = champ => {
    const { champions } = this.props
    const { championObj } = this.state

    const found = champValidation(champ, champions)
    if (Object.keys(found).length) this.setState({ championObj: found })
    else alert('Champ not Found')
    document.querySelector('#addItem').value = ''
    console.log('state champObj', championObj)
  }

  addToItemsArr = item => {
    const { items } = this.props
    const { localItems } = this.state
    const found = itemValidation(item, items)
    if (Object.keys(found).length && localItems.length < 6)
      localItems.push(found)
    else alert('Item not Found')
    document.querySelector('#addItem').value = ''
    console.log('state localItems', localItems)
  }

  render() {
    const { champion, item, localItems, physicalPercent } = this.state
    const { handleChange, addToItemsArr, addChampion } = this

    return (
      <div>
        <div>
          <p>Customize! Fill in the fields below</p>
        </div>
        <div>
          <div>
            <h3>Percentage of incoming damage</h3>
            <label>Enemy Physical Damage: </label>
            <input
              type="number"
              name="physicalPercent"
              value={physicalPercent}
              onChange={handleChange}
            />
            <label>Enemy Magic Damage: </label>
            <input disabled value={Math.abs(100 - physicalPercent)} />
          </div>

          <br />

          <div>
            <label>Pick Your Champion</label>
            <input
              type="text"
              name="champion"
              value={champion}
              onChange={handleChange}
            />
            <button type="button" onClick={() => addChampion(champion)} />
          </div>

          <br />

          <div>
            <label>Select Your Items</label>
            <input
              id="addItem"
              type="text"
              name="item"
              value={item}
              onChange={handleChange}
            />
            <button type="button" onClick={() => addToItemsArr(item)}>
              Submit item
            </button>
            <br />

            <LocalItems localItems={localItems} />
          </div>

          <br />

          <div>
            {/* <button type="button" onClick={() => <CalculateBuild />}>
              Submit your build!
            </button> */}
          </div>

          <CalculateBuild champion={champion} localItems={localItems} />

          <br />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ champions, items }) => ({ champions, items })

export default connect(mapStateToProps)(Customizer)
