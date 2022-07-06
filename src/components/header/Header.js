import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Math Magicians</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="quote">Quote</Link>
        <Link to="calculator">Calculator</Link>
      </nav>
    </header>
  );
}
