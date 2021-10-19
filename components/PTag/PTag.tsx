import cn from "classnames";

import styles from "./PTag.module.css";
import {PTagProps} from "./PTag.props";

export function PTag(props: PTagProps): JSX.Element {
  const {size = "m", className, children, ...otherProps} = props;

  return <p className={cn(styles.p, className, styles[size])} {...otherProps}>{children}</p>;
}
