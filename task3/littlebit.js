$(function(){
  function makeChanges(msgIndex){
    $(".person").css("display", "none");
    $(".pic_holder").css("z-index", "0");
    
    $(".msg:eq(" + msgIndex + ") .pic_holder").css("z-index", "100");
    $(".msg:eq(" + msgIndex + ") .person").css("display", "block");
    
    $("body").append("<div id=\"closePerson\"></div>");
    var closeP = $("#closePerson");
    closeP.width($(document).width());
    closeP.height($(document).height());
    closeP.mouseover(function(){
      $(".msg:eq(" + msgIndex + ") .person").hide();
      $(this).width(0).height(0);
    });
    var name = $(".msg:eq(" + msgIndex + ") .name");
    var nameText = name.html();
    $(".msg:eq(" + msgIndex + ") .person .person_name").html(nameText);
  }
  
  $(".pic_holder").click(function(){
    var msgIndex = $(".pic_holder").index(this);
    makeChanges(msgIndex);
  });
  
  $(".msg .name").click(function(){
    var msgIndex = $(".msg .name").index(this);
    makeChanges(msgIndex);
  });
});
