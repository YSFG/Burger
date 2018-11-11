$(function() {
  console.log("FOO")
  $(".devoured").on("click", function(event) {
    var id = $(this).attr("data-id");
    var newDevour = $(this).attr("data-newdevour");
    var newDevourState = {
      devoured: newDevour
    };
    console.log(newDevour);
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed burger to", newDevourState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#submit-btn").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newBurger").val().trim(),
      
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // $(".delete-burger").on("click", function(event) {
  //   var id = $(this).attr("data-id");

  //   // Send the DELETE request.
  //   $.ajax("/api/burgers/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("deleted burger", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});