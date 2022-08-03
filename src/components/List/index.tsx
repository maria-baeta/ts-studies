import { TASK } from "../../types/task";
import { Item } from "./item";
import style from "./List.module.scss";

interface PROPS_LIST {
  tasks: TASK[];
  handleSelected: (taskSelected: TASK) => void;
}

const List = ({ tasks, handleSelected }: PROPS_LIST) => {
  return (
    <aside className={style.listaTarefas}>
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
          />
        ))}
      </ul>
    </aside>
  );
};

export default List;
