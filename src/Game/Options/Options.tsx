import { FC } from "react";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { Checkbox } from "antd";
import style from "./Options.module.scss";

interface IOptionsProps {
  option: string[];
  answer: number[];
  onChange: (checkedValues: CheckboxValueType[]) => void;
}

const Options: FC<IOptionsProps> = ({ onChange, option, answer }) => {
  return (
    <>
      <Checkbox.Group value={answer} onChange={onChange}>
        <div className={style.checkbox}>
          {option.map((item, index) => (
            <div className={style.item} key={item}>
              <Checkbox value={index} key={item}>
                {item}
              </Checkbox>
            </div>
          ))}
        </div>
      </Checkbox.Group>
    </>
  );
};

export default Options;
