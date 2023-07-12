export interface Country {
  name:string;
  population:number;
  size:number;
  continent:Continent;
  Gdp:number;
  image:string;
}
export enum Continent {
  Europe='EUROPE',
  NorthAmerica='NORTH_AMERICA',
  SouthAmerica='SOUTH_AMERICA',
  Africa='AFRICA',
  Asia='ASIA',
  Oceania='OCEANIA'
}
