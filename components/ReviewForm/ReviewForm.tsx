import axios from "axios";
import cn from "classnames";
import {useState} from "react";
import {useForm, Controller} from "react-hook-form";

import {API} from "../../api/api";

import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {Rating} from "../Rating/Rating";
import {Textarea} from "../Textarea/Textarea";

import CloseIcon from "./close.svg";
import {IReviewForm, IReviewSentResponse} from "./ReviewForm.interface";
import styles from "./ReviewForm.module.css";
import {ReviewFormProps} from "./ReviewForm.props";

export function ReviewForm(props: ReviewFormProps): JSX.Element {
  const {productId, isOpened, className, ...otherProps} = props;
  const {register, control, handleSubmit, formState: {errors}, reset} = useForm<IReviewForm>();

  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const {data} = await axios.post<IReviewSentResponse>(API.review.createDemo, {...formData, productId});
      if (data.message) {
        setSuccess(true);
        reset();
      } else {
        setError("Что-то пошло не так");
      }
    } catch (e) {
      if (e instanceof Error) setError(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...otherProps}>
        <Input
            placeholder="Имя"
            error={errors.name}
            {...register("name", {required: {value: true, message: "Заполните имя"}})}
            tabIndex={isOpened ? 0 : -1}
        />
        <Input
            className={styles.title}
            placeholder="Заголовок отзыва"
            error={errors.title}
            {...register("title", {required: {value: true, message: "Заполните заголовок"}})}
            tabIndex={isOpened ? 0 : -1}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{required: {value: true, message: "Укажите рейтинг"}}}
            render={({field}) =>
              <Rating
                ref={field.ref}
                rating={field.value}
                setRating={field.onChange}
                isEditable
                error={errors.rating}
                tabIndex={isOpened ? 0 : -1}
              />
            }
          />
        </div>
        <Textarea
          className={styles.description}
          placeholder="Текст отзыва"
          error={errors.description}
          {...register("description", {required: {value: true, message: "Заполните текст отзыва"}})}
        />
        <div className={styles.submit}>
          <Button appearance="primary" tabIndex={isOpened ? 0 : -1}>Отправить</Button>
          <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      {success && <div className={cn(styles.panel, styles.success)}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div>Спасибо, ваш отзыв будет опубликован после проверки</div>
        <CloseIcon className={styles.close} onClick={() => setSuccess(false)} />
      </div>}
      {error && <div className={cn(styles.panel, styles.error)}>
        Что-то пошло не так, попробуйте повторить попытку
        <CloseIcon className={styles.close} onClick={() => setError(undefined)}/>
      </div>}
    </form>
  );
}
