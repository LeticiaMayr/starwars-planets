import React, { useContext } from 'react';
import tableContext from '../context/tableContext';

function Table() {
  const { nameFilter: { filterByName: { name } },
    tableTitles, filteredPlanets } = useContext(tableContext);

  // const toBeUsedPlanets = planets.filter(() => )
  return (
    <table>
      <tr>
        {tableTitles.map((title) => <th key={ title }>{title}</th>)}
      </tr>
      {
        filteredPlanets.filter((planet) => planet.name.includes(name)).map((planet) => (
          <tr key={ planet.name }>
            {Object.values(planet)
              .map((attribute) => <td key={ attribute }>{attribute}</td>)}
          </tr>))
      }
    </table>
  );
}

export default Table;
