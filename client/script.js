document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault();
    registerUser.call(this); 


  });
  
async function registerUser() {
    // const formData = new FormData(this);
    try {
      const response = await fetch("http://localhost:3010/api/lanyAlbums", {
        method: "GEt",
      });
  
      const data = await response.json();
      console.log("data", data)
    } catch (error) {
      console.error(error);
    }
  };
  