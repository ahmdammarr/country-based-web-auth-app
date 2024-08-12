import React from "react";

interface ITextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className"> {
  label?: string;
  error?: string;
}

export const TextInput = ({ label, error, ...props }: ITextInputProps) => {
  const errorClasses = error
    ? "text-red-500 text-sm"
    : "text-transparent text-sm";

  return (
    <div className="mb-4">
      {label && <label className="block mb-1 text-gray-700">{label}</label>}
      <input className={styles.base} {...props} />
      {error && <label className={styles.error}>{error}</label>}
    </div>
  );
};

const styles = {
  base: "px-4 py-2 rounded focus:outline-none transition-all w-full border border-gray-300 focus:border-blue-500",
  error: "text-red-500 text-sm",
};
