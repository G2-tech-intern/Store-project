import {
  NavLink,

  useRouteLoaderData,
  Form,
} from "react-router-dom";

import styles from "./MainNavigation.module.css";

function MainNavigation() {
  const token = useRouteLoaderData("root");

  const userRole= localStorage.getItem('role')
  console.log(userRole)
  console.log(token);
  console.log(token !== null);

  return (
    <header className={styles.header}>
      <div className={`${styles.navBar} ${styles.container}`}>
        <span className={styles.navLogo}>LOGO</span>
        <nav className={styles.navItems}>
          <ul className={styles.navList}>
            <li>
              <NavLink className={styles.navBtnLink} to="">
                Home
              </NavLink>
            </li>
            {(token !== null && userRole === 'ADMIN') && (
              <li>
                <NavLink className={styles.navBtnLink} to="admin/">
                  Admin
                </NavLink>
              </li>
            )}

            {token !== null ? (
              <li>
                <Form
                  className={styles.navBtnLink}
                  action="/logout"
                  method="post"
                >
                  <button className={styles.navBtn}>Logout</button>
                </Form>
              </li>
            ) : (
              <li>
                <NavLink className={`${styles.navBtnLink} ${styles.navBtn}`} to="login">
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
