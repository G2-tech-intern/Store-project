import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroText}>
          <h1>Hero section</h1>
        </div>
        <div className={styles.heroImg}>
            <img src="./"></img>

        </div>
      </div>
    </section>
  );
}

export default Hero;
