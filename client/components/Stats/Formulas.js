import React from 'react';

const Formulas = () => {
  return (
    <section className="formulas-container">
      <div className="health-formulas">
        <div>Effective HP</div>
        <div>
          <table>
            <tr>
              <td>Against Physical</td>
              <td>1500</td>
            </tr>
            <tr>
              <td>Against Magic</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>Weighted</td>
              <td>1750</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="dps-formulas">
        <div>Auto Attack DPS</div>
        <div>
          <table>
            <tr>
              <td>Before Mitigation</td>
              <td>200</td>
            </tr>
            <tr>
              <td>After Mitigation</td>
              <td>100</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Formulas;
