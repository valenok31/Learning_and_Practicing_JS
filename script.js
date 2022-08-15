let taskText = [];
taskText[0] = "Advertisers study how people learn so that they can 'teach' them to respond to their advertising. They want us to be interested, to try something, and then to do it again. These are the elements of learning: interest, experience and repetition. If an advert can achieve this, it is successful.";
taskText[1] = "If an advert works well, the same technique can be used to advertise different things. So, for example, in winter if the weather is cold and you see a family having a warming cup of tea and feeling cosy, you may be interested and note the name of the tea... Here the same technique is being used as with the cool, refreshing drink.";
taskText[2] = "If advertisements are to he learned, there is a need for lots of repetition. But advertisers have to be careful because too much repetition can result in consumer tiredness and the message may fall on'deal ears'.";
taskText[3] = "Consumers learn to generalize from what they have learned. So advertisers sometimes copy a highly successful idea that has been well learned by consumers. For example, the highly successful 'Weston Tea Country' advertising for different tea has led to 'DAEWOO Country' for automobile dealers and 'Cadbury Country' for chocolate bars.";
taskText[4] = "Let's imagine... You're watching TV. It's a hot evening: You feel thirsty. You see an advert for a refreshing drink. You see people looking cool and relaxed. You notice the name of the refreshing drink because you think it could be useful for you to satisfy your thirst.";
taskText[5] = "There are four types of schools in the English and Welsh education system - nursery. primary, secondary and private schools. Scotland has its own education system, which is different.";
taskText[6] = "In the United States, education is mainly the responsibility of state and local governments, not the national government. The amount of money spent on education differs from state to state. The subjects studied also differ a little. The school year usually runs from September to June.";
taskText[7] = "At the high school level, there are some specialized schools. They include schools that emphasize vocational subjects like business or auto mechanics. Most high schools are general schools. High school students are often involved in the non-academic activities that their school offers -for example, in drama clubs, sports teams, or the school newspaper.";
taskText[8] = "Birmingham developed engineering, chemicals, electronics and car manufacture. Cambridge is famous for software engineering (making programs for computers) and bio-chemical and bio-genetic products. Cattle-farming is the speciality of the west of England, Northern Ireland and Scotland.";
taskText[9] = "The original base of British industry was coal-mining, iron and steel and textiles. Today the most productive sectors include high-tech industries, chemicals, finance and the service sectors, especially banking, insurance and tourism.";


let rightRow = document.getElementById('rightRow');
let leftRowBox = document.getElementById('leftRowBox');
let boxErrors = document.getElementById('boxErrors');
rightRow.innerHTML = taskText[Math.floor(Math.random()*10)];
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

