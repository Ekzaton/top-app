import cn from "classnames";
import {ForwardedRef, KeyboardEvent, forwardRef, useEffect, useRef, useState} from "react";

import styles from "./Rating.module.css";
import {RatingProps} from "./Rating.props";
import StarIcon from "./star.svg";

export const Rating= forwardRef((props: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const {rating, setRating, isEditable = false, error, tabIndex, ...otherProps} = props;

  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating, tabIndex]);

  const computeFocus = (r: number, i: number): number => {
    if (!isEditable) return - 1;
    if (!rating && i === 0) return tabIndex ?? 0;
    if (r === i + 1) return tabIndex ?? 0;
    return -1;
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i) =>
      <span
        ref={r => ratingArrayRef.current?.push(r)}
        className={cn(styles.star, {[styles.filled]: i < currentRating, [styles.editable]: isEditable})}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
        onClick={() => changeValue(i + 1)}
        onKeyDown={handleKey}
        tabIndex={computeFocus(rating, i)}
        role={isEditable ? "slider" : undefined}
        aria-label={isEditable ? "Укажите рейтинг" : ("рейтинг " + rating)}
        aria-invalid={!!error}
        aria-valuenow={rating}
        aria-valuemax={5}
        aria-valuemin={1}
      >
        <StarIcon/>
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

  const handleKey = (e: KeyboardEvent) => {
    if (!isEditable || !setRating) return;

    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      if (!rating) {
        setRating(1);
      } else {
        e.preventDefault();
        setRating(rating < 5 ? rating + 1 : 5);
      }
      ratingArrayRef.current[rating]?.focus();
    }

    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setRating(rating > 1 ? rating - 1 : 1);
      ratingArrayRef.current[rating - 2]?.focus();
    }
  };

  return (
      <div ref={ref} className={cn(styles.ratingWrapper, {[styles.error]: error})} {...otherProps}>
        {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
        {error && <span className={styles.errorMessage} role="alert">{error.message}</span>}
      </div>
  );
});
