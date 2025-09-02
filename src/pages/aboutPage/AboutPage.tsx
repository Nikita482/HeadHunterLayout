import styles from "./aboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Иван Васильев</h1>
      <p>
        Привет! Я - Frontend-разработчик. Пишу приложения на React + TypeScript
        + Redux Toolkit.
      </p>
    </div>
  );
};

export default AboutPage;
