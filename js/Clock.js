const clockTitle = document.querySelector("h2#clockTitle");

const dayTitle = document.querySelector("h2#dayTitle");

function getClock() {
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDays() {
  const date = new Date();
  const week = new Array("일", "월", "화", "수", "목", "금", "토");
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());
  const weekTitle = String(week[date.getDay()]);

  dayTitle.innerText = `${month}월 ${day}일 ${weekTitle}요일`;
}

getDays();
getClock();

setInterval(getDays, 1000);
setInterval(getClock, 1000);
