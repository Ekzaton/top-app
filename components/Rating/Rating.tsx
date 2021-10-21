import cn from "classnames";
import {useEffect, useState} from "react";

import styles from "./Rating.module.css";
import {RatingProps} from "./Rating.props";
import StarIcon from "./star.svg";

export function Rating(props: RatingProps): JSX.Element {
  const {rating, setRating = null, isEditable = false, ...otherProps} = props;

  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i) =>
        <StarIcon className={cn(styles.star, {[styles.filled]: i < currentRating})}/>
    );
    setRatingArray(updatedArray);
  };

  return (
      <div {...otherProps}>
        {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
      </div>
  );
}
