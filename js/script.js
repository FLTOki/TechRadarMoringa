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
    //APPLE REVIEW SECTION END

    //SAMSUNG REVIEW SECTION START
    $(".first").mouseover(function()
    {
      $("#hide_first").fadeIn("slow");
    });
    $(".first").mouseleave(function()
    {
      $("#hide_first").fadeOut("slow");
    });

    $(".second").mouseover(function()
    {
      $("#hide_second").fadeIn("slow");
    });
    $(".second").mouseleave(function()
    {
      $("#hide_second").fadeOut("slow");
    });

    $(".third").mouseover(function()
    {
      $("#hide_third").fadeIn("slow");
    });
    $(".third").mouseleave(function()
    {
      $("#hide_third").fadeOut("slow");
    });

    $(".fourth").mouseover(function()
    {
      $("#hide_fourth").fadeIn("slow");
    });
    $(".fourth").mouseleave(function()
    {
      $("#hide_fourth").fadeOut("slow");
    });

    $(".fifth").mouseover(function()
    {
      $("#hide_fifth").fadeIn("slow");
    });
    $(".fifth").mouseleave(function()
    {
      $("#hide_fifth").fadeOut("slow");
    });

    $(".sixth").mouseover(function()
    {
      $("#hide_sixth").fadeIn("slow");
    });
    $(".sixth").mouseleave(function()
    {
      $("#hide_sixth").fadeOut("slow");
    });

    $('[data-toggle="popover"]').popover();

    //SAMSUNG REVIEW SECTION END

    //NEWSLETTER MODAL
    $("#submit").click(function()
    {
      alert("Your information was saved. Thank you");
    });


  function Comment(itemName, comment) {
    this.itemName = itemName;
    this.comment = comment;
  }


    $('form#commentForm').submit(function(event)
    {
      event.preventDefault();

      var comment = $("input#comment").val();
      var itemName = $("input#itemName").val();

      var newComment = new Comment(itemName, comment);
    
      comment.forEach(newComment => {
        $("h3#name").text(itemName);
        $("p#comment").text(comment);
      });

      $("h3#name").text(itemName);
      $("p#comment").text(comment);
      alert("comment saved");

      itemName.val("");
      comment.val("");
    });
});