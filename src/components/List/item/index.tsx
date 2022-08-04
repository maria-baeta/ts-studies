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
}: PROPS_ITEM) => {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ""} ${
        concluded ? style.itemCompletado : ""
      }`}
    >
      {concluded && (
        <span className={style.concluido} aria-label="tarefa concluída"></span>
      )}
      <div>
        <h3>{task}</h3>
        <span>{time}</span>
      </div>
      <div className={style.buttons}>
        <Button
          disabled={concluded ? true : false}
          text="Começar"
          onClick={() =>
            !concluded &&
            handleSelected({ task, time, selected, concluded, id })
          }
        />
        <Button
          disabled={selected || concluded ? true : false}
          onClick={() => deleteTask(id)}
          text="Excluir"
        />
      </div>
    </li>
  );
};
