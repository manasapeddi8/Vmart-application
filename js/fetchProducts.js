  /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var dropdownContent = this.nextElementSibling;
          if (dropdownContent.style.display === "block") {
              dropdownContent.style.display = "none";
          } else {
              dropdownContent.style.display = "block";
          }
      });
  }

  function fetchPrpoducts(self) {
      console.log("fetch prod")
      let url = "http://localhost:8010/inventory"
      fetch(url)
          .then(response => {
              console.log("response is"+ Object.keys(response).length);
              //response will have all images and product  descriptions 
              for (let i = 0; i < 6; i++) {
                  if (i < response.length) {
                    console.log("inside for  is"+ response)
                      document.getElementById("img" + i).src = response[i].productSrc;
                      document.getElementById("name" + i).value = response[i].productname;
                      document.getElementById("price" + i).value = response[i].productprice;
                  } else {
                      console.log("inside else is"+ response.body);
                      console.log("inside else is"+ response.body.length);
                      document.getElementById("div" + i).style.display = 'none';
                  }
              }
          })
          .catch(error => {
              console.log("FETCH DATA ERROR OCCURED " + error)
          });
  }


  if (document.getElementById("usernameProducts") != null) {
      document.getElementById("usernameProducts").innerText = "Hi, " + localStorage.getItem("username");
  }
  if (document.getElementById("usernameCart") != null) {
      document.getElementById("usernameCart").innerText = "Hi, " + localStorage.getItem("username");
  }