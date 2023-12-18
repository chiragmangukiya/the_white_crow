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

  $('#testimonial').owlCarousel({
      loop:true,
      nav:false,
      autoplay:true,
      autoplayTimeout:3000,
      smartSpeed:1000,
      items:1,
      animateIn:'animate__fadeIn',
      animateOut:'animate__fadeOut',
      dotsData:true,
      touchDrag:false,
      mouseDrag:false
  })

  $('#gallery').owlCarousel({
      loop:true,
      nav:false,
      autoplay:true,
      autoplayTimeout:3000,
      smartSpeed:1000,      
      dots:false,
      touchDrag:true,
      mouseDrag:true,
      center:true,
      responsive:{
        0:{
          items:4
        },
        1000:{
          items:6
        }
      }
  })


//-------------------------- End Client Logo----------------------------


  var counted = 0;
  $(window).scroll(function() {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $('.count').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },

          {

            duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }

          });
      });
      counted = 1;
    }

  });



})

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
  // document.getElementById("days").innerHTML = days + " <span class='time_label'>Days</span>";
  // document.getElementById("hour").innerHTML =  hours + " <span class='time_label'>Hours</span>";
  // document.getElementById("minute").innerHTML = minutes + " <span class='time_label'>Minutes</span>";
  // document.getElementById("second").innerHTML = seconds + " <span class='time_label'>Seconds</span>";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//-------------------------- End CountDown Timer----------------------------

//-------------------------- Start Client Logo----------------------------


