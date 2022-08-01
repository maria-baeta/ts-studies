import React from "react";

const List = () => {
  const tasks = [
    { task: "React", time: "02:00:00" },
    { task: "JavaScrit", time: "01:00:00" },
    { task: "TypeScrit", time: "01:00:00" },
  ];
  return (
    <aside>
      <h2>Esudos do dia</h2>
      <ul>
        {tasks.map(({ task, time }, index) => (
          <li key={index}>
            <h3>{task}</h3>
            <span>{time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default List;
