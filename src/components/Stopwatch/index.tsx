import { useState } from "react";
import { TASK } from "../../types/task";
import { timeConverter } from "../../util/time";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";

interface PROPS_STOPWATCH {
  selected: TASK | undefined;
}

const Stopwatch = ({ selected }: PROPS_STOPWATCH) => {
  const [time, setTime] = useState<number>();

  if (selected?.time) setTime(timeConverter(selected?.time));

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      Tempo: {time}
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button text="Começar!" />
    </div>
  );
};

export default Stopwatch;
