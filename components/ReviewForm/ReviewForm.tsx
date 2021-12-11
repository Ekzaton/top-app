import cn from "classnames";

import CloseIcon from "./close.svg";
import styles from "./ReviewForm.module.css";
import {ReviewFormProps} from "./ReviewForm.props";

import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {Rating} from "../Rating/Rating";
import {Textarea} from "../Textarea/Textarea";

export function ReviewForm(props: ReviewFormProps): JSX.Element {
  const {productId, className, ...otherProps} = props;

  return (
    <>
      <div className={cn(styles.reviewForm, className)} {...otherProps}>
        <Input placeholder="Имя"/>
        <Input className={styles.title} placeholder="Заголовок отзыва"/>
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Rating rating={0}/>
        </div>
        <Textarea className={styles.description} placeholder="Текст отзыва"/>
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div>Спасибо, ваш отзыв будет опубликован после проверки</div>
        <CloseIcon className={styles.close}/>
      </div>
    </>
  );
}