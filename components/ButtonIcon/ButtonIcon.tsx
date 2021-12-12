import cn from "classnames";

import styles from "./ButtonIcon.module.css";
import {ButtonIconProps, icons} from "./ButtonIcon.props";

export function ButtonIcon(props: ButtonIconProps): JSX.Element {
  const {appearance, icon, className, ...otherProps} = props;
  const IconComp = icons[icon];

  return (
    <button className={cn(styles.button, className, styles[appearance])} {...otherProps}>
      <IconComp />
    </button>
  );
}
