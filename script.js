let taskText = "Advertisers study how people learn so that they can 'teach' them to respond to their advertising. They want us to be interested, to try something, and then to do it again. These are the elements of learning: interest, experience and repetition. If an advert can achieve this, it is successful. If an advert works well, the same technique can be used to advertise different things. So, for example, in winter if the weather is cold and you see a family having a warming cup of tea and feeling cosy, you may be interested and note the name of the tea ... Here the same technique is being used as with the cool, refreshing drink.";
let rightRow = document.getElementById('rightRow');
let leftRowBox = document.getElementById('leftRowBox');
let boxErrors = document.getElementById('boxErrors');
rightRow.innerHTML = taskText;
let taskTextRight = rightRow.innerHTML;
taskTextRight=taskTextRight.split('');
let arr = [];
let numberErrors=0;
let numberLetters=0;



const deleteRight = function (event) {
    //if(event.key===taskTextRight[0]){
    if(true){
        numberLetters +=1;
        calculationError(numberErrors, numberLetters);
   arr.push(taskTextRight.shift());
   if(arr.length>100){
       arr.shift();
       leftRowBox.innerHTML = arr.join('');
   }else{
       leftRowBox.innerHTML = arr.join('');
   }
    rightRow.innerHTML = taskTextRight.join('');
    }else{
        if(event.key!=='Shift'){
            document.body.style.backgroundColor='red';
            setTimeout(()=>{
                document.body.style.backgroundColor='';
                numberErrors+=1;
                calculationError(numberErrors, numberLetters);
                },50
            )
           // alert(event.key)
        }
    }
}

function calculationError (numberErrors, numberLetters){
    boxErrors.innerHTML = Math.round((100-numberErrors*100/(numberLetters+1))*100)/100;
}

document.addEventListener("keydown", deleteRight)


