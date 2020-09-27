import React, { Fragment } from 'react';

import InputForm from './InputForm';
import InputProvider from './InputProvider';

const Customizer = () => {
  return (
    <Fragment>
      <InputProvider>
        <InputForm />
        {/* <ChampionOverview /> */}
      </InputProvider>
    </Fragment>
  );
};

export default Customizer;
