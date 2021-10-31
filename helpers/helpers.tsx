import {FirstLevelMenuItem} from "../interfaces/menu.interface";
import {LevelCategory} from "../interfaces/page.interface";

import CoursesIcon from "./icons/courses.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import ServicesIcon from "./icons/services.svg";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: LevelCategory.Courses},
  {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: LevelCategory.Services},
  {route: 'books', name: 'Книги', icon: <BooksIcon/>, id:  LevelCategory.Books},
  {route: 'products', name: 'Товары', icon: <ProductsIcon/>, id:  LevelCategory.Products},
];
