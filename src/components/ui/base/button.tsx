import React from "react";

interface IButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {}

export const Button = (props: IButtonProps) => {
  return <button className={styles.base} {...props} />;
};

const styles = {
  base: "px-4 py-2 rounded focus:outline-none transition-all bg-blue-500 text-white hover:bg-blue-600",
};
