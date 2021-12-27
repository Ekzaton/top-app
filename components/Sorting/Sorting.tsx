import cn from "classnames";

import styles from "./Sorting.module.css";
import {SortingEnum, SortingProps} from "./Sorting.props";
import SortingIcon from "./sorting.svg";

export function Sorting(props: SortingProps): JSX.Element {
  const {sorting, setSorting, className, ...otherProps} = props;

  return (
    <div className={cn(styles.sorting, className)} {...otherProps}>
      <div id="sorting" className={styles.sortingName}>Сортировка</div>
      <button
          id="rating"
          className={cn({[styles.active]: sorting === SortingEnum.Rating})}
          onClick={() => setSorting(SortingEnum.Rating)}
          aria-selected={sorting === SortingEnum.Rating}
          aria-labelledby="sorting rating"
      >
        <SortingIcon className={styles.icon}/>
        По рейтингу
      </button>
      <button
          id="price"
          className={cn({[styles.active]: sorting === SortingEnum.Price})}
          onClick={() => setSorting(SortingEnum.Price)}
          aria-selected={sorting === SortingEnum.Price}
          aria-labelledby="sorting price"
      >
        <SortingIcon className={styles.icon}/>
        По цене
      </button>
    </div>
  );
}
