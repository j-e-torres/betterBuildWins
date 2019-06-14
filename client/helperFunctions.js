import React, { Fragment } from 'react';

export const itemValidation = (item, items) => {
  const found = Object.keys(items).reduce((acc, key) => {
    if (items[key].name === item) {
      acc[key] = items[key];
    }
    return acc;
  }, {});

  return found;
};

export const champValidation = (champ, champions) => {
  const found = Object.keys(champions).reduce((acc, key) => {
    if (champions[key].name === champ) {
      acc[key] = champions[key];
    }
    return acc;
  }, {});
  return found;
};

const textFieldCreator = (stateProp, value, onChangeProp, placeholder) => {
  return <Fragment />;
};

export { formInputCreator };
