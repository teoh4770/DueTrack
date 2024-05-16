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

// get formatted date
export const getTodayDate = (): string => {
  const date = new Date();
  const year = date.getFullYear();
  const month = formattedNumber(date.getMonth() + 1); // month is 0 base, so need to plus 1 to make it 1 base
  const day = formattedNumber(date.getDate());

  return `${year}-${month}-${day}`;
};

export const getTodayFormattedDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();

  return `${month} ${day}, ${year}`;
};

// Calculating the time difference of two dates
const getDifferenceInTime = (date1: Date, date2: Date) => {
  return date2.getTime() - date1.getTime();
};

// Calculate the no. of days between two dates
export const getDifferenceInDays = (date1: Date, date2: Date) => {
  const DAY_IN_MILLISECONDS = 1000 * 3600 * 24;

  const differenceInTime = getDifferenceInTime(date1, date2);
  const differenceInDays = Math.round(differenceInTime / DAY_IN_MILLISECONDS);

  return differenceInDays;
};

export const getDateFromDueDate = (dueDate: string) => {
  // dueDate = "2024-05-15"
  const [year, month, day] = dueDate.split("-");
  const date = new Date(+year, +month - 1, +day); // Date object's month is 0 base(Jan starts at 0)

  return date;
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
  const today = new Date();
  const date1 = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const date2 = getDateFromDueDate(dueDate);

  const differenceInDays = getDifferenceInDays(date1, date2);
  return differenceInDays;
};

export const getFormattedDaysUntilDue = (dueDate: string) => {
  const daysUntilDueDate = calculateDaysUntilDueDate(dueDate);
  return getFormattedDifferenceInDays(daysUntilDueDate);
};
