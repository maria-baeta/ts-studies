export const timeConverter = (tiime: string) => {
  const [hours = "0", minutes = "0", seconds = "0"] = tiime.split(":");
  const hoursToSeconds = Number(hours) * 3600;
  const minutesToSeconds = Number(minutes) * 60;
  return hoursToSeconds + minutesToSeconds + Number(seconds);
};
