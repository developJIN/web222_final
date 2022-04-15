let form = document.getElementById("my-form");
let option1 = document.getElementById("radio-option1");
let option2 = document.getElementById("radio-option2");
let option3 = document.getElementById("radio-option3");

function show() {
      if (document.getElementById("my-form").options.value == "hiring") {
          document.getElementById("option1").style.display = "unset";
          document.getElementById("option23").style.display = "none";
      }
      else {
          document.getElementById("option1").style.display = "none";
          document.getElementById("option23").style.display = "unset";
      }
  }


  function check(postalCode) {
      const regexpress = /^[ABCEGHJKLMNPRSTVXY]\d[A-Z]\s{0,1}\d[A-Z]\d$/;
      let val = false;
      if (regexpress.test(postalCode))
          val = postalCode;
      return val;
  }


  form.onsubmit = function () {
      let first_name = document.getElementById("first-name");
      let last_name = document.getElementById("last-name");
      let student_id = document.getElementById("student-id");
      let email_address = document.getElementById("email-address");
      let address = document.getElementById("address");
      let city = document.getElementById("city");
      let postal = document.getElementById("postal-code");
      let hourly_rate = document.getElementById("hourly-rate");
      let message = document.getElementById("message");

      if(!(first_name.value && 
         last_name.value &&
         student_id.value &&
         email_address.value &&
         address.value &&
         city.value &&
         postal.value)
      ) {
        alert("Input box empty erorr");
        return false;
      }
      else if(!(form.options.value)) {
        alert("Choose message");
        return false;
      }
      else if(!check(postal.value)) {
          alert("Wrong postalcode");
          return false;
      }
      else if(option3.checked) {
        if(!hourly_rate.value) {
          alert("Enter hourly rate");
          return false;
        }
        else if(hourly_rate.value <= 10) {
          alert("You should enter MORE than 10");
          return false;
        }
      }
      else if(option1.checked || option2.checked) {
        if(!message.value) {
          alert("Enter message");
          return false;
        }
      }
      else return true;
  }