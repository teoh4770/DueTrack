import { useAtom } from "jotai";
import { DeadlineItemInterface } from "../types";
import { deadlinesAtom } from "../lib";
import { useEffect } from "react";
import { getDateFromDueDate, setDeadlinesFromStorage } from "../utils";

export const useDeadlines = () => {
  const [deadlines, setDeadlines] = useAtom(deadlinesAtom);

  useEffect(() => {
    async function updateDeadlinesFromStorage() {
      await setDeadlinesFromStorage(deadlines);
    }

    updateDeadlinesFromStorage();
  }, [deadlines]);

  const addDeadline = (deadline: DeadlineItemInterface) => {
    const updatedDeadlines = [...deadlines, deadline];
    setDeadlines(updatedDeadlines);
  };

  const removeDeadline = (id: string) => {
    const updatedDeadlines = deadlines.filter((deadline) => deadline.id !== id);
    setDeadlines(updatedDeadlines);
  };

  const updateDeadline = (id: string, newDeadline: DeadlineItemInterface) => {
    const updatedDeadlines = deadlines.map((deadline) => {
      if (deadline.id === id) {
        return {
          ...deadline,
          ...newDeadline,
        };
      }

      return deadline;
    });
    setDeadlines(updatedDeadlines);
  };

  const updateDeadlineProperty = (id: string, key: string, value: unknown) => {
    const updatedDeadlines = deadlines.map((deadline) => {
      if (deadline.id === id) {
        return {
          ...deadline,
          [key]: value,
        };
      }

      return deadline;
    });
    setDeadlines(updatedDeadlines);
  };

  const getOrderDeadlines = () => {
    const orderedDeadlines = [...deadlines].sort(
      (deadline1, deadline2) =>
        getDateFromDueDate(deadline1.dueDate).getTime() -
        getDateFromDueDate(deadline2.dueDate).getTime()
    );
    return orderedDeadlines;
  };

  return {
    deadlines,
    addDeadline,
    removeDeadline,
    updateDeadline,
    updateDeadlineProperty,
    getOrderDeadlines,
  };
};
