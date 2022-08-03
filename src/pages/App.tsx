import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import { TASK } from "../types/task";
import style from "./App.module.scss";

const App = () => {
  const [tasks, setTasks] = useState<TASK[]>([]);
  const [selected, setSelected] = useState<TASK>();

  const handleSelected = (taskSelected: TASK) => {
    setSelected(taskSelected);
    setTasks((tasksPrevious) =>
      tasksPrevious.map((task) => ({
        ...task,
        selected: task.id === taskSelected.id ? true : false,
      }))
    );
  };

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List handleSelected={handleSelected} tasks={tasks} />
      <Stopwatch selected={selected} />
    </div>
  );
};

export default App;
