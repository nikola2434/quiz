export type TypeQuizNav =
  | "КОСИПЭМИН"
  | "КОСИВЧО"
  | "КОСИНЧАЭП"
  | "АИАК"
  | "КОИКА"
  | "АИП"
  | null;

export interface ITypeQuiz {
  title: string;
  options: string[];
  correctIndex: number[];
  hint?: string;
}

export interface IAnswer {
  question: number;
  answers: number[];
}
