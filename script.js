let currentPage = 1;

function nextPage() {
  document.getElementById(`page${currentPage}`).classList.add("hidden");
  currentPage++;
  const nextPage = document.getElementById(`page${currentPage}`);
  if (nextPage) {
    nextPage.classList.remove("hidden");
  }
}

function prevPage() {
  document.getElementById(`page${currentPage}`).classList.add("hidden");
  currentPage--;
  const prevPage = document.getElementById(`page${currentPage}`);
  if (prevPage) {
    prevPage.classList.remove("hidden");
  }
}

function showFireworks() {
  const container = document.getElementById("animation-container");
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const firework = document.createElement("div");
      firework.classList.add("firework");
      firework.style.left = `${Math.random() * 100}vw`;
      firework.style.top = `${Math.random() * 100}vh`;
      container.appendChild(firework);

      setTimeout(() => firework.remove(), 1000);
    }, i * 300);
  }
}

// Dekorasi Bintang Berkilau
const container = document.getElementById("animation-container");
for (let i = 0; i < 50; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = `${Math.random() * 100}vw`;
  star.style.top = `${Math.random() * 100}vh`;
  star.style.animationDuration = `${1 + Math.random() * 1.5}s`;
  container.appendChild(star);
}
