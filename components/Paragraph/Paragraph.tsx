import cn from "classnames";

import styles from "./Paragraph.module.css";
import {ParagraphProps} from "./Paragraph.props";

export function Paragraph(props: ParagraphProps): JSX.Element {
  const {size = "m", className, children, ...otherProps} = props;

  return <p className={cn(styles.p, className, styles[size])} {...otherProps}>{children}</p>;
}
