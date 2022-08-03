import { TASKS } from "../../../types/tasks";
import style from "../List.module.scss";

export const Item = ({ task, time, selected, concluded, id }: TASKS) => {
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
};
