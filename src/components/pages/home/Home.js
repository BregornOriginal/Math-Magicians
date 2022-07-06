import LoremIpsum from 'react-lorem-ipsum';
import styles from './Home.module.css';

export default function Home() {
  return (
    <main>
      <h2 className={styles.title}>Welcome to our page!</h2>
      <LoremIpsum p={2} />
    </main>
  );
}
