import { IAnswer } from "./Types";

export const saveResultLocalStorage = (key: string, value: IAnswer) => {
  const prev = localStorage.getItem(key);
  if (prev) {
    const prevJSON: IAnswer[] = JSON.parse(prev);
    prevJSON.push(value);
    localStorage.setItem(key, JSON.stringify(prevJSON));
  } else {
    localStorage.setItem(key, JSON.stringify([value]));
  }
};

