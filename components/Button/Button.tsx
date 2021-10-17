import cn from "classnames";

import {ButtonProps} from "./Button.props";

import styles from "./Button.module.css";

export function Button(props: ButtonProps): JSX.Element {
  const {appearance, children} = props;

  return (
    <button className={cn(styles.button, {
      [styles.primary]: appearance === "primary",
      [styles.ghost]: appearance === "ghost"
    })}>
      {children}
    </button>
  );
}
