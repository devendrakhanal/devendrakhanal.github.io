document.addEventListener("submit", function(){
    alert('Message Received')
})



$(window).scroll(function() {
  var section2Offset = $('.each_progress').offset().top;
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();

  if (scrollTop + windowHeight >= section2Offset) {

      $('.progress .progress-bar').css("width",
                function() {
                  this.innerText = $(this).attr("aria-valuenow") + "%";
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
  }
});
