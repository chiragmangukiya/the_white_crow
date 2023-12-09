//-------------------------- Start CountDown Timer----------------------------

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days + " <span class='time_label'>Days</span>"
  document.getElementById("hour").innerHTML =  hours + " <span class='time_label'>Hours</span>"
  document.getElementById("minute").innerHTML = minutes + " <span class='time_label'>Minutes</span>"
  document.getElementById("second").innerHTML = seconds + " <span class='time_label'>Seconds</span>"

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//-------------------------- End CountDown Timer----------------------------

//-------------------------- Start Client Logo----------------------------

$(document).ready(function(){

  $('#client_logo').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:false,
      autoplay:true,
      autoplayTimeout:3000,
      smartSpeed:1000,
      responsive:{
          0:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })

})

//-------------------------- End Client Logo----------------------------