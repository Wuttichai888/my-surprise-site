function goNext() {
  confettiRain();
  setTimeout(() => {
    window.location.href = "flowers.html";
  }, 2000);
}

function confettiRain() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.textContent = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-10px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animation = "fall 2s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}
