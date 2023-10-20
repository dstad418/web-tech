document.addEventListener("DOMContentLoaded", function () {
    // Grab the form by its class
    const form = document.querySelector(".mainBody");
  
    // Add submit event listener to the form
    form.addEventListener("submit", function (event) {
      // Prevent the default form submission
      event.preventDefault();
  
      // Grab the values
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const registrationStatus = document.getElementById("registrationStatus").value;
      const programmingLanguages = document.getElementById("programmingLanguages").checked;
      const operatingSystems = document.getElementById("operatingSystems").checked;
      const fullStackWebDevelopment = document.getElementById("fullStackWebDevelopment").checked;
      const anythingElse = document.getElementById("anythingElse").value;
  
      // Create an object to hold the form data
      const formData = {
        username,
        email,
        registrationStatus,
        courses: {
          programmingLanguages,
          operatingSystems,
          fullStackWebDevelopment,
        },
        anythingElse,
      };
  
      // Log the form data to the console
    console.log("Form Data: ", formData);
    });
});
  