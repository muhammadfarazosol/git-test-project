// script.js

document.addEventListener("DOMContentLoaded", function () {
  console.log("Document fully parsed and script executed.");
  const paragraph = document.createElement("h1");
  paragraph.textContent = "This paragraph was added by the deferred script.";
  document.body.appendChild(paragraph);
});
