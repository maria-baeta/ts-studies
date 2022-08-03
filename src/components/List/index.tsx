import { TASKS } from "../../types/tasks";
import { Item } from "./item";
import style from "./List.module.scss";

const List = ({ tasks }: { tasks: TASKS[] }) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map(({ task, time, selected, concluded, id }, index) => (
          <Item
            key={id}
            task={task}
            time={time}
            selected={selected}
            concluded={concluded}
            id={id}
          />
        ))}
      </ul>
    </aside>
  );
};

export default List;
