document
   .getElementById("sign-up")
   addEventListener("submit"), function (event) {
    const username = document.getElementById("username").Value;
    const password = document.getElementById("password").value;

    if(username === "parsa" && password === "Panr") {
        Swal.fire({
            title: "Good job!",
            text: "خوش امدید ادمین",
            icon: "success"
          });
    }
    
    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
    }
   }