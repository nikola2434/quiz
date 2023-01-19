import { Alert } from "antd";
import { FC } from "react";
import { ITypeQuiz } from "../../../config/Types";
import style from "./ResultQuestion.module.scss";
import { IAnswer } from "../../../config/Types";

interface IResultQuestion {
  result: IAnswer;
  question: ITypeQuiz;
}

const ResultQuestion: FC<IResultQuestion> = ({ question, result }) => {
  return (
    <div
      className={style.result}
      style={
        JSON.stringify(question.correctIndex) !== JSON.stringify(result.answers)
          ? { borderColor: "rgb(255,89,90)" }
          : { borderColor: "#52c41a" }
      }
    >
      <Alert type="info" message={question.title} />
      <div className={style.options}>
        {question.options.map((item, index) =>
          question.correctIndex.includes(index) ? (
            <div className={style.item} key={item}>
              <Alert message={item} type="success" showIcon />
            </div>
          ) : result.answers.includes(index) ? (
            <div className={style.item} key={item}>
              <Alert message={item} type="error" showIcon />
            </div>
          ) : (
            <div className={style.item} key={item}>
              <Alert message={item} className={style.default} />
            </div>
          )
        )}
        {JSON.stringify(question.correctIndex) !==
          JSON.stringify(result.answers) &&
          question.hint && <Alert type="warning" message={question.hint} />}
      </div>
    </div>
  );
};

export default ResultQuestion;
