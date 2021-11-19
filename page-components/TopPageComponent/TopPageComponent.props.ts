import {LevelCategory, PageModel} from "../../interfaces/page.interface";
import {ProductModel} from "../../interfaces/product.interface";

export interface TopPageComponentsProps {
  firstCategory: LevelCategory,
  page: PageModel,
  products: ProductModel[]
}
