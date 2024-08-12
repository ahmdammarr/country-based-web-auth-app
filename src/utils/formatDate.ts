import { format } from "date-fns";

export function formatDate(date?: Date | string): string {
  return format(date ?? new Date(Date.now()), "dd MMM yyyy");
}
