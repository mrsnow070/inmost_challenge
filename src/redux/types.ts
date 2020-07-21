export type Category = {
  strCategory: string;
};

export type Action = {
  type: string;
  payload?: any;
};

export type DrinkType = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

export type SelectedDrinkType = {strCategory: string; drinks: DrinkType[]}[];
