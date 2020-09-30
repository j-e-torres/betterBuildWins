import React from 'react';
import './form.scss';

import EnemyInput from './EnemyInput';
import SelfInput from './SelfInput';

const InputForm = () => {
  return (
    <section className="section-form u-margin-bottom-large">
      <EnemyInput />
      <SelfInput />
    </section>
  );
};

export default InputForm;
