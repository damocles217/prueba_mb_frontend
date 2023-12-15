import Form from './components/form/Form';
import Table from './components/table/Table';
import styles from './App.module.css';
import Map from './components/map/Map';

function App() {
  return (
    <div className={styles.div}>
      <Form />
      <Table />
      <Map />
    </div>
  );
}

export default App;
