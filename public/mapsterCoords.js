$(function() {
    function resizeMap() {
      $('#image').mapster({
        fill: true, 
        fillColor: '32a852',
        singleSelect: true
      });
    }
    
    // Call resizeMap on page load
    resizeMap();
    
    // Call resizeMap on window resize
    $(window).resize(function() {
      resizeMap();
    });
  });




