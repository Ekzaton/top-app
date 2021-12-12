import {SortingEnum} from "../../components/Sorting/Sorting.props";
import {ProductModel} from "../../interfaces/product.interface";

export type SortingAction =
    {type: SortingEnum.Price } |
    {type: SortingEnum.Rating} |
    {type: "reset", initialState: ProductModel[]};

export interface SortingState {
  sorting: SortingEnum;
  products: ProductModel[];
}

export const sortingReducer = (state: SortingState, action: SortingAction): SortingState => {
  switch (action.type) {
    case SortingEnum.Rating:
      return {
        sorting: SortingEnum.Rating,
        products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
      };
    case SortingEnum.Price:
      return {
        sorting: SortingEnum.Price,
        products: state.products.sort((a, b) => a.price > b.price ? -1 : 1)
      };
    case "reset":
      return {
        sorting: SortingEnum.Rating,
        products: action.initialState,
      };
      default:
      return state;
  }
};
