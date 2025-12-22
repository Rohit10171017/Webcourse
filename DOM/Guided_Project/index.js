let boxes = Array.from(document.getElementsByClassName("container"));

for (let i = 0; i < boxes.length; i++) {
  
  if (i == 0) {
    boxes[i].style.backgroundColor = "blue";
  }

  if (i == 16) {
  boxes[i].style.backgroundColor = "palevioletred";
  }

  if (i == 8) {
    boxes[i].style.backgroundColor= 'green';
  }

  if (i % 2 == 1) {
    boxes[i].style.backgroundColor = "lime";
  }
}

console.log(boxes);

