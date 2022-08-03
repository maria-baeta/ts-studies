import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import { TASKS } from "../types/tasks";
import style from "./App.module.scss";

const App = () => {
  const [tasks, setTasks] = useState<TASKS[]>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Stopwatch />
    </div>
  );
};

export default App;
