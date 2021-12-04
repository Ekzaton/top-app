import cn from "classnames";
import Image from "next/image";

import {Button} from "../Button/Button";
import {Card} from "../Card/Card";
import {Divider} from "../Divider/Divider";
import {Rating} from "../Rating/Rating";
import {Tag} from "../Tag/Tag";

import styles from "./Product.module.css";
import {ProductProps} from "./Product.props";
import {priceRu, declOfNum} from "../../helpers/helpers";

export function Product(props: ProductProps): JSX.Element {
  const { className, product } = props;

  return (
    <Card className={cn(styles.product, className)}>
      <div className={styles.logo}>
        <Image src={process.env.NEXT_PUBLIC_DOMAIN + product.image} width="70" height="70" alt={product.title}/>
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>
        {priceRu(product.price)}
        {product.oldPrice && <Tag className={styles.oldPrice} color="green">
          {priceRu(product.price - product.oldPrice)}
        </Tag>}
      </div>
      <div className={styles.credit}>
        {priceRu(product.credit)}
        <span className={styles.month}>/мес</span>
      </div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating}/>
      </div>
      <div className={styles.tags}>
        {product.categories.map(c => <Tag key={c} className={styles.category} color="ghost">{c}</Tag>)}
      </div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>в кредит</div>
      <div className={styles.ratingTitle}>
        {product.reviewCount}
        {' '}
        {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
      </div>
      <Divider className={styles.hr}/>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.features}>
        {product.characteristics.map(c =>
          <div key={c.name} className={styles.characteristic}>
            <span className={styles.characteristicName}>{c.name}</span>
            <span className={styles.characteristicDots}/>
            <span className={styles.characteristicValue}>{c.value}</span>
          </div>
        )}
      </div>
      <div className={styles.advBlock}>
        {product.advantages && <div className={styles.advantages}>
          <div className={styles.advTitle}>Преимущества</div>
          <div>{product.advantages}</div>
        </div>}
        {product.disAdvantages && <div className={styles.disadvantages}>
          <div className={styles.advTitle}>Недостатки</div>
          <div>{product.disAdvantages}</div>
        </div>}
      </div>
      <Divider className={styles.hr}/>
      <div className={styles.actions}>
        <Button appearance="primary">Узнать подробнее</Button>
        <Button className={styles.reviewButton} appearance="ghost" arrow="right" >Читать отзывы</Button>
      </div>
    </Card>
  );
}
