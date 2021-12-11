import cn from "classnames";
import {useForm, Controller} from "react-hook-form";

import CloseIcon from "./close.svg";
import {IReviewForm} from "./ReviewForm.interface";
import styles from "./ReviewForm.module.css";
import {ReviewFormProps} from "./ReviewForm.props";

import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {Rating} from "../Rating/Rating";
import {Textarea} from "../Textarea/Textarea";

export function ReviewForm(props: ReviewFormProps): JSX.Element {
  const {productId, className, ...otherProps} = props;
  const {register, control, handleSubmit} = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...otherProps}>
        <Input placeholder="Имя" {...register("name")}/>
        <Input className={styles.title} placeholder="Заголовок отзыва" {...register("title")}/>
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            render={({field}) =>
              <Rating ref={field.ref} rating={field.value} setRating={field.onChange} isEditable/>
            }
          />
        </div>
        <Textarea className={styles.description} placeholder="Текст отзыва" {...register("description")}/>
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
    </form>
  );
}
