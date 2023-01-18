import { saveResultLocalStorage } from "./../config/Helper";

import { useState } from "react";
import { ITypeQuiz } from "../config/Types";
import type { CheckboxValueType } from "antd/es/checkbox/Group";

export const useGame = (data: ITypeQuiz[]) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [percent, setPercent] = useState(currentQuestion);
  const [answer, setAnswer] = useState<number[]>([]);
  const [isDisabled, setIsDisabled] = useState(true);

  const toggleNext = () => {
    
    if (currentQuestion === 0) localStorage.removeItem(data[0].title);
    saveResultLocalStorage(data[0].title, {
      question: currentQuestion,
      answers: answer,
    });
    setAnswer([]);
    setIsDisabled(true);
    setCurrentQuestion((prev) => {
      const newCurrent = prev + 1;
      if (newCurrent > data.length) return prev;
      return newCurrent;
    });

    setPercent((prev) => {
      const newPercent = (1 / data.length) * 100;
      if (prev + newPercent > 100) return 100;
      return prev + newPercent;
    });
  };
  const onChangeAnswer = (checkedValues: CheckboxValueType[]) => {
    setAnswer(checkedValues.map((item) => Number(item)));
    if (checkedValues.length) setIsDisabled(false);
    else setIsDisabled(true);
  };

  return {
    percent,
    toggleNext,
    currentQuestion,
    isDisabled,
    onChangeAnswer,
    answer,
  };
};
