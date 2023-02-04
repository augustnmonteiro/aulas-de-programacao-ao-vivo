function addZero(value) {
  // if (value < 10) {
  //   return "0" + value;
  // }
  // return value;
  return (value < 10)? "0" + value : value;
}

function formatDate(date) {
  let day = addZero(date.getDate());
  let month = addZero(date.getMonth() + 1);
  let year = date.getFullYear();
  let hour = addZero(date.getHours());
  let minutes = addZero(date.getMinutes());
  return day + "/" + month + "/" + year + " " + hour + ":" + minutes;
}

function currentDate() {
  let currentDate = new Date();
  return formatDate(currentDate);
}

function currentDatePlus1() {
  let currentDate = +new Date();
  let datePlus1 = new Date(currentDate + (24 * 60 * 60 * 1000));
  return formatDate(datePlus1);
}