import React from "react";
import styles from "./CardsList.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { fetchCards, setPage } from "../../store/cartSlice";
import { Pagination, Card } from "@mantine/core";

const CardsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, page, totalPages, searchText, tags, selectedCity } =
    useSelector((state: RootState) => state.card);

  useEffect(() => {
    dispatch(fetchCards({ page, searchText, tags, selectedCity }));
  }, [dispatch, page, searchText, tags, selectedCity]);

  const formatMap: Record<string, string> = {
    ON_SITE: "Офис",
    REMOTE: "Можно удалённо",
    HYBRID: "Гибрид",
  };

  return (
    <section className={styles.cardsList}>
      {data?.items.map((item) => (
        <Card
          key={item.id}
          className={styles.card}
          shadow="sm"
          padding="lg"
          radius="md"
          mb={16}
          withBorder
        >
          <h3 className={styles.cardsList__title}>
            {item.name || "Название вакансии не указано"}
          </h3>

          <div className={styles.cardsList__salaryExperience}>
            <p>
              {item.salary
                ? [
                    item.salary.from && `${item.salary.from.toLocaleString()}`,
                    item.salary.to && `- ${item.salary.to.toLocaleString()}`,
                    item.salary.currency,
                  ]
                    .filter(Boolean)
                    .join(" ")
                : "Зарплата не указана"}
            </p>

            <p className={styles.cardsList__experience}>
              {item.experience.name || "Опыт не указан"}
            </p>
          </div>

          <p className={styles.cardsList__companyName}>
            {item.employer.name || "Компания не указана"}
          </p>

          <div className={styles.cardsList__workFormat}>
            {item.work_format?.length
              ? item.work_format.map((f, i) => {
                  const name = formatMap[f.id] || f.name;
                  const classMap: Record<string, string> = {
                    Офис: styles.cardsList__office,
                    Гибрид: styles.cardsList__hybrid,
                    "Можно удалённо": styles.cardsList__remote,
                  };
                  return (
                    <React.Fragment key={f.id}>
                      <span className={classMap[name] || ""}>{name}</span>
                      {i < item.work_format.length - 1 && " / "}
                    </React.Fragment>
                  );
                })
              : "Формат не указан"}
          </div>

          <p>{item.address?.city || "Город не указан"}</p>

          <div className={styles.cardsList__btns}>
            <a href="#" className={styles.cardsList__view}>
              Смотрaеть вакансию
            </a>
            <a href="#" className={styles.cardsList__apply}>
              Откликнуться
            </a>
          </div>
        </Card>
      ))}
      <div className={styles.cardsList__pagination}>
        <Pagination
          total={totalPages}
          value={page + 1}
          onChange={(page) => dispatch(setPage(page - 1))}
        />
      </div>
    </section>
  );
};

export default CardsList;
