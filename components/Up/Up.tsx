import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";

import { useScrollY } from "../../hooks/useScrollY";

import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

import styles from "./Up.module.css";

export function Up(): JSX.Element {
  const y = useScrollY();
  const controls = useAnimation();

  useEffect(() => {
    controls.set({opacity: y / document.body.scrollHeight}, );
  }, [controls, y]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div className={styles.up} animate={controls} initial={{opacity: 0}}>
      <ButtonIcon appearance="primary" icon="up" onClick={scrollToTop} />
    </motion.div>
  );
}
