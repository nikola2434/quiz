import { FC } from "react";
import style from "./Advice.module.scss";
import testImg from "./test.png";

const Advice: FC = () => {
  return (
    <div className={style.advice}>
      <img src={testImg} alt="test" draggable={false} />
      <div className={style.text}>Выберете тест</div>
    </div>
  );
};

export default Advice;
