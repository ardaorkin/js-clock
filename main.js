setInterval(function () {
  const time = new Date().toLocaleTimeString("tr-TR", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  const hour = time.split(":")[0];
  const minute = time.split(":")[1];
  const second = time.split(":")[2];
  const hourHand = document.getElementById("hour");
  const minuteHand = document.getElementById("minute");
  const secondHand = document.getElementById("second");
  hourHand.style.transform = `rotate(${hour * 30 - 360}deg)`;
  minuteHand.style.transform = `rotate(${minute * 6 - 360}deg)`;
  secondHand.style.transform = `rotate(${second * 6 - 360}deg)`;
}, 1000);
