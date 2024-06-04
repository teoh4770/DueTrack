import { DateTime } from "luxon";

const months = [
  "January",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formattedNumber = (value: number): string => {
  if (value >= 0 && value < 10) {
    return `0${value}`;
  } else {
    return `${value}`;
  }
};

export const getTodayDate = (): string => {
  const date = DateTime.now();
  const year = date.year;
  const month = formattedNumber(date.month);
  const day = formattedNumber(date.day);

  return `${year}-${month}-${day}`;
};

export const getTodayFormattedDate = () => {
  const date = DateTime.now();
  const year = date.year;
  const month = months[date.month - 1];
  const day = date.day;

  return `${month} ${day}, ${year}`;
};

export const getDifferenceInDays = (start: DateTime, end: DateTime) => {
  const { days } = end.diff(start, "days").toObject();

  return days;
};

export const getDateFromDueDate = (dueDate: string) => {
  // dueDate = "2024-05-15"
  try {
    const [year, month, day] = dueDate.split("-");
    const date = DateTime.local(+year, +month, +day);
    return date;
  } catch (error) {
    console.error("Invalid date format:", error);
    return DateTime.invalid("Invalid date");
  }
};

const getFormattedDifferenceInDays = (differenceInDays: number) => {
  if (differenceInDays === 0) {
    return `Today (0 day left)`;
  }

  const absDifference = Math.abs(differenceInDays);
  const pluralSuffix = absDifference === 1 ? "day" : "days";

  return differenceInDays < 0
    ? `${absDifference} ${pluralSuffix} ago`
    : `in ${absDifference} ${pluralSuffix}`;
};

export const calculateDaysUntilDueDate = (dueDate: string) => {
  const today = DateTime.now();
  const date1 = DateTime.local(today.year, today.month, today.day);
  const date2 = getDateFromDueDate(dueDate);

  const differenceInDays = getDifferenceInDays(date1, date2);
  return differenceInDays;
};

export const getFormattedDaysUntilDue = (dueDate: string) => {
  const daysUntilDueDate = calculateDaysUntilDueDate(dueDate);

  if (typeof daysUntilDueDate !== "number") {
    return "not a number";
  }
  return getFormattedDifferenceInDays(daysUntilDueDate);
};

export const getCountDownSummaryFromDueDate = (dueDate: string) => {
  const start = DateTime.now();
  const end = getDateFromDueDate(dueDate);
  const timeDifference = end.diff(start, [
    "years",
    "months",
    "days",
    "hours",
    "minutes",
    "seconds",
  ]);

  return timeDifference.toObject();
};

// initialTime is DateTime number
export const getProgress = (dueDate: string, initialTime: number) => {
  const startTime = initialTime;
  const endTime = getDateFromDueDate(dueDate).toUnixInteger();
  const currentTime = DateTime.now().toUnixInteger();

  const totalTime = endTime - startTime;

  // If the end time is in the past, progress is 100%
  if (totalTime < 0) {
    return 100;
  }

  const elapsedTime = currentTime - startTime;

  const progressPercentage = (elapsedTime / totalTime) * 100;

  return Math.min(progressPercentage, 100);
};
