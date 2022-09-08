import React, { useState } from "react";
import { Form, List, Stopwatch } from "../components";
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
        selected: task.id === taskSelected.id,
      }))
    );
  };

  const deleteTask = (id: string) =>
    setTasks((taksPrevius) => taksPrevius.filter((task) => task.id !== id));

  const finishedTask = () => {
    if (selected) {
      setTasks((tasksPrevious) =>
        tasksPrevious.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              concluded: true,
            };
          }
          return task;
        })
      );
      setSelected(undefined);
    }
  };

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List
        deleteTask={deleteTask}
        handleSelected={handleSelected}
        tasks={tasks}
      />
      <Stopwatch finishedTask={finishedTask} selected={selected} />
    </div>
  );
};

export default App;
