import moment from "moment";

export const sortByName = (a, b) => {
  const aString = a.name.toLowerCase();
  const bString = b.name.toLowerCase();
  if (aString < bString) {
    return -1;
  } else if (aString > bString) {
    return 1;
  } else {
    return 0;
  }
};

export const sortByBed = (a, b) => a.bed - b.bed;

export const sortByStartTime = (a, b) =>
  moment(a.start, "HH:mm").unix() - moment(b.start, "HH:mm").unix();

export const sortByRemainingTime = (a, b) => {
  const calculate = (item) => {
    return moment(item.remaining, "x").format('x')
  };
  return calculate(a) - calculate(b);
};
