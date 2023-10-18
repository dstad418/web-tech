// Add your code here

document.addEventListener("DOMContentLoaded", () => {
    const wordInput = document.getElementById("wordInput");
    const textBox = document.querySelector(".textBox");
  
    wordInput.addEventListener("input", () => {
      const searchWord = wordInput.value.trim();
      const text = textBox.innerText;
      const words = text.split(/\s+/);
  
      let highlightedText = "";
      words.forEach((word) => {
        const regex = new RegExp(`\\b${searchWord}\\b`, "i");
        if (regex.test(word)) {
          highlightedText += `<span class="highlight">${word}</span> `;
        } 
        else {
          highlightedText += `${word} `;
        }
      });
  
      textBox.innerHTML = highlightedText.trim();
    });
  });