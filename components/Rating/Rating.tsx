import cn from "classnames";
import {useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef} from "react";

import styles from "./Rating.module.css";
import {RatingProps} from "./Rating.props";
import StarIcon from "./star.svg";

export const Rating= forwardRef((props: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const {rating, setRating, isEditable = false, ...otherProps} = props;

  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i) =>
      <span
        className={cn(styles.star, {[styles.filled]: i < currentRating, [styles.editable]: isEditable})}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
        onClick={() => changeValue(i + 1)}
      >
        <StarIcon
          onKeyDown={(evt: KeyboardEvent<SVGElement>) => isEditable && changeSpace(i + 1, evt)}
          tabIndex={isEditable ? 0 : -1}
        />
      </span>

    );
    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) return;
    constructRating(i);
  };

  const changeValue = (i: number) => {
    if (!isEditable || !setRating) return;
    setRating(i);
  };

  const changeSpace = (i: number, evt: KeyboardEvent<SVGElement>) => {
    if (evt.code !== "Space" || !setRating) return;
    setRating(i);
  };

  return (
      <div ref={ref} {...otherProps}>
        {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
      </div>
  );
});
