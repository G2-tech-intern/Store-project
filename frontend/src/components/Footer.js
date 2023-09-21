import styles from './Footer.module.css';


function Footer() {
    return <footer className={styles.footer}>
        <div className={styles.container}>
        <p className={styles.copy}>
            Copyright &copy; 2027 by plantomatic. Inc. All rights reserved.
          </p>
        </div>

    </footer>
}

export default Footer  ;