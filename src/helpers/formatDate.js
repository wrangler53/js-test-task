const formatDate = date => {
  const newDate = new Date(date);

  const year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let day = newDate.getDate();

  if (month < 10) month = `0${month}`;
  if (day < 10) day = `0${day}`;

  return `${day}/${month}/${year}`;
};

export default formatDate;
