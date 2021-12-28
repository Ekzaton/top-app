import cn from "classnames";
import { format } from "date-fns";

import styles from "./Footer.module.css";
import {FooterProps} from "./Footer.props";

export function Footer(props: FooterProps): JSX.Element {
  const {className, ...otherProps} = props;

  return (
    <footer className={cn(className, styles.footer)} { ...otherProps}>
      <div>OwlTop © 2020 - {format(new Date, "yyyy")} Все права защищены</div>
      <a href="#">Пользовательское соглашение</a>
      <a href="#">Политика конфиденциальности</a>
    </footer>
  );
}
