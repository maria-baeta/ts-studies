import { useEffect, useState } from "react";
import { TASK } from "../../types/task";
import { timeConverter } from "../../util/time";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";

interface PROPS_STOPWATCH {
  selected: TASK | undefined;
  finishedTask: () => void;
}

const Stopwatch = ({ selected, finishedTask }: PROPS_STOPWATCH) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) setTime(timeConverter(selected.time));
  }, [selected]);

  const timeRule = (counter: number = 0) => {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return timeRule(counter - 1);
      }
      finishedTask();
    }, 1000);
  };

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => timeRule(time)} text="Começar!" />
    </div>
  );
};

export default Stopwatch;
