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

  var item_count=$('#testimonial .owl-dot').length;
  $('#testimonial .owl-dots').before(`<div class='item_count_start'><span>01</span><span>${(item_count < 10) ? "0"+item_count : item_count}</span></div>`);


//-------------------------- End Client Logo----------------------------


  // var counted = 0;
  // $(window).scroll(function() {

  //   var oTop = $('#counter').offset().top - window.innerHeight;
  //   if (counted == 0 && $(window).scrollTop() > oTop) {
  //     $('.count').each(function() {
  //       var $this = $(this),
  //         countTo = $this.attr('data-count');
  //       $({
  //         countNum: $this.text()
  //       }).animate({
  //           countNum: countTo
  //         },

  //         {

  //           duration: 2000,
  //           easing: 'swing',
  //           step: function() {
  //             $this.text(Math.floor(this.countNum));
  //           },
  //           complete: function() {
  //             $this.text(this.countNum);
  //             //alert('finished');
  //           }

  //         });
  //     });
  //     counted = 1;
  //   }

  // });

  $(window).scroll(startCounter);

})

function startCounter() {
  let scrollY = (window.pageYOffset || document.documentElement.scrollTop) + window.innerHeight;
  let countdiv=document.getElementById('counter-container');
  let divPos = countdiv.offsetTop;

  if (scrollY > divPos) {
    $(window).off("scroll", startCounter);

    $('.count').each(function() {
      var $this = $(this);
      jQuery({
        Counter: 0
      }).animate({
        Counter: $this.text().replace(/,/g, '')
      }, {
        duration: 1000,
        easing: 'swing',
        step: function() {
          $this.text(commaSeparateNumber(Math.floor(this.Counter)));
        },
        complete: function() {
          $this.text(commaSeparateNumber(this.Counter));
          //alert('finished');
        }
      });
    });

    function commaSeparateNumber(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
}

//-------------------------- Start CountDown Timer----------------------------

$(function(){
  var endDate = new Date("2023-12-31T23:59:59").getTime();

  var countdown = setInterval(function() {
    var dateTimeNow = new Date().getTime();
    var remainingTime = endDate - dateTimeNow;

    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // $("#countdown").html(days + "days " + hours + "hrs " + minutes + "min " + seconds + "s");
    $("#days").html( days + " <span class='time_label'>Days</span>");
    $("#hour").html(  hours + " <span class='time_label'>Hours</span>");
    $("#minute").html( minutes + " <span class='time_label'>Minutes</span>");
    $("#second").html( seconds + " <span class='time_label'>Seconds</span>");

    if (remainingTime < 0) {
      clearInterval(countdown);
      $("#countdown").html("Time is up!");
    }
  }, 1000);
});

//-------------------------- End CountDown Timer----------------------------

//-------------------------- Start Client Logo----------------------------


