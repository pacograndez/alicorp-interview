export interface PokemonModel {
  name: string;
  url: string;
}

export interface Pagination<T> {
  results: Array<T>;
  next: string;
  previous: string;
  count: number;
}
