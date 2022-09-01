import { TASK } from "../../../types/task";
import Button from "../../Button";
import style from "./Item.module.scss";

interface PROPS_ITEM extends TASK {
  handleSelected: (taskSelected: TASK) => void;
  deleteTask: (id: string) => void;
}

export const Item = ({
  task,
  time,
  selected,
  concluded,
  id,
  handleSelected,
  deleteTask,
}: PROPS_ITEM) => (
  <li
    className={`${style.item} ${selected ? style.selectedItem : ""} ${
      concluded ? style.completedItem : ""
    }`}
  >
    {concluded && (
      <span className={style.concluded} aria-label="tarefa concluída"></span>
    )}
    <div>
      <h3>{task}</h3>
      <span>{time}</span>
    </div>
    <div className={style.buttons}>
      <Button
        disabled={concluded}
        text="Começar"
        onClick={() =>
          !concluded && handleSelected({ task, time, selected, concluded, id })
        }
      />
      <Button
        disabled={selected || concluded}
        onClick={() => deleteTask(id)}
        text="Excluir"
      />
    </div>
  </li>
);
