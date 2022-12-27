window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".form").addEventListener("submit", function(e) {
      const username = this.input1.value;
      const password = this.input2.value;
      if (username == 37370397 && password == "Devaru@1234") {
        this.action = "main.html";
      } else {
        e.preventDefault(); // this goes here now
        alert("Invalid credentials");
      }
    })
  })