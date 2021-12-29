import cn from "classnames";
import {motion} from "framer-motion";
import Image from "next/image";
import {ForwardedRef, forwardRef, useRef, useState} from "react";

import {priceRu, declOfNum} from "../../helpers/helpers";

import {Button} from "../Button/Button";
import {Card} from "../Card/Card";
import {Divider} from "../Divider/Divider";
import {Rating} from "../Rating/Rating";
import {Review} from "../Review/Review";
import {ReviewForm} from "../ReviewForm/ReviewForm";
import {Tag} from "../Tag/Tag";

import styles from "./Product.module.css";
import {ProductProps} from "./Product.props";

export const Product = motion(forwardRef((props: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const {className, product, ...otherProps} = props;

  const reviewRef = useRef<HTMLDivElement>(null);

  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

  const variants = {
    visible: {
      opacity: 1,
      height: "auto"
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };

  const scrollToReview = () => {
    setIsReviewOpened(true);
    reviewRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    reviewRef.current?.focus();
  };

  return (
    <div ref={ref} className={className} {...otherProps}>
      <Card className={styles.product}>
        <div className={styles.logo}>
          <Image src={process.env.NEXT_PUBLIC_DOMAIN + product.image} width="70" height="70" alt={product.title}/>
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          <span>
            <span className="visuallyHidden">цена</span>
            {product.price && priceRu(product.price)}
          </span>
          {product.oldPrice && <Tag className={styles.oldPrice} color="green">
            <span className="visuallyHidden">скидка</span>
            {product.price && priceRu(product.price - product.oldPrice)}
          </Tag>}
        </div>
        <div className={styles.credit}>
          <span className="visuallyHidden">кредит</span>
          {product.price && priceRu(product.credit)}
          <span className={styles.month}>/мес</span>
        </div>
        <div className={styles.rating}>
          <span className="visuallyHidden">{"рейтинг " + (product.reviewAvg ?? product.initialRating)}</span>
          <Rating rating={product.reviewAvg ?? product.initialRating}/>
        </div>
        <div className={styles.tags}>
          {product.categories.map(c => <Tag key={c} className={styles.category} color="ghost">{c}</Tag>)}
        </div>
        <div className={styles.priceTitle} aria-hidden>цена</div>
        <div className={styles.creditTitle} aria-hidden>в кредит</div>
        <div className={styles.ratingTitle}>
          <a
            href="#ref"
            onClick={scrollToReview}
          >
            {product.reviewCount}
            {" "}
            {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
          </a>
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
        <Divider className={cn(styles.hr, styles.hr2)}/>
        <div className={styles.actions}>
          <Button appearance="primary">Узнать подробнее</Button>
          <Button
            className={styles.reviewButton}
            appearance="ghost"
            arrow={isReviewOpened ? "down" : "right"}
            onClick={() => setIsReviewOpened(!isReviewOpened)}
            aria-expanded={isReviewOpened}
          >
            Читать отзывы
          </Button>
        </div>
      </Card>
      <motion.div
        animate={isReviewOpened ? "visible" : "hidden"}
        variants={variants}
        initial="hidden"
      >
        <Card
          ref={reviewRef}
          className={styles.reviews}
          color="blue"
          tabIndex={isReviewOpened ? 0 : -1}
        >
          {product.reviews.map(r => (
              <div key={r._id}>
                <Review review={r}/>
                <Divider/>
              </div>
          ))}
          <ReviewForm productId={product._id} isOpened={isReviewOpened}/>
        </Card>
      </motion.div>
    </div>
  );
}));
