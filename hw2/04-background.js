document.addEventListener("DOMContentLoaded", function () {
  let interval = 3000; // Default value!
  let timer; // Not implemented yet, but still block accessible only 

  const toggleButton = document.getElementById("toggleButton");
  const intervalInput = document.getElementById("intervalInput");
  
  function randomColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 100);
    const lightness = Math.floor(Math.random() * 100);
    // This sets the alpha, per: "Full colors tend to be harsh on the eyes. Instead of using full colors generate rgba() or hsla() colors and dim the value of the alpha."
    const alpha = (Math.random() * 0.5) + 0.5;
    // Returns embedded values
    return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
  }
  
  function setBackgroundColor() {
    const color = randomColor();
    document.body.style.backgroundColor = color;
    // Update the button color to match the background
    if (toggleButton.textContent === "Stop") {
      toggleButton.style.backgroundColor = color;
    }
  }
  
  function startBackgroundChange() {
    setBackgroundColor();
    timer = setInterval(setBackgroundColor, interval);
  }
    
  // Call to start background changes right away, per PR review.
  startBackgroundChange();
  
  function stopBackgroundChange() {
    clearInterval(timer);
  }
  
  toggleButton.addEventListener("click", function () {
    if (toggleButton.textContent === "Start") {
      interval = Number(intervalInput.value) * 1000 || 3000;
      startBackgroundChange();
      toggleButton.textContent = "Stop";
      toggleButton.classList.remove("btn-primary");
      toggleButton.classList.add("btn-danger");
    } 
    
    else {
      stopBackgroundChange();
      toggleButton.textContent = "Start";
      toggleButton.classList.remove("btn-danger");
      toggleButton.classList.add("btn-primary");
      toggleButton.style.backgroundColor = ""; // Reset to original color
    }
  });
});
  