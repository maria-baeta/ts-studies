import { TASK } from "../../../types/task";
import style from "./Item.module.scss";

interface PROPS_ITEM extends TASK {
  handleSelected: (taskSelected: TASK) => void;
}

export const Item = ({
  task,
  time,
  selected,
  concluded,
  id,
  handleSelected,
}: PROPS_ITEM) => {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ""}`}
      onClick={() => handleSelected({ task, time, selected, concluded, id })}
    >
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
};
