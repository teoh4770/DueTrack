import { atom } from "jotai";
import { getDeadlinesFromStorage } from "../utils";

// Deadlines
const deadlines = await getDeadlinesFromStorage();
export const deadlinesAtom = atom(deadlines ?? []);
export const getTotalDeadlines = atom((get) => {
  const totalDeadlines = get(deadlinesAtom).length;
  return totalDeadlines;
});
