import styles from './Quote.module.css';

export default function Quote() {
  return (
    <main>
      <div>
        <p className={styles.quote}>
          Mathematics is not about numbers, equations, computations
          or algorithms: it is about understanding. -William Paul Thurston
        </p>
      </div>
    </main>
  );
}
