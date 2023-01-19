import { FC } from "react";
import { useLocation } from "react-router-dom";
import { ITypeQuiz } from "../../config/Types";
import ResultQuestion from "./ResultQuestion/ResultQuestion";
import style from "./Results.module.scss";

const Results: FC = () => {
  const location = useLocation();

  return (
    <div className={style.results}>
      <h1>Результаты</h1>
      {location.state?.data?.map((item: ITypeQuiz, index: number) => (
        <ResultQuestion
          question={item}
          result={location.state?.result[index]}
          key={item.title}
        />
      ))}
    </div>
  );
};

export default Results;
