import { FC } from "react";
import { Link } from "react-router-dom";
import { IAnswer, ITypeQuiz } from "../../config/Types";
import style from "./Message.module.scss";
import search from "./search.png";

export interface IResult {
  data: ITypeQuiz[];
  result: IAnswer[];
}

const Message: FC<IResult> = (props) => {
  const onClick = () => {
    localStorage.removeItem(props.data[1].title);
  };
  return (
    <div className={style.message}>
      <img src={search} alt="test" draggable={false} />
      <div className={style.text}>Тест пройден!</div>
      <Link to={"/results"} state={props} onClick={onClick}>
        Результаты
      </Link>
    </div>
  );
};

export default Message;
