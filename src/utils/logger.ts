interface LoggerProps {
  label?: string;
  message?: string;
}
export function logger({ label, message }: LoggerProps) {
  if (process.env.NEXT_PUBLIC_IS_LOGGER_ON) {
    console.log(label || "", message || "");
  }
}
