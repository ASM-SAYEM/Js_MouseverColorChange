// const body = document.querySelector('body');
//     const color = ['blue', 'yellow', 'orange', 'black', 'white', 'green'];

//     body.addEventListener('mouseenter', changeColor); 

//     // function changeColor() {
//     //   const colorIndex = Math.floor(Math.random() * color.length);
//     //   body.style.backgroundColor = color[colorIndex]; 
//     // }
  
function createTrail(x, y) {
  const trail = document.createElement("div");
  trail.className = "trail";
  trail.style.left = `${x}px`;
  trail.style.top = `${y}px`;

  // Generate a random color
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  trail.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  document.body.appendChild(trail);

  // Remove after fade
  setTimeout(() => {
    trail.remove();
  }, 500);
}

// Trigger on mouse move
document.addEventListener("mousemove", function(event) {
  createTrail(event.pageX, event.pageY);
});

// Trigger on mouse click
document.addEventListener("click", function(event) {
  createTrail(event.pageX, event.pageY);
});