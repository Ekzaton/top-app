import cn from "classnames";
import {ForwardedRef, forwardRef} from "react";

import styles from "./Input.module.css";
import {InputProps} from "./Input.props";

export const Input = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  const {className, error, ...otherProps} = props;

  return(
    <div className={cn(className, styles.inputWrapper)}>
      <input ref={ref} className={cn(styles.input, {[styles.error]: error})} {...otherProps}/>
      {error && <span className={styles.errorMessage} role="alert">{error.message}</span>}
    </div>
  );
});
