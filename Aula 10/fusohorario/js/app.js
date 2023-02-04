document.querySelector("#date-complete").addEventListener('click', function() {
  alert("Data Atual: " + currentDate());
});

document.querySelector("#date-complete-plus-1").addEventListener('click', function() {
  alert("Data Atual: " + currentDatePlus1());
});