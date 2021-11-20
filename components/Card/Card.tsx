import cn from "classnames";

import styles from "./Card.module.css";
import {CardProps} from "./Card.props";

export function Card(props: CardProps): JSX.Element {
  const {color ="white", children, className, ...otherProps} = props;

  return (
    <div className={cn(styles.card, className, {[styles.color]: color})} {...otherProps}>
      {children}
    </div>
  );
}
