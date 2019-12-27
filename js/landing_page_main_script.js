$(document).ready(function () {

  //Add fade-in  animation to all "row" elements
  $(document).on("scroll", function () {
    let pageTop = $(document).scrollTop();
    let pageBottom = pageTop + $(window).height();
    let tags = $(".row");
    for (let i = 0; i < tags.length; i++) {
      var tag = tags[i]

      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("fade-in");
      } else {
        $(tag).removeClass("fade-in");
      }
    }
  });

  // Add smooth scrolling on all links inside the cta
  $("#inov-cta a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        2000,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});