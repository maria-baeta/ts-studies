import style from "./Clock.module.scss";

const Clock = ({ time = 0 }: { time: number | undefined }) => {
  const [minDez, minUn] = String(Math.floor(time / 60)).padStart(2, "0");
  const [secDez, secUn] = String(time % 60).padStart(2, "0");

  // const [minDez, minUn] = String(minutes);

  return (
    <>
      <span className={style.relogioNumero}>{minDez}</span>
      <span className={style.relogioNumero}>{minUn}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secDez}</span>
      <span className={style.relogioNumero}>{secUn}</span>
    </>
  );
};

export default Clock;
