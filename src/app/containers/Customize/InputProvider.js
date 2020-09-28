import React, { createContext, Component } from 'react';

export const InputContext = createContext();

export default class InputProvider extends Component {
  state = {
    localChamp: {},
    localItems: [],
    physicalPercent: 0.5,
    lethality: 0,
    flatMagicPen: 0,
    percentArmPen: 0,
    percentMagicPen: 0,
    health: 1000,
    armor: 100,
    magicResist: 100,
    championLevel: 1,
    timeAlive: 5,
  };

  handleChange = ({ target }) => {
    if (target.name === 'physicalPercent') {
      if (Number(target.value) > 1) {
        this.setState({ physicalPercent: 1 });
      } else if (Number(target.value) < 0) {
        this.setState({ physicalPercent: 0 });
      } else this.setState({ physicalPercent: target.value });
    } else this.setState({ [target.name]: target.value });
  };

  onClickItem = itemObj => {
    const { localItems } = this.state;
    const leftOverLocalItems = localItems.filter(
      item => item.name !== itemObj.name,
    );
    this.setState({ localItems: leftOverLocalItems });
  };

  onClickChampion = champObj => {
    const { localChamp } = this.state;
    const leftOverLocalChamp = localChamp.filter(
      champ => champ.name !== champObj.name,
    );
    this.setState({ localChamp: leftOverLocalChamp });
  };

  addChampionToState = champObj => {
    this.setState({ localChamp: [champObj] });
  };

  addItemToState = itemObj => {
    const { localItems } = this.state;
    this.setState({ localItems: [...localItems, itemObj] });
  };

  addToLocal = (data, inputField) => {
    if (inputField === 'item') {
      this.setState({ localItems: [...this.state.localItems, data] });
    } else if (inputField === 'champion') {
      this.setState({ localChamp: [data] });
    }
  };

  render() {
    const {
      handleChange,
      // addChampionToState,
      // addItemToState,
      // onClickChampion,
      // onClickItem,
      addToLocal,
    } = this;
    return (
      <InputContext.Provider
        value={{ state: this.state, handleChange, addToLocal }}
      >
        {this.props.children}
      </InputContext.Provider>
    );
  }
}
