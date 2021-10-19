import cn from "classnames";

import ArrowIcon from "./arrow.svg";
import styles from "./Button.module.css";
import {ButtonProps} from "./Button.props";

export function Button(props: ButtonProps): JSX.Element {
  const {appearance, arrow = 'none', className, children, ...otherProps} = props;

  return (
    <button className={cn(styles.button, className, styles[appearance])} {...otherProps}>
      {children}
      {arrow !== "none" && <span className={cn(styles.arrow, styles[arrow])}>
        <ArrowIcon className={styles.right}/>
      </span>}
    </button>
  );
}
