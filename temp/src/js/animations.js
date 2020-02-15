const $ = require("jquery");

function navSliderAnimation() {
  $(".nav-item").hover(
    function() {
      $(this)
        .find(".accent-slider")
        .removeClass("slide-left");
      $(this)
        .find(".accent-slider")
        .addClass("slide-right");
    },
    function() {
      $(this)
        .find(".accent-slider")
        .addClass("slide-left");

      $(this)
        .find(".accent-slider")
        .removeClass("slide-right");
    }
  );
}

module.exports = {
  navSliderAnimation
};
