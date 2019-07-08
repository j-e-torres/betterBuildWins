import React from 'react';
import { Grid } from '@material-ui/core';

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

export const inputFieldCreator = (
  label,
  type,
  className,
  id,
  name,
  placeholder,
  value,
  handleChange

  // eslint-disable-next-line max-params
) => {
  return (
    <Grid item>
      <label>{label}</label>
      <input
        type={type}
        className={className}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </Grid>
  );
};
