import cn from "classnames";
import { motion } from 'framer-motion';

import ArrowIcon from "./arrow.svg";
import styles from "./Button.module.css";
import {ButtonProps} from "./Button.props";

export function Button(props: ButtonProps): JSX.Element {
  const {appearance, arrow = 'none', className, children, ...otherProps} = props;

  return (
    <motion.button
      className={cn(styles.button, className, styles[appearance])}
      whileHover={{ scale: 1.05 }}
      {...otherProps}
    >
      {children}
      {arrow !== "none" && <span className={cn(styles.arrow, styles[arrow])}>
        <ArrowIcon className={styles.right}/>
      </span>}
    </motion.button>
  );
}
