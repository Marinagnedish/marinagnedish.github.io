function sayHello() {
  var person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.getElementById("page_content1").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}
