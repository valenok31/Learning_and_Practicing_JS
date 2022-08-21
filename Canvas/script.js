let s = 150;
let z = 75;
let ter;
let flag = true;
let canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");
context.lineWidth = 2;
context.lineHeight = 2;
renderX(s, z);

function renderX(x, y) {
    context.beginPath();
    context.scale(1,1);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.arc(x, y, 3, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
    context.strokeStyle = "red";
    context.stroke();
}


document.addEventListener("keydown", deleteRight)
document.addEventListener("keyup", deleteLeft)

function deleteRight(event) {
    if (flag) {
        ter = setInterval(() => {
            if (event.key === 'ArrowRight') {
                s += 1
            }
            if (event.key === 'ArrowLeft') {
                s -= 1
            }
            if (event.key === 'ArrowDown') {
                z += 1
            }
            if (event.key === 'ArrowUp') {
                z -= 1
            }
            renderX(s, z);
        }, 1);
        flag = false;
    }
}

function deleteLeft() {
    clearInterval(ter);
    flag = true;
}





