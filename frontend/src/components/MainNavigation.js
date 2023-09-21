import { NavLink } from "react-router-dom";

import styles from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={styles.header}>
      <div className={`${styles.navBar} ${styles.container}`}>
        <span  className={styles.navLogo}>LOGO</span>
        <nav className={styles.navItems}>
          <ul className={styles.navList}>
            <li>
              <NavLink className={styles.navBtnLink} to="">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.navBtnLink} to="product/">
                product
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.navBtnLink} to="admin/">
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
