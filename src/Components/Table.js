import React, { useContext } from 'react';
import tableContext from '../context/tableContext';

function Table() {
  const { nameFilter: { filterByName: { name } } } = useContext(tableContext);
  const { numericFilters } = useContext(tableContext);
  console.log(numericFilters);
  return (
    <tableContext.Consumer>
      {(value) => (
        <table>
          <tr>
            {value.tableTitles.map((title) => <th key={ title }>{title}</th>)}
          </tr>
          {
            value.planets.filter((planet) => planet.name.includes(name)).map((planet) => (
              <tr key={ planet.name }>
                {Object.values(planet)
                  .map((attribute) => <td key={ attribute }>{attribute}</td>)}
              </tr>))
          }
        </table>
      )}
    </tableContext.Consumer>
  );
}

export default Table;
