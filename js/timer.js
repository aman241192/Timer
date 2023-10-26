let days = document.querySelectorAll(".days");
let hours = document.querySelectorAll(".hours");
let minutes = document.querySelectorAll(".minutes");
let seconds = document.querySelectorAll(".seconds");
let heartBlink = document.querySelectorAll(".heartBlink");
let seconds_wrap = document.querySelectorAll(".seconds_wrap");
let min_wrap = document.querySelectorAll(".min_wrap");
let hours_wrap = document.querySelectorAll(".hours_wrap");
let days_wrap = document.querySelectorAll(".days_wrap");
let time_wrap = document.querySelectorAll(".time_wrap");

let s;
let m;
let h;
let idno = 1;
let comingDate;

for (i = 0; i < time_wrap.length; i++) {
  time_wrap[i].setAttribute("id", "time" + idno);
  idno++;
}

comingDate = new Date(2025, 12, 1).getTime();

function display() {
  setInterval(day, 1000);

  function day() {
    let currentDate = new Date().getTime();
    console.log(currentDate);
    let timeDifference = comingDate - currentDate;

    let remaingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hr = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let min = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((timeDifference % (1000 * 60)) / 1000);

    for (const day of days) {
      day.innerHTML = `${remaingDays}`;
      if (h == 24)
        for (const days_wraps of days_wrap) {
          days_wraps.classList.add("animation");
        }
      else {
        for (const days_wraps of days_wrap) {
          days_wraps.classList.remove("animation");
        }
      }
    }
    for (const hour of hours) {
      hour.innerHTML = `${hr}`;
      if (m < 1) {
        for (const hours_wraps of hours_wrap) {
          hours_wraps.classList.add("animation");
        }
      } else {
        for (const hours_wraps of hours_wrap) {
          hours_wraps.classList.remove("animation");
        }
      }
    }
    for (const minute of minutes) {
      minute.innerHTML = `${min}`;
      m = `${min}`;
      if (s < 1) {
        console.log(m);
        for (const min_wraps of min_wrap) {
          min_wraps.classList.add("animation");
        }
      } else {
        for (const min_wraps of min_wrap) {
          min_wraps.classList.remove("animation");
        }
      }
    }
    for (const second of seconds) {
      if (s > 0 && s < 10) {
        second.innerHTML = `0${sec}`;
      } else {
        second.innerHTML = `${sec}`;
      }
      s = `${sec}`;
      for (const seconds_wraps of seconds_wrap) {
        seconds_wraps.classList.add("animation");
      }
    }
  }
}

display();
