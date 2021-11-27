import cn from "classnames";

import styles from "./Textarea.module.css";
import {TextareaProps} from "./Textarea.props";

export function Textarea(props: TextareaProps): JSX.Element {
  const {className, ...otherProps} = props;

  return <textarea className={cn(className, styles.textarea)} {...otherProps}/>;
}
