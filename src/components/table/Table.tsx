import { useEffect, useState } from 'react';
import styles from './Table.module.css';
import { IUser } from '../../interfaces/input';
import List from '../list/List';

function Table() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((body) => {
        setUsers(body);
      });
  });

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th}>ID</th>
          <th className={styles.th}>Name</th>
          <th className={styles.th}>Email</th>
          <th className={styles.th}>WebSite</th>
          <th className={styles.th}>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <List
            key={index}
            name={user.name}
            email={user.email}
            id={user.id}
            website={user.website}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
