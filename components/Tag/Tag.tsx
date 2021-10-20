import cn from "classnames";

import styles from "./Tag.module.css";
import {TagProps} from "./Tag.props";

export function Tag(props: TagProps): JSX.Element {
  const {size = "m", color = "ghost", href, className, children, ...otherProps} = props;

  return (
    <div className={cn(styles.tag, className, styles[size], styles[color])} {...otherProps}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
}
