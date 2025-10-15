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
