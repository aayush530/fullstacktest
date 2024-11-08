
document.getElementById("form").addEventListener("submit", function(event) {

  var username = document.getElementById("user").value;
  var password = document.getElementById("pass").value;

  if (username === "cse c" && password === "cse c") {
      alert("login succesful");
      
  } else {
      alert("Invalid credentials. ");
      
      event.preventDefault();
      window.location.href = "./workspace.html";

      
  }
});
