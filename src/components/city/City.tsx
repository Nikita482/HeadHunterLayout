import styles from "./City.module.css";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { setCityList } from "../../store/cartSlice";
import cityIcons from "../../../public/cityIcons.png";
import { Select } from "@mantine/core";

const City = () => {
  const dispatch = useDispatch();
  const { cityList, selectedCity } = useSelector(
    (state: RootState) => state.card
  );

  return (
    <section className={styles.city}>
      <Select
        placeholder="Все города"
        value={selectedCity || null}
        data={cityList}
        onChange={(value) => {
          if (value) dispatch(setCityList(value));
        }}
        leftSection={<img src={cityIcons} alt="cityIcons" />}
        rightSectionPointerEvents="none"
      />
    </section>
  );
};

export default City;
