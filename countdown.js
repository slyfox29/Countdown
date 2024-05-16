(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
  dd = String(today.getDate()).padStart(2, "0"),
  mm = String(today.getMonth() + 1).padStart(2, "0"),
  yyyy = today.getFullYear(),
  nextYear = yyyy + 1,
  dayMonth = "05/24/",
  birthday = dayMonth + yyyy + " 13:30:00"; // include time

  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / day),
          document.getElementById("hours").innerText = Math.floor((distance % day) / hour),
          document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute),
          document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

        // Convert milliseconds to days for comparison
        const daysRemaining = Math.floor(distance / day);

        // Check if remaining time is less than or equal to 0 days
        if (distance <= 0 || daysRemaining > 364) {
          document.getElementById("headline").innerText = "School is Over!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
      }, 0);

  // Show/hide fullscreen button and cursor in fullscreen mode
  document.addEventListener('fullscreenchange', function() {
    const fullscreenButton = document.getElementById('fullscreen-button');
    if (document.fullscreenElement) {
      fullscreenButton.style.display = 'none';
      document.body.style.cursor = 'none';
    } else {
      fullscreenButton.style.display = 'block';
      document.body.style.cursor = 'auto';
      location.reload(); // Refresh the page upon exiting fullscreen
    }
  });

}());

function toggle_fullscreen() {
  if (!document.fullscreenElement) {
    document.body.requestFullscreen();
    document.body.setAttribute("fullscreen",""); 
  } else {
    document.exitFullscreen();
    document.body.removeAttribute("fullscreen"); 
  }
}
