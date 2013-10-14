// position footnotes in margin 
$(document).ready(function() {
  var fnbottom = $("article header").height();
  $(".footnoteRef").each(function() {
    var fn = $(this).attr("href");
    var ref = $(this).position().top;
    var pos = Math.max(ref,fnbottom);
    $(".footnotes").css("top", "0px");
    $(fn).css({
      position: "absolute",
      top: pos + "px",
      left: "0px"
    });
    $(fn).find("a:last-child").remove();
    fnbottom = $(fn).position().top + $(fn).height()
             + parseInt($(fn).css("margin-bottom"),10) 
             + parseInt($(fn).css("padding-bottom"),10);
  });
});
