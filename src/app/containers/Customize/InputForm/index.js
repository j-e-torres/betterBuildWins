import React from 'react';
import './form.scss';

import EnemyInput from './EnemyInput';
import SelfInput from './SelfInput';

const InputForm = () => {
  return (
    <section className="section-form">
      <EnemyInput />
      <SelfInput />
    </section>
  );
};

export default InputForm;
