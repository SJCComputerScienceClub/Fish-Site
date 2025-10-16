const fishFacing = {
  clownFish: 1,
  blueTangFish: 1,
  yellowTangFish: 1,
  bicolorFoxfaceFish: 1,
  coralBeautyFish: 1,
  orchidDottybackFish: 1,
  astraeaTurboSnail: 1,
  indigoDottybackFish: 1
};


function swimFish(fish) {
  if (!isSnail) {
  const flip = (targetX < startX ? -1 : 1) * fishFacing[fish.id];
  fish.style.transform = `scaleX(${flip})`;
}

  const aquarium = document.getElementById('aquarium');
  const maxX = aquarium.clientWidth - fish.clientWidth;
  const maxY = aquarium.clientHeight - fish.clientHeight;

  const startX = fish.offsetLeft;
  const startY = fish.offsetTop;

  const isSnail = fish.id === 'astraeaTurboSnail';
  const targetX = Math.random() * maxX;
  const targetY = isSnail
    ? maxY - fish.clientHeight - 5  // bottom only
    : Math.random() * maxY;

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

    fish.style.left = `${currentX}px`;
    fish.style.top = `${currentY}px`;

    // flip fish left/right (skip for snail if desired)
    if (!isSnail) {
      fish.style.transform = `scaleX(${targetX < startX ? -1 : 1})`;
    }

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      setTimeout(() => swimFish(fish), 1000 + Math.random() * 2000);
    }
  }

  requestAnimationFrame(animate);
}

// start all fish after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.icon').forEach(f => {
    f.style.position = 'absolute';  // ensure positioning works
    swimFish(f);
  });
});
