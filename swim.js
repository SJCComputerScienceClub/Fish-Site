// let santaClickAllowed = true;


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

/* function startSnowfall(duration = 3000) {
    const container = document.getElementById("snowContainer");

    // Create snowflakes
    for (let i = 0; i < 40; i++) {
        let snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.innerHTML = "❄";

        // Random horizontal position & animation duration
        snowflake.style.left = Math.random() * 100 + "vw";
        snowflake.style.animationDuration = 2 + Math.random() * 3 + "s";
        snowflake.style.fontSize = (12 + Math.random() * 24) + "px";

        container.appendChild(snowflake);

        // Remove after falling
        setTimeout(() => snowflake.remove(), 5000);
    }

    // Stop snowfall entirely after duration
    setTimeout(() => {
        container.innerHTML = "";
    }, duration);
}

const christmasMessages = [
    "Ho, Ho, Ho... Merry Christmas!",
    "Season’s Greetings from the Aquarium!",
    "Glory to God in the highest, peace on earth!",
    "Believe in the magic of Christmas!",
    "Christ's love is the heart of Christmas",
    "Happy Holidays to you and yours!",
    "Wishing you peace, joy, and Christmas cheer!",
    "Have a holly jolly Christmas!",
    "May your Christmas be filled with the peace of Christ's love",
    "May your days be merry and bright!",
];

let messageIndex = 0;

document.getElementById("santaFish").addEventListener("click", function () {
    if (!santaClickAllowed) return; // ignore clicks during cooldown
    santaClickAllowed = false;      // block further clicks

    const msg = document.getElementById("christmasMessage");

    // Set the message from the rotating list
    msg.textContent = christmasMessages[messageIndex];

    // Move to the next message
    messageIndex = (messageIndex + 1) % christmasMessages.length;

    // Show message and add twinkle
    msg.style.display = "block";
    msg.classList.add("twinkle");

    // Start snow if using snow
    if (typeof startSnowfall === "function") {
        startSnowfall();
    }

    // Hide after 3 seconds and remove twinkle
    setTimeout(() => {
        msg.style.display = "none";
        msg.classList.remove("twinkle");
        santaClickAllowed = true;  // re-enable clicking
    }, 3000);
});
*/
document.addEventListener("DOMContentLoaded", () => {

  // start fish swimming
  document.querySelectorAll('.icon').forEach(f => {
    f.style.position = 'absolute';
    swimFish(f);
  });

  // Easter eggs
  const eggs = document.querySelectorAll(".easter-egg");
  const messageBox = document.getElementById("easter-message");

  let eggActive = false;
  let eggMessageIndex = 0;

  const messages = [
  "Happy Easter.",
  "May the miracle of Easter fill your heart with love, joy, and peace.",
  "We are the Easter people and hallelujah is our song. — Pope John Paul II",
  "He died so that we can live. Wishing you a blessed Easter.",
  "Our old history ends with the cross; our new history begins with our resurrection."
  ];

  const colors = [
  "#ff69b4",
  "#ffcc00",
  "#66ff99",
  "#66ccff",
  "#ff9966"
  ];

  eggs.forEach(egg => {

      egg.addEventListener("click", ()=>{

          if(eggActive) return;
          eggActive = true;

          egg.classList.add("jump");

          for(let i=0;i<8;i++){
    
          const sparkle=document.createElement("div");
          sparkle.classList.add("sparkle");
          
          const colors=["#ffb3ec","#fff5a8","#b8ffd6","#b3e6ff","#ffd1a8"];
          sparkle.style.background=colors[Math.floor(Math.random()*colors.length)];
          
          const rect=egg.getBoundingClientRect();
                      
          sparkle.style.left=(rect.left+rect.width/2)+"px";
          sparkle.style.top=(rect.top)+"px";
          
          document.body.appendChild(sparkle);
          
          setTimeout(()=>sparkle.remove(),2000);
          }

          messageBox.textContent = messages[eggMessageIndex];
          messageBox.style.color = colors[eggMessageIndex % colors.length];
          messageBox.classList.add("show-message");

          eggMessageIndex = (eggMessageIndex + 1) % messages.length;

          setTimeout(()=>{
              egg.classList.remove("jump");
              eggActive = false;
          },3000);

      });

  });

});







