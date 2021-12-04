import cn from "classnames";

import styles from "./Divider.module.css";
import {DividerProps} from "./Divider.props";

export function Divider(props: DividerProps): JSX.Element {
  const {className, ...otherProps} = props;

  return <hr className={cn(styles.hr, className)} {...otherProps}/>;
}
