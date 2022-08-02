import { Item } from "./item";
import style from "./List.module.scss";

const List = () => {
  const tasks = [
    { task: "React", time: "02:00:00" },
    { task: "JavaScrit", time: "01:00:00" },
    { task: "TypeScrit", time: "01:00:00" },
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2>Esudos do dia</h2>
      <ul>
        {tasks.map(({ task, time }, index) => (
          <Item key={index} task={task} time={time} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
