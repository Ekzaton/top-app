import cn from "classnames";
import { motion } from 'framer-motion';
import Link from "next/link";
import {useRouter} from "next/router";
import React, {useContext, KeyboardEvent} from "react";

import {AppContext} from "../../context/app.context";
import {firstLevelMenu} from "../../helpers/helpers";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/menu.interface";

import styles from "./Menu.module.css";

export function Menu(): JSX.Element {
  const {menu, setMenu, firstCategory} = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory === secondCategory) {
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
      transition: {
        when: 'beforeChildren',
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
      opacity: 0,
    },
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(m => {
          return (
            <div key={m.route}>
              <Link href={`/${m.route}`}>
                <a>
                  <div className={cn(styles.firstLevel, {[styles.firstLevelActive]: m.id === firstCategory})}>
                    {m.icon}
                    <span>{m.name}</span>
                  </div>
                </a>
              </Link>
              {m.id === firstCategory && buildSecondLevel(m)}
            </div>
          );
        })}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => {
          if (m.pages.map(p => p.alias).includes(router.asPath.split("/")[2])) {
            m.isOpened = true;
          }

          return (
            <div key={m._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
                onKeyDown={(e: KeyboardEvent) => openSecondLevelKey(e, m._id.secondCategory)}
                tabIndex={0}
              >
                {m._id.secondCategory}
              </div>
              <motion.div
                className={styles.secondLevelBlock}
                layout
                variants={variants}
                initial={m.isOpened ? "visible" : "hidden"}
                animate={m.isOpened ? "visible" : "hidden"}
              >
                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
    return (
      pages.map(p => (
        <motion.div key={p._id} variants={variantsChildren}>
          <Link href={`/${route}/${p.alias}`}>
            <a
              className={cn(styles.thirdLevel, {[styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath})}
              tabIndex={isOpened ? 0 : -1}
            >
              {p.category}
            </a>
          </Link>
        </motion.div>
      ))
    );
  };

  return (
      <div className={styles.menu}>
        {buildFirstLevel()}
      </div>
  );
}
