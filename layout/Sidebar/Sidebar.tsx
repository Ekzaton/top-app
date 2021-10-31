import cn from "classnames";

import {Menu} from "../Menu/Menu";

import Logo from "../logo.svg";

import styles from "./Sidebar.module.css";
import {SidebarProps} from "./Sidebar.props";

export function Sidebar(props: SidebarProps): JSX.Element {
  const {className, ...otherProps} = props;

  return (
    <div className={cn(className, styles.sidebar)} { ...otherProps}>
      <Logo className={styles.logo}/>
      <div>поиск</div>
      <Menu/>
    </div>
  );
}
