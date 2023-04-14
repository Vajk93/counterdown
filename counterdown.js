var time1 = new Date("Jan 30, 2022 23:59:00").getTime();
var time2 = new Date("Jun 31, 2023 23:59:00").getTime();
var time3 = new Date("Aug 31, 2023 23:59:00").getTime();
var time4 = new Date("Dec 31, 2023 23:59:00").getTime();

//-------------------------------- FIRST TIME FUNCTION ------------------------------
var firstTime = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance1 = time1 - now;
  // Time calculations for days, hours, minutes and seconds
  var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor(
    (distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

  let zeroCharHours;
  let zeroCharMinutes;
  let zeroCharSeconds;

  if (minutes1 < 10) {
    zeroCharMinutes = "0";
  } else {
    zeroCharMinutes = "";
  }

  if (seconds1 < 10) {
    zeroCharSeconds = "0";
  } else {
    zeroCharSeconds = "";
  }

  if (hours1 < 10) {
    zeroCharHours = "0";
  } else {
    zeroCharHours = "";
  }

  document.getElementById("time1").innerHTML = `
    <p class="yellowFont">${days1}nap&nbsp;</p>
    <p>${zeroCharHours}${hours1}:</p>
    <p>${zeroCharMinutes}${minutes1}:</p>
    <p class="littleFont">${zeroCharSeconds}${seconds1}</p>
  `;

  if (days1 < 0) {
    document.getElementById(
      "time1"
    ).innerHTML = `<p style="color: red;">LEJÁRT</p>`;
  }
}, 1000);

//-------------------------------- SECOND TIME FUNCTION ------------------------------
var secondTime = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance2 = time2 - now;
  // Time calculations for days, hours, minutes and seconds
  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor(
    (distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

  let zeroCharHours;
  let zeroCharMinutes;
  let zeroCharSeconds;

  if (minutes2 < 10) {
    zeroCharMinutes = "0";
  } else {
    zeroCharMinutes = "";
  }

  if (seconds2 < 10) {
    zeroCharSeconds = "0";
  } else {
    zeroCharSeconds = "";
  }

  if (hours2 < 10) {
    zeroCharHours = "0";
  } else {
    zeroCharHours = "";
  }

  document.getElementById("time2").innerHTML = `
    <p class="yellowFont">${days2}nap&nbsp;</p>
    <p>${zeroCharHours}${hours2}:</p>
    <p>${zeroCharMinutes}${minutes2}:</p>
    <p class="littleFont">${zeroCharSeconds}${seconds2}</p>
  `;

  if (days2 < 0) {
    document.getElementById(
      "time2"
    ).innerHTML = `<p style="color: red;">LEJÁRT</p>`;
  }
}, 1000);

//-------------------------------- THIRD TIME FUNCTION ------------------------------
var thirdTime = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance3 = time3 - now;
  // Time calculations for days, hours, minutes and seconds
  var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours3 = Math.floor(
    (distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);

  let zeroCharHours;
  let zeroCharMinutes;
  let zeroCharSeconds;

  if (minutes3 < 10) {
    zeroCharMinutes = "0";
  } else {
    zeroCharMinutes = "";
  }

  if (seconds3 < 10) {
    zeroCharSeconds = "0";
  } else {
    zeroCharSeconds = "";
  }

  if (hours3 < 10) {
    zeroCharHours = "0";
  } else {
    zeroCharHours = "";
  }

  document.getElementById("time3").innerHTML = `
    <p class="yellowFont">${days3}nap&nbsp;</p>
    <p>${zeroCharHours}${hours3}:</p>
    <p>${zeroCharMinutes}${minutes3}:</p>
    <p class="littleFont">${zeroCharSeconds}${seconds3}</p>
  `;

  if (days3 < 0) {
    document.getElementById(
      "time3"
    ).innerHTML = `<p style="color: red;">LEJÁRT</p>`;
  }
}, 1000);

//-------------------------------- FOURTH TIME FUNCTION ------------------------------
var fourthTime = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance4 = time4 - now;
  // Time calculations for days, hours, minutes and seconds
  var days4 = Math.floor(distance4 / (1000 * 60 * 60 * 24));
  var hours4 = Math.floor(
    (distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes4 = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds4 = Math.floor((distance4 % (1000 * 60)) / 1000);

  let zeroCharHours;
  let zeroCharMinutes;
  let zeroCharSeconds;

  if (minutes4 < 10) {
    zeroCharMinutes = "0";
  } else {
    zeroCharMinutes = "";
  }

  if (seconds4 < 10) {
    zeroCharSeconds = "0";
  } else {
    zeroCharSeconds = "";
  }

  if (hours4 < 10) {
    zeroCharHours = "0";
  } else {
    zeroCharHours = "";
  }

  document.getElementById("time4").innerHTML = `
    <p class="yellowFont">${days4}nap&nbsp;</p>
    <p>${zeroCharHours}${hours4}:</p>
    <p>${zeroCharMinutes}${minutes4}:</p>
    <p class="littleFont">${zeroCharSeconds}${seconds4}</p>
  `;

  if (days4 < 0) {
    document.getElementById(
      "time4"
    ).innerHTML = `<p style="color: red;">LEJÁRT</p>`;
  }
}, 1000);
