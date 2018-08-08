$(document).ready(function() {
  $("#formName").submit(function(event) {
    var nameInput  = $("input#yourName").val();

    $(".personName").append(nameInput);

    $("#story").show();
      $("form#formName").remove();

    event.preventDefault();
  });
});
