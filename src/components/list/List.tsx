import { IUser } from '../../interfaces/input';
import styles from './List.module.css';
import { FaTrash } from 'react-icons/fa';
import { RiPencilFill } from 'react-icons/ri';

function List({ id, name, website, email }: IUser) {
  return (
    <tr>
      <td className={styles.td}>{id}</td>
      <td className={styles.td}>{name}</td>
      <td className={styles.td}>{email}</td>
      <td className={styles.td}>{website}</td>
      <td className={`${styles.td} ${styles.tdSeparator}`}>
        <RiPencilFill className={styles.icongreen} />
        <FaTrash className={styles.iconred} />
      </td>
    </tr>
  );
}

export default List;
