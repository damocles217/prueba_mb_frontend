import { Props } from '../../interfaces/input';
import styles from './Input.module.css';

function Input({ title, value, inputName, inputType }: Props) {
  return (
    <div className={styles.box}>
      <label htmlFor={inputName} className={styles.label}>
        {title}
      </label>
      <input
        value={value}
        name={inputName}
        type={inputType}
        className={styles.general}
      />
    </div>
  );
}

export default Input;
