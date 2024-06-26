enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek) => {
  // console.log(day);
  return day === 5 || day === 6;
};

console.log(isWeekend(DayOfWeek.Friday));
