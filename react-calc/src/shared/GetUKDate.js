const getUKDate = num => {
  var x = num;
  var CurrentDate = new Date();
  CurrentDate.setMonth(CurrentDate.getMonth() + x);
  const currDate = CurrentDate.getDate();
  const currMonth = CurrentDate.getMonth() + 1;
  const currYear = CurrentDate.getFullYear();
  return `${currDate}-${currMonth}-${currYear}`;
};
export default getUKDate;
