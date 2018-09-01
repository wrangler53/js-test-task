export const formatDate = date => {
  const newDate = new Date(date);

  const year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let day = newDate.getDate();

  if (month < 10) month = `0${month}`;
  if (day < 10) day = `0${day}`;

  return `${day}/${month}/${year}`;
};

export const formatDateForDB = date => {
  const [day, month, year] = date.split('/');
  return `${month}.${day}.${year}`;
};

export default formatDate;
