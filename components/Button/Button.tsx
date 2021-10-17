import cn from "classnames";

import {ButtonProps} from "./Button.props";

import styles from "./Button.module.css";

export function Button(props: ButtonProps): JSX.Element {
  const {appearance, className, children, ...otherProps} = props;

  return (
    <button className={cn(styles.button, className, {
      [styles.primary]: appearance === "primary",
      [styles.ghost]: appearance === "ghost"
    })}
    {...otherProps}
    >
      {children}
    </button>
  );
}
