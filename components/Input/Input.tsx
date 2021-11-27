import cn from "classnames";

import styles from "./Input.module.css";
import {InputProps} from "./Input.props";

export function Input(props: InputProps): JSX.Element {
  const {className, ...otherProps} = props;

  return <input className={cn(className, styles.input)} {...otherProps}/>;
}
