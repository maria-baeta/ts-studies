import { TASK } from "../../types/task";
import { Item } from "./item";
import style from "./List.module.scss";

interface PROPS_LIST {
  tasks: TASK[];
  handleSelected: (taskSelected: TASK) => void;
  deleteTask: (id: string) => void;
}

export const List = ({ tasks, handleSelected, deleteTask }: PROPS_LIST) => (
  <aside className={style.listTask}>
    <h2>Estudos do dia</h2>
    <ul>
      {tasks.map(({ task, time, selected, concluded, id }) => (
        <Item
          concluded={concluded}
          id={id}
          key={id}
          handleSelected={handleSelected}
          task={task}
          time={time}
          selected={selected}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  </aside>
);
