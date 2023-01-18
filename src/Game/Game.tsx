import { Progress, Button, Alert } from "antd";
import { FC } from "react";
import { ITypeQuiz } from "../config/Types";
import style from "./Game.module.scss";
import Hint from "./Hint/Hint";
import Message from "./Message/Message";
import Options from "./Options/Options";
import { useGame } from "./useGame";

export const Game: FC<{ data: ITypeQuiz[] }> = ({ data }) => {
  const {
    percent,
    toggleNext,
    currentQuestion,
    isDisabled,
    onChangeAnswer,
    answer,
  } = useGame(data);

  return (
    <div className={style.screen}>
      <div className={style.game}>
        <Progress percent={Math.round(percent)} />
        {currentQuestion !== data.length ? (
          <>
            <Alert type="info" message={data[currentQuestion].title} />
            <Options
              onChange={onChangeAnswer}
              answer={answer}
              option={data[currentQuestion].options}
            />
            <div className={style.button}>
              <Button
                type="primary"
                onClick={() => toggleNext()}
                disabled={isDisabled}
              >
                Далее
              </Button>
            </div>
          </>
        ) : (
          <Message
            data={data}
            result={JSON.parse(String(localStorage.getItem(data[0].title)))}
          />
        )}
      </div>
    </div>
  );
};
