function moveFish(fishElement) {
  const aquarium = document.getElementById('aquarium');
  const maxX = aquarium.clientWidth - fishElement.clientWidth;
  const maxY = aquarium.clientHeight - fishElement.clientHeight;
  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;
  const rotate = Math.random() < 0.5 ? '' : 'scaleX(-1)';

  fishElement.style.transform = `translate(${newX}px, ${newY}px) ${rotate}`;
}
function animateFish() {
  const fishes = document.querySelectorAll('.fish');
  fishes.forEach(f => {
    moveFish(f);
  });
  // repeat every few seconds
  setTimeout(animateFish, 3000 + Math.random()*2000);
}

window.onload = () => {
  animateFish();
};
function swimFish(fish) {
  const aquarium = document.getElementById('aquarium');
  const maxX = aquarium.clientWidth - fish.clientWidth;
  const maxY = aquarium.clientHeight - fish.clientHeight;

  // random new destination
  const targetX = Math.random() * maxX;
  const targetY = Math.random() * maxY;

  // starting position
  const start = fish.getBoundingClientRect();
  const rect = aquarium.getBoundingClientRect();
  const startX = start.left - rect.left;
  const startY = start.top - rect.top;

  const duration = 6000 + Math.random() * 4000; // 6–10 seconds per swim
  const startTime = performance.now();

  // Randomly flip fish direction based on movement
  if (targetX < startX) {
    fish.style.transform = `scaleX(-1)`; // face left
  } else {
    fish.style.transform = `scaleX(1)`; // face right
  }

  function easeInOutQuad(t) {
    return t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t;
  }

  function animate(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutQuad(progress);

    const currentX = startX + (targetX - startX) * eased;
    const currentY = startY + (targetY - startY) * eased;

    fish.style.left = `${currentX}px`;
    fish.style.top = `${currentY}px`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      // when finished, swim again
      setTimeout(() => swimFish(fish), 1000 + Math.random() * 2000);
    }
  }

  requestAnimationFrame(animate);
}

window.onload = () => {
  document.querySelectorAll('.fish').forEach(f => {
    swimFish(f);
  });
};



