import {TopLevelCategory, PageModel} from "../../interfaces/page.interface";
import {ProductModel} from "../../interfaces/product.interface";

export interface TopPageComponentsProps {
  firstCategory: TopLevelCategory,
  page: PageModel,
  products: ProductModel[]
}
