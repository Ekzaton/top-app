import cn from "classnames";
import {FunctionComponent, KeyboardEvent, useRef, useState} from "react";

import {Up} from "../components";
import {AppContextProvider, IAppContext} from "../context/app.context";

import {Footer} from "./Footer/Footer";
import {Header} from "./Header/Header";
import {Sidebar} from "./Sidebar/Sidebar";

import styles from "./Layout.module.css";
import {LayoutProps} from "./Layout.props";

function Layout(props: LayoutProps): JSX.Element {
  const {children} = props;
  const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false);

  const bodyRef = useRef<HTMLDivElement>(null);

  const skipContentAction = (e: KeyboardEvent) => {
    if (e.code == 'Space' || e.code == 'Enter') {
      e.preventDefault();
      bodyRef.current?.focus();
    }
    setIsSkipLinkDisplayed(false);
  };

  return (
    <div className={styles.wrapper}>
      <a
        className={cn(styles.skipLink, {[styles.displayed]: isSkipLinkDisplayed})}
        onKeyDown={skipContentAction}
        onFocus={() => setIsSkipLinkDisplayed(true)}
        tabIndex={1}
      >
        Сразу к содержанию
      </a>
      <Header className={styles.header}/>
      <Sidebar className={styles.sidebar}/>
      <div ref={bodyRef} className={styles.body} tabIndex={0}>{children}</div>
      <Footer className={styles.footer}/>
      <Up/>
    </div>
  );
}

export function withLayout<T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
        <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
          <Layout>
            <Component {...props}/>
          </Layout>
        </AppContextProvider>
    );
  };
}
