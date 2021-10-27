import cn from "classnames";
import React, {useContext} from "react";

import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/menu.interface";
import {LevelCategory} from "../../interfaces/page.interface";

import BooksIcon from "./icons/books.svg";
import CoursesIcon from "./icons/courses.svg";
import ProductsIcon from "./icons/products.svg";
import ServicesIcon from "./icons/services.svg";
import styles from "./Menu.module.css";

const firstLevelMenu: FirstLevelMenuItem[] = [
  {route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: LevelCategory.Courses},
  {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: LevelCategory.Services},
  {route: 'books', name: 'Книги', icon: <BooksIcon/>, id:  LevelCategory.Books},
  {route: 'products', name: 'Товары', icon: <ProductsIcon/>, id:  LevelCategory.Products},
];

export function Menu(): JSX.Element {
  const {menu, firstCategory} = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(m => {
          return (
            <div key={m.route}>
              <a href={`/${m.route}`}>
                <div className={cn(styles.firstLevel, {[styles.firstLevelActive]: m.id === firstCategory})}>
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </a>
              {m.id === firstCategory && buildSecondLevel(m)}
            </div>
          );
        })}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => {
          return (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div className={cn(styles.secondLevelBlock, {[styles.secondLevelBlockOpened]: m.isOpened})}>
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      pages.map(p => (
        <a href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {[styles.thirdLevelActive]: false})}>
          {p.category}
        </a>
      ))
    );
  };

  return (
      <div className={styles.menu}>
        <ul>
          {buildFirstLevel()}
        </ul>
      </div>
  );
}
