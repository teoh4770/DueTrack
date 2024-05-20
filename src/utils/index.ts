import FileSaver from "file-saver";

// date
import {
  getDateFromDueDate,
  calculateDaysUntilDueDate,
  getFormattedDaysUntilDue,
  getTodayDate,
  getTodayFormattedDate,
} from "./date";
export {
  getDateFromDueDate,
  calculateDaysUntilDueDate,
  getFormattedDaysUntilDue,
  getTodayDate,
  getTodayFormattedDate,
};

// localForage
import {
  getDeadlinesFromStorage,
  setDeadlinesFromStorage,
  clearDeadlinesFromStorage,
} from "./localStorage";
import { DeadlineItemInterface } from "../types";
export {
  getDeadlinesFromStorage,
  setDeadlinesFromStorage,
  clearDeadlinesFromStorage,
};

function exportFile(data: unknown, fileName: string) {
  const blob = new Blob([JSON.stringify(data)], {
    type: "text/plain;charset=utf-8",
  });
  FileSaver.saveAs(blob, `${fileName}.txt`);
}

export function exportDeadlines(deadlines: DeadlineItemInterface[]) {
  exportFile(deadlines, "deadlines");
}

export function isJson(item: unknown) {
  let value = typeof item !== "string" ? JSON.stringify(item) : item;
  try {
    value = JSON.parse(value);
  } catch (e) {
    return false;
  }

  return typeof value === "object" && value !== null;
}
