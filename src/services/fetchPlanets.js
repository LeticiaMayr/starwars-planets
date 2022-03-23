const getPlanetList = async () => {
  const STARWARS_PLANETS_API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(STARWARS_PLANETS_API_URL);
  const json = await response.json();
  json.results.forEach((planet) => delete planet.residents);
  return json;
};

export default getPlanetList;
