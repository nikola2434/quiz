import { FC, useState } from "react";
import "./Hint.module.scss";
import { Collapse } from "antd";

interface IHintProps {
  hint: string;
  key: string;
}

const Hint: FC<IHintProps> = ({ hint, key }) => {
  return (
    <Collapse>
      <Collapse.Panel key={key} header="Подсказка">
        {hint}
      </Collapse.Panel>
    </Collapse>
  );
};

export default Hint;
