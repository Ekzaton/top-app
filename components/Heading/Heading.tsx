import cn from "classnames";

import styles from "./Heading.module.css";
import {HeadingProps} from "./Heading.props";

export function Heading(props: HeadingProps): JSX.Element {
  const {size, className, children, ...otherProps} = props;

  switch (size) {
    case "h1":
      return <h1 className={cn(styles.h, className, styles.h1)} {...otherProps}>{children}</h1>;
    case "h2":
      return <h2 className={cn(styles.h, className, styles.h2)} {...otherProps}>{children}</h2>;
    case "h3":
      return <h3 className={cn(styles.h, className, styles.h3)} {...otherProps}>{children}</h3>;
    default:
      return <></>;
  }
}
