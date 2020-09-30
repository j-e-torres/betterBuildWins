import React from 'react';

// import { effectiveHpFormula } from '../../../../../utils';

const FormulasTable = () => {
  return (
    <table className="table">
      <caption className="heading-primary">Formulas</caption>
      <tr>
        <td className="table__data table__data--formula">
          Effective Physical Health{' '}
        </td>
        <td>1</td>
      </tr>
      <tr>
        <td>Effective Magic Health</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Effective Weighted Health</td>
        <td>1</td>
      </tr>

      <tr>
        <td>Auto Attack DPS Before Resist</td>
        {/* <td>{Math.round(dpsBeforeMitigation)}</td> */}
        <td>{1}</td>
      </tr>
      <tr>
        <td>Auto Attack DPS After Resist</td>
        {/* <td>{Math.round(dpsAfterMitigation)}</td> */}
        <td>{1}</td>
      </tr>
    </table>
  );
};

export default FormulasTable;
