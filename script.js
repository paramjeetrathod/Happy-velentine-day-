const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const text = document.getElementById("text");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  text.innerText = "I LOVE YOU ❤️🥰";
  yesBtn.style.fontSize = "40px";
  noBtn.style.display = "none";
});
