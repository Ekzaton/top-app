import cn from "classnames";
import {ForwardedRef, forwardRef} from "react";

import styles from "./Textarea.module.css";
import {TextareaProps} from "./Textarea.props";

export const Textarea = forwardRef((props: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  const {className, error, ...otherProps} = props;

  return (
    <div className={cn(className, styles.textareaWrapper)}>
      <textarea ref={ref} className={cn(styles.textarea, {[styles.error]: error})} {...otherProps}/>
      {error && <span className={styles.errorMessage} role="alert">{error.message}</span>}
    </div>
  );
});
