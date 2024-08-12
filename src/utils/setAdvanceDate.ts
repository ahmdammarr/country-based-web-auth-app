export const setAdvanceDate = ({ minutes }: { minutes: number }) => {
  const date = new Date();
  return date.setTime(date.getTime() + minutes * 60 * 1000);
};
