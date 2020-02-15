function makeId(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function getCurrentDate() {
  return new Date();
}

function getCurrentMonthDayTime() {
  const date = getCurrentDate();
  return date.toLocaleString(); // -> "2/1/2013 7:37:08 AM"
}

module.exports = {
  makeId,
  getCurrentMonthDayTime
};
