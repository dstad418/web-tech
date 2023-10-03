document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const numberInput = document.getElementById("numberInput");
  
    numberInput.addEventListener("input", function() {
      const value = this.value;
  
      // If empty
      if (value === "") {
        output.innerHTML = "";
        return;
      }
  
      // If value is less than 0 OR the value was a non-number (i.e.: text, symbols, etc.)
      if (value < 0 || isNaN(value)) {
        output.innerHTML = '<span class="text-danger">Please enter a valid positive number.</span>';
        return;
      }
  
      // Based on IF palindrome, then output is updated
      if (isPalindrome(value)) {
        output.innerHTML = '<span class="text-success">Yes. This is a palindrome!</span>';
      } else {
        output.innerHTML = '<span class="text-danger">No. Try again.</span>';
      }
    });
  
    // Function to check if num is palindrome
    function isPalindrome(num) {
      // Turns number to string
      const strNum = String(num);
      // Parses string characters to an array, flips array values, rejoins them.
      // Returns true if the values match, else false
      return strNum === strNum.split("").reverse().join("");
    }
});