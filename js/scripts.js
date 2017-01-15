$(document).ready(function() {

  // Hamburger Function
  $('.hamburger').on('click', function(e) {
    // Prevent link from jumping to the top of the page
    e.preventDefault();
    // If menu is already showing, slide it up. Otherwise, slide it down.
    $('.menu').toggleClass('slide-down');
  });



  // Experience Buttons
  $('.exp1').on('click', function(e) {
    e.preventDefault();
    if ( $("#exp1") ) {
      $("#exp1").toggleClass('slide-down');
    }
  });

  $('.exp2').on('click', function(e) {
    e.preventDefault();
    if ( $("#exp2") ) {
      $("#exp2").toggleClass('slide-down');
    }
  });

  $('.exp3').on('click', function(e) {
    e.preventDefault();
    if ( $("#exp3") ) {
      $("#exp3").toggleClass('slide-down');
    }
  });



  // Smooth scrolling nav links
$("a").on('click', function(event) {

  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      window.location.hash = hash;
    });
  }
});



});//End jQuery
