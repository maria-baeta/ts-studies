import React, { useState } from "react";
import Button from "../Button";
import style from "./Form.module.scss";
import { v4 as uuidV4 } from "uuid";
import { TASK } from "../../types/task";

const STATE_DEFAULT = {
  task: "",
  time: "00:00:00",
};

const Form = ({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<TASK[]>>;
}) => {
  const [task, setTask] = useState(STATE_DEFAULT.task);
  const [time, setTime] = useState(STATE_DEFAULT.time);

  const salveTasks = (event: React.FormEvent) => {
    event?.preventDefault();
    setTasks((tasksPrevious) => [
      ...tasksPrevious,
      {
        task: task,
        time: time,
        selected: false,
        concluded: false,
        id: uuidV4(),
      },
    ]);
    setTask(STATE_DEFAULT.task);
    setTime(STATE_DEFAULT.time);
  };

  return (
    <form className={style.novaTarefa} onSubmit={(event) => salveTasks(event)}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          id="task"
          name="task"
          onChange={(event) => setTask(event.target.value)}
          placeholder="O que você quer estudar ?"
          required
          type="text"
          value={task}
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          id="time"
          max="01:30:00"
          min="00:00:00"
          name="time"
          onChange={(event) => setTime(event.target.value)}
          required
          step="1"
          type="time"
          value={time}
        />
      </div>
      <Button type="submit" text="Adicionar" />
    </form>
  );
};

export default Form;
