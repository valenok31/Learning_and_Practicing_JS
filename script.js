let taskText = "Advertisers study how people learn so that they can 'teach' them to respond to their advertising. They want us to be interested, to try something, and then to do it again. These are the elements of learning: interest, experience and repetition. If an advert can achieve this, it is successful. If an advert works well, the same technique can be used to advertise different things. So, for example, in winter if the weather is cold and you see a family having a warming cup of tea and feeling cosy, you may be interested and note the name of the tea ... Here the same technique is being used as with the cool, refreshing drink.";
let rightRow = document.getElementById('rightRow');
let leftRowBox = document.getElementById('leftRowBox');
let boxErrors = document.getElementById('boxErrors');
rightRow.innerHTML = taskText;
let taskTextRight = rightRow.innerHTML;
taskTextRight = taskTextRight.split('');
let arr = [];
let numberErrors = 0;
let numberLetters = 0;


const deleteRight = function (event) {
    if (event.key === taskTextRight[0]) {
        numberLetters += 1;
        if (numberLetters === 1) {
            timer(true);
        }
        calculationError(numberErrors, numberLetters);
        arr.push(taskTextRight.shift());
        if (arr.length > 100) {
            arr.shift();
            leftRowBox.innerHTML = arr.join('');
        } else {
            leftRowBox.innerHTML = arr.join('');
        }
        rightRow.innerHTML = taskTextRight.join('');
    } else {
        if (event.key !== 'Shift') {
            document.body.style.backgroundColor = 'red';
            setTimeout(() => {
                document.body.style.backgroundColor = '';
                if (numberErrors <= numberLetters) numberErrors += 1;
                calculationError(numberErrors, numberLetters);
            }, 50)
        }
    }
}

function calculationError(numberErrors, numberLetters) {
    let calculation = (100 - numberErrors * 100 / (numberLetters + 1));
    boxErrors.innerHTML = calculation.toFixed(1) + '% accuracy';
}

document.addEventListener("keydown", deleteRight)

function timer(startTimer = false) {
    let timeInterval = 60;
    if (startTimer) {
        let start = Date.now();
        let timerId = setInterval(() => {
            let end = Date.now();
            document.getElementById('tim').innerHTML = ((end - start) / 1000).toFixed(1);
        }, 100)
        setTimeout(() => {
            clearInterval(timerId);
            document.removeEventListener("keydown", deleteRight)
            document.getElementById('benchmark').innerHTML = (numberLetters * 60 / timeInterval + ' characters/minute');
        }, timeInterval * 1000)
    }
}

