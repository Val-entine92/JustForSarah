
function accepted() {
    var response = prompt("I LOVE YOU");
    if (response === "i love you too" || "i love you") {
        alert("Great choice!");
        }
    else {
        alert("Say it BACK");
        var another_response=prompt("I LOVE YOU");
        if (another_response!== "i love you"){
            var last_chance=prompt("SAY IT BACKKKK")
            }
        else {
            alert("Thank you , have a nice day")
            }
      }
}
