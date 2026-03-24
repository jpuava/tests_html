const helloBtn = document.getElementById("helloBtn");
const taskText = document.getElementById("taskText");

if (helloBtn && taskText) {
  helloBtn.addEventListener("click", () => {
    const now = new Date();
    taskText.textContent = `Nice work. You just ran JavaScript at ${now.toLocaleTimeString()}. Next: edit a card title in HTML and refresh.`;
  });
}
