import styles from "./Header.module.css";
import logo from "../../../public/logo.png";
import userGrey from "../../../public/user-circle-grey.png";
import userBlack from "../../../public/user-circle-black.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img src={logo} alt="Logo" />
        <h1 className={styles.title}>.FrontEnd</h1>
      </div>

      <div className={styles.header__links}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.header__linkActive : styles.header__link
          }
        >
          Вакансии FE
        </NavLink>

        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? styles.header__linkActive : styles.header__link
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={isActive ? userBlack : userGrey}
                className={styles.header__userFoto}
                alt="user-circle"
              />
              <span>Обо мне</span>
            </>
          )}
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
