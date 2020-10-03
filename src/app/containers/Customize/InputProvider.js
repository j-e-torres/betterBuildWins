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

  removeFromLocal = (data, inputType) => {
    if (inputType === 'item') {
      const foundItem = this.state.localItems.findIndex(
        item => item.name === data.name,
      );

      if (foundItem > -1) {
        this.state.localItems.splice(foundItem, 1);

        this.setState({
          localItems: this.state.localItems,
        });
      }
    } else if (inputType === 'champion') {
      this.setState({ localChamp: [] });
    }
  };

  addToLocal = (data, inputField) => {
    if (inputField === 'item') {
      this.setState({ localItems: [...this.state.localItems, data] });
    } else if (inputField === 'champion') {
      this.setState({ localChamp: [data] });
    }
  };

  render() {
    const { handleChange, addToLocal, removeFromLocal } = this;

    return (
      <InputContext.Provider
        value={{ state: this.state, handleChange, addToLocal, removeFromLocal }}
      >
        {this.props.children}
      </InputContext.Provider>
    );
  }
}
