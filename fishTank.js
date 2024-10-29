
function toggle3d() {
    var image = document.getElementById("fishImg");
    var model = document.getElementById("fishModel");
    var message = document.getElementById("modelMessage");
  if (image.style.display === "none") {
    image.style.display = "block";
    model.style.display = "none";
  } else {
    message.style.opacity = 0;
    image.style.display = "none";
    model.style.display = "block";
  }
}

function scale(){
    const collection = document.getElementsByClassName("circleImage");
    if (collection[0].style.height == "150px") {
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.height = "500px";
            collection[i].style.width = "500px";
        }
    }else{
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.height = "150px";
            collection[i].style.width = "150px";
        }
    }
}
