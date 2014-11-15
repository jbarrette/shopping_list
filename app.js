$("#submit").on("enter-press", function() {
  var item = $("input").val();
  $("ul").append("<li>"+item+"</li>");
});

$(".delete").on("click", function() {
  $(this).closest("li").remove();
});