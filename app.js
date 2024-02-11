
function accepted() {
    var response = prompt("I LOVE YOU");
    if (response === "i love you too") {
        alert("I love you . Have a nice day!");
        }
    else {
        alert("Say it back Please");
        var another_response=prompt("I LOVE YOU");
        if (another_response!== "i love you"){
            var last_chance=prompt("SAY IT BACKKKK")
            }
        else {
            alert("Thank you , have a nice day")
            }
      }
}
