import cn from "classnames";

import styles from "./Sorting.module.css";
import {SortingEnum, SortingProps} from "./Sorting.props";
import SortingIcon from "./sorting.svg";

export function Sorting(props: SortingProps): JSX.Element {
  const {sorting, setSorting, className, ...otherProps} = props;

  return (
    <div className={cn(styles.sorting, className)} {...otherProps}>
      <button
          className={cn({[styles.active]: sorting === SortingEnum.Rating})}
          onClick={() => setSorting(SortingEnum.Rating)}
      >
        <SortingIcon className={styles.icon}/>
        По рейтингу
      </button>
      <button
          className={cn({[styles.active]: sorting === SortingEnum.Price})}
          onClick={() => setSorting(SortingEnum.Price)}
      >
        <SortingIcon className={styles.icon}/>
        По цене
      </button>
    </div>
  );
}
