import cn from "classnames";
import {motion, useReducedMotion} from "framer-motion";
import Link from "next/link";
import {useRouter} from "next/router";
import {KeyboardEvent, useContext, useState} from "react";

import {AppContext} from "../../context/app.context";
import {firstLevelMenu} from "../../helpers/helpers";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/menu.interface";

import styles from "./Menu.module.css";

export function Menu(): JSX.Element {
  const {menu, setMenu, firstCategory} = useContext(AppContext);

  const [announce, setAnnounce] = useState<"closed" | "opened" | undefined>();

  const router = useRouter();

  const shouldReduceMotion = useReducedMotion();

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory === secondCategory) {
        setAnnounce(m.isOpened ? "closed" : "opened");
        m.isOpened = !m.isOpened;
      }

      return m;
    }));
  };

  const openSecondLevelKey = (e: KeyboardEvent, secondCategory: string) => {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const variants = {
    visible: {
      marginBottom: 20,
      transition: shouldReduceMotion ? {} : {
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    },
    hidden: {
      marginBottom: 0,
    },
  };

  const variantsChildren = {
    visible: {
      height: 29,
      opacity: 1,
    },
    hidden: {
      height: 0,
      opacity: shouldReduceMotion ? 1 : 0,
    },
  };

  const buildFirstLevel = () => {
    return (
      <ul className={styles.firstLevelList}>
        {firstLevelMenu.map(m => {
          return (
            <li key={m.route} aria-expanded={m.id === firstCategory}>
              <Link href={`/${m.route}`}>
                <a>
                  <div className={cn(styles.firstLevel, {[styles.firstLevelActive]: m.id === firstCategory})}>
                    {m.icon}
                    <span>{m.name}</span>
                  </div>
                </a>
              </Link>
              {m.id === firstCategory && buildSecondLevel(m)}
            </li>
          );
        })}
      </ul>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <ul className={styles.secondBlock}>
        {menu.map(m => {
          if (m.pages.map(p => p.alias).includes(router.asPath.split("/")[2])) {
            m.isOpened = true;
          }

          return (
            <li key={m._id.secondCategory}>
              <button
                className={styles.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
                onKeyDown={(e: KeyboardEvent) => openSecondLevelKey(e, m._id.secondCategory)}
                aria-expanded={m.isOpened}
              >
                {m._id.secondCategory}
              </button>
              <motion.ul
                className={styles.secondLevelBlock}
                layout
                variants={variants}
                initial={m.isOpened ? "visible" : "hidden"}
                animate={m.isOpened ? "visible" : "hidden"}
              >
                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
              </motion.ul>
            </li>
          );
        })}
      </ul>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
    return (
      pages.map(p => (
        <motion.li key={p._id} variants={variantsChildren}>
          <Link href={`/${route}/${p.alias}`}>
            <a
              className={cn(styles.thirdLevel, {[styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath})}
              tabIndex={isOpened ? 0 : -1}
              aria-current={`/${route}/${p.alias}` === router.asPath ? "page" : false}
            >
              {p.category}
            </a>
          </Link>
        </motion.li>
      ))
    );
  };

  return (
      <nav className={styles.menu} role="navigation">
        {announce && <span className="visuallyHidden" role="log">
          {announce == "opened" ? "????????????????????" : "????????????????"}
        </span>}
        {buildFirstLevel()}
      </nav>
  );
}
