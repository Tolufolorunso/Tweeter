const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getDaysInMonth = function (month, year) {
  return new Date(year, month, 0).getDate();
};

const getYears = () => {
  const year = new Date().getFullYear();
  const years = Array.from(new Array(100), (val, index) => year - index);
  return years;
};

module.exports = { months, getDaysInMonth, years: getYears() };
