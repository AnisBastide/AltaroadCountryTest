import {Country} from "./type";


function comparePopulation(firstCountry:Country, secondCountry:Country) {
  if (firstCountry.population > secondCountry.population) {
    return -1;
  }
  if (firstCountry.population < secondCountry.population) {
    return 1;
  }
  return 0;
}

function compareGDP(firstCountry:Country, secondCountry:Country) {
  if (firstCountry.GDP > secondCountry.GDP) {
    return -1;
  }
  if (firstCountry.GDP < secondCountry.GDP) {
    return 1;
  }
  return 0;
}

function compareSize(firstCountry:Country, secondCountry:Country) {
  if (firstCountry.size > secondCountry.size) {
    return -1;
  }
  if (firstCountry.size < secondCountry.size) {
    return 1;
  }
  return 0;
}

function compareName(firstCountry:Country, secondCountry:Country) {
 return firstCountry.name.localeCompare(secondCountry.name)
}

function compareContinent(firstCountry:Country, secondCountry:Country) {
  return firstCountry.continent.localeCompare(secondCountry.continent)
}

export function filter(data:Country[], filter:string) {
  console.log(filter)
  if (filter === "population") {
    data.sort(comparePopulation);
  }
  if (filter === "size") {
    data.sort(compareSize);
  }
  if (filter === "gdp") {
    data.sort(compareGDP);
  }
  if (filter === 'name'){
    data.sort(compareName)
  }

  if (filter === 'continent'){
    data.sort(compareContinent)
  }
  return data;
}
