function swimFish(fish) {
  const aquarium = document.getElementById('aquarium');
  const maxX = aquarium.clientWidth - fish.clientWidth;
  const maxY = aquarium.clientHeight - fish.clientHeight;

  const startX = fish.offsetLeft;
  const startY = fish.offsetTop;

  const targetX = Math.random() * maxX;
  const targetY = Math.random() * maxY;

  const duration = 6000 + Math.random() * 4000;
  const startTime = performance.now();

  function easeInOutQuad(t) {
    return t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t;
  }

  function animate(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutQuad(progress);

    const currentX = startX + (targetX - startX) * eased;
    const currentY = startY + (targetY - startY) * eased;

    const flip = targetX < startX ? -1 : 1;
    fish.style.transform = `translate(${currentX}px, ${currentY}px) scaleX(${flip})`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      setTimeout(() => swimFish(fish), 1000 + Math.random() * 2000);
    }
  }

  requestAnimationFrame(animate);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.icon').forEach(f => swimFish(f));
});
