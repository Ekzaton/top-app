import styles from "./Advantages.module.css";
import {AdvantagesProps} from "./Advantages.props";
import CheckIcon from "./check.svg";

export function Advantages(props: AdvantagesProps): JSX.Element {
  const {advantages} = props;

  return (
    <>
      {advantages.map(a => (
        <div key={a._id} className={styles.advantage}>
          <CheckIcon/>
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.line}/>
          <div>{a.description}</div>
        </div>
      ))}
    </>
  );
}
