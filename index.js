function setDate() {
  const now = new Date();
  //seconds hand manipulation
  let secondsHands = document.querySelector(".sec-hand");
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondsHands.style.transform = `rotate(${secondsDegrees}deg)`;

  //minute hand manipulation
  let minutesHand = document.querySelector(".min-hand");
  const minute = now.getMinutes();
  //console.log(minute);
  const minutesDegree = (minute / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

  //hours hand manipulation
  let hourHand = document.querySelector(".hour-hand");
  const hour = now.getHours();
  const hourDegree = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(setDate, 1000);
