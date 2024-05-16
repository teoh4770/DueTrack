import localforage from "localforage";
import { DeadlineItemInterface } from "../types";

const DEADLINES_KEY = "deadlines";

localforage.config({
  name: "Deadlines App",
  storeName: DEADLINES_KEY,
  description: "Local storage for the web app deadlines",
});

export const getDeadlinesFromStorage = async (): Promise<
  DeadlineItemInterface[] | null
> => {
  // This code runs once the value has been loaded
  // from the offline store.
  // If the key does not exist, getItem() will return null.
  return await localforage.getItem(DEADLINES_KEY);
};

export const setDeadlinesFromStorage = async (
  deadlines: DeadlineItemInterface[]
) => {
  try {
    await localforage.setItem(DEADLINES_KEY, deadlines);
  } catch (error) {
    console.error(error);
  }
};

export const clearDeadlinesFromStorage = async () => {
  try {
    await localforage.clear();
  } catch (error) {
    console.log(error);
  }
};
