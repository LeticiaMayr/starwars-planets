import React from 'react';
import tableContext from '../context/tableContext';

function Table() {
  return (
    <tableContext.Consumer>
      {(value) => (
        <table>
          <tr>
            {value.tableTitles.map((title) => <th key={ title }>{title}</th>)}
          </tr>
          {value.planets.map((planet) => (
            <tr key={ planet.name }>
              {Object.values(planet)
                .map((attribute) => <td key={ attribute }>{attribute}</td>)}
            </tr>))}
        </table>
      )}
    </tableContext.Consumer>
  );
}

export default Table;
