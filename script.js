const birds = document.querySelectorAll(".bird");

console.log(birds);

let speedsX = [];
let speedsY = [];

birds.forEach((bird, index) => {
    let x = -200 ;
    let y = Math.random () * (window.innerWidth - 80);
 
    speedsX[index] = Math.random() * 2 + 1;
    speedsY[index] = Math.random() * 2 + 1;

      let direction = "right";

    const moveBird = () => {
        x += speedsX[index];
        y += speedsY[index];

        x = Math.max(-200, Math.min(window.innerWidth - 100, x));
        y = Math.max(-200, Math.min(window.innerHeight - 80, y));

        bird.style.left = x + "px";
        bird.style.top = y + "px";


        if (x >= window.innerWidth - 100 || x<= -200){
           speedsX[index] *= -1;

           if(direction == "right"){
            direction = "left";
            bird.src ="./img/left-bird.webp";
           }

           else if(direction == "left"){
            direction = "right";
            bird.src ="./img/Right-bird.webp";
           }
        }

        if(y >= window.innerHeight - 80 || y<= 0){
            speedsY[index] *= -1;
        }

        requestAnimationFrame(moveBird)

    };
    const flapWings = () => {
        bird.classList.toggle("flap")
        setTimeout(flapWings, Math.random()* 400);
    };

    moveBird();
    flapWings();
});
