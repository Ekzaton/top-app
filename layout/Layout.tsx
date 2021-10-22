import {FunctionComponent} from "react";

import {Footer} from "./Footer/Footer";
import {Header} from "./Header/Header";
import {Sidebar} from "./Sidebar/Sidebar";

import styles from "./Layout.module.css";
import {LayoutProps} from "./Layout.props";

function Layout(props: LayoutProps): JSX.Element {
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

export function withLayout<T extends Record<string, unknown>>(Component: FunctionComponent<T>) {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props}/>
      </Layout>
    );
  };
}
