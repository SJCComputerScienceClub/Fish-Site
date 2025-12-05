const fishFacing = {
  clownFish: 1,
  blueTangFish: 1,
  yellowTangFish: -1,
  bicolorFoxfaceFish: 1,
  coralBeautyFish: 1,
  orchidDottybackFish: 1,
  astraeaTurboSnail: 1,
  indigoDottybackFish: 1,
  serpentSeaStar: 1,
  blackLongSpinedUrchin: 1,
  disparAnthias: 1,
  yellowtailDamsel: -1,
  blueCaribbeanFish: -1,
  seaCucumber: 1,
  santaFish: -1,
};
const speedMultiplier = {
  clownFish: 1,
  blueTangFish: 1,
  yellowTangFish: 1,
  bicolorFoxfaceFish: 1,
  coralBeautyFish: 1,
  orchidDottybackFish: 1,
  astraeaTurboSnail: 2,
  indigoDottybackFish: 1,
  serpentSeaStar: 2,
  disparAnthias: 1,
  yellowtailDamsel: 1,
  blueCaribbeanFish: 1,
  seaCucumber: 2,
  santaFish: 1,
};
function swimFish(fish) {
  if (fish.id === 'blackLongSpinedUrchin') return;

  const aquarium = document.getElementById('aquarium');
  const maxX = aquarium.clientWidth - fish.clientWidth;
  const maxY = aquarium.clientHeight - fish.clientHeight;

  const startX = fish.offsetLeft;
  const startY = fish.offsetTop;

  const isSnail = fish.id === 'astraeaTurboSnail' || fish.id === 'serpentSeaStar' || fish.id === 'seaCucumber';
  const snailY = aquarium.clientHeight - fish.clientHeight - 30;

  const targetX = Math.random() * maxX;
  const targetY = isSnail ? snailY : Math.random() * maxY;

  const baseDuration = 6000 + Math.random() * 4000;
  const speed = speedMultiplier[fish.id] || 1;
  const duration = baseDuration * speed;

  const startTime = performance.now();

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function animate(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutQuad(progress);

    const currentX = startX + (targetX - startX) * eased;
    const currentY = startY + (targetY - startY) * eased;

    fish.style.left = `${currentX}px`;
    fish.style.top = `${currentY}px`;

    if (!isSnail) {
      const flip = (targetX < startX ? -1 : 1) * fishFacing[fish.id];
      fish.style.transform = `scaleX(${flip})`;
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

document.getElementById("santaFish").addEventListener("click", function () {
    const msg = document.getElementById("christmasMessage");
    msg.style.display = "block";

    setTimeout(() => {
        msg.style.display = "none";
    }, 3000); // message stays for 3 seconds
});

