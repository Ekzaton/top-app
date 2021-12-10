import cn from "classnames";
import {format} from "date-fns";
import {ru} from "date-fns/locale";

import styles from "./Review.module.css";
import {ReviewProps} from "./Review.props";
import UserIcon from "./user.svg";

import {Rating} from "../Rating/Rating";

export function Review(props: ReviewProps): JSX.Element {
  const {review, className, ...otherProps} = props;
  const {name, title, description, createdAt, rating} = review;

  return (
    <div className={cn(styles.review, className)} {...otherProps}>
      <UserIcon className={styles.user}/>
      <div>
        <span className={styles.name}>{name}: </span>&nbsp;
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), 'dd MMM yyyy', {locale: ru})}
      </div>
      <div className={styles.rating}>
        <Rating rating={rating}/>
      </div>
      <div className={styles.description}>
        {description}
      </div>
    </div>
  );
}
