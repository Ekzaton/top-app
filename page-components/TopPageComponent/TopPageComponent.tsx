import {Advantages, Heading, HHData, Paragraph, Tag} from "../../components";

import styles from "./TopPagecComponent.module.css";
import {TopPageComponentsProps} from "./TopPageComponent.props";
import {TopLevelCategory} from "../../interfaces/page.interface";

export function TopPageComponent(props: TopPageComponentsProps): JSX.Element {
  const {firstCategory, page, products} = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Heading size="h1">{page.title}</Heading>
        {products && <Tag color="grey" size="m">{ products.length}</Tag>}
        <span>Сортировка</span>
      </div>
      <div>
        {products && products.map(p => <div key={p._id}>{p.title}</div>)}
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
      {page.seoText && <Paragraph>{page.seoText}</Paragraph>}
      <Heading size="h2">Получаемые навыки</Heading>
      {page.tags.map(t => <Tag key={t} color="primary">{t}</Tag>)}
    </div>
  );
}
