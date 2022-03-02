export function dateToString(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month >= 10 ? month : "0" + month;
  let day = date.getDate();
  day = day >= 10 ? day : "0" + day;
  let hour = date.getHours();
  let minute = date.getMinutes();
  minute = minute >= 10 ? minute : `0${minute}`;
  return `${year}.${month}.${day} ${hour}:${minute}`;
}
