import cn from "classnames";
import {ForwardedRef, forwardRef} from "react";

import styles from "./Textarea.module.css";
import {TextareaProps} from "./Textarea.props";

export const Textarea = forwardRef((props: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  const {className, ...otherProps} = props;

  return <textarea ref={ref} className={cn(className, styles.textarea)} {...otherProps}/>;
});
