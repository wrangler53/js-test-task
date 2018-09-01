const formatter = date => {
  const newDate = new Date(date);

  const year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let day = newDate.getDate();

  if (month < 10) month = `0${month}`;
  if (day < 10) day = `0${day}`;

  return {year, month, day};
};

export const formatDate = date => {
  const {year, month, day} = formatter(date);
  return `${day}/${month}/${year}`;
};

export const formatDateForEdit = date => {
  const {year, month, day} = formatter(date);
  return `${year}-${month}-${day}`;
};
