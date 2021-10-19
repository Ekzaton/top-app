import cn from "classnames";

import styles from "./HTag.module.css";
import {HTagProps} from "./HTag.props";

export function HTag(props: HTagProps): JSX.Element {
  const {size, className, children, ...otherProps} = props;

  switch (size) {
    case "h1":
      return <h1 className={cn(styles.h, className, styles.h1)} { ...otherProps}>{children}</h1>;
    case "h2":
      return <h2 className={cn(styles.h, className, styles.h2)} { ...otherProps}>{children}</h2>;
    case "h3":
      return <h3 className={cn(styles.h, className, styles.h3)} { ...otherProps}>{children}</h3>;
    default:
      return <></>;
  }
}
