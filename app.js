
function accepted() {
    var response = prompt("I LOVE YOU");
    if (response !== null) {
        response = response.toLowerCase();
        if (response === "i love you too") {
            alert("Great choice!");
        } else {
            alert("Say it BACK");
            var another_response=prompt("I LOVE YOU");
            if (another_response!== "i love you"){
                prompt("SAY IT BACKKKK")
            }
            else {
                alert("Thank you")
        }
    }
}
}