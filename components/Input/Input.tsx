import cn from "classnames";
import {ForwardedRef, forwardRef} from "react";

import styles from "./Input.module.css";
import {InputProps} from "./Input.props";

export const Input = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  const {className, ...otherProps} = props;

  return <input ref={ref} className={cn(className, styles.input)} {...otherProps}/>;
});
