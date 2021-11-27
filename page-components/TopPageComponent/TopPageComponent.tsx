import {useReducer} from "react";

import {Advantages, Heading, HHData, Sorting, Tag} from "../../components";
import {SortingEnum} from "../../components/Sorting/Sorting.props";
import {TopLevelCategory} from "../../interfaces/page.interface";

import {sortingReducer} from "./sorting.reducer";
import styles from "./TopPagecComponent.module.css";
import {TopPageComponentsProps} from "./TopPageComponent.props";

export function TopPageComponent(props: TopPageComponentsProps): JSX.Element {
  const {firstCategory, page, products} = props;
  const [{products: sortedProducts, sorting }, dispatchSorting] =
      useReducer(sortingReducer, {products, sorting: SortingEnum.Rating});

  const setSorting = (sorting: SortingEnum) => dispatchSorting({type: sorting});

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Heading size="h1">{page.title}</Heading>
        {products && <Tag color="grey" size="m">{ products.length}</Tag>}
        <Sorting sorting={sorting} setSorting={setSorting}/>
      </div>
      <div>
        {sortedProducts && sortedProducts.map(p => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={styles.hhTitle}>
        <Heading size="h2">Вакансии - {page.category}</Heading>
        <Tag color="red" size="m">hh.ru</Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && page.hh && <HHData {...page.hh}/>}
      {page.advantages && !!page.advantages.length && <>
        <Heading size="h2">Преимущества</Heading>
        <Advantages advantages={page.advantages}/>
      </>}
      {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
      <Heading size="h2">Получаемые навыки</Heading>
      {page.tags.map(t => <Tag key={t} color="primary">{t}</Tag>)}
    </div>
  );
}
