import cn from "classnames";
import {motion} from "framer-motion";
import {ForwardedRef, forwardRef} from "react";

import styles from "./Card.module.css";
import {CardProps} from "./Card.props";

export const Card = motion(forwardRef((props: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const {color = "white", children, className, ...otherProps} = props;

  return (
    <div ref={ref} className={cn(styles.card, className, {[styles.blue]: color === "blue"})} {...otherProps}>
      {children}
    </div>
  );
}));
