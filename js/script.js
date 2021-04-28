$(document).ready(function() {
    //APPLE REVIEW SECTION START
      $('#show_items').mouseover(function()
      {
        $(".clickable").fadeIn("slow");
      });
  
      $("#show_mac").mouseover(function()
      {
        $("#hide_mac").fadeIn("slow");
      });
  
      $("#hide_mac").mouseover(function()
      {
        $(".clickable_2").fadeIn("slow");
      });