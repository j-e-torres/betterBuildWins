import React from 'react';

import FormulasTable from './FormulasTable';
// import StatsOverview from './StatsOverview';
import './table.scss';

const ChampionOverview = () => {
  return (
    <section className="section-overview">
      <FormulasTable />
      {/* <StatsOverview /> */}
    </section>
  );
};

export default ChampionOverview;
