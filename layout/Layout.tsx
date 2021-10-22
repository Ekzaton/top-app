import {Footer} from "./Footer/Footer";
import {Header} from "./Header/Header";
import {Sidebar} from "./Sidebar/Sidebar";

import styles from "./Layout.module.css";
import {LayoutProps} from "./Layout.props";

export function Layout(props: LayoutProps): JSX.Element {
  const {children} = props;

  return (
    <>
      <Header/>
      <div>
        <Sidebar/>
        <div>{children}</div>
      </div>
      <Footer/>
    </>
  );
}
