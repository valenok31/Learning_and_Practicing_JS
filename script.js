let taskText = "Advertisers study how people learn so that they can 'teach' them to respond to their advertising. They want us to be interested, to try something, and then to do it again. These are the elements of learning: interest, experience and repetition. If an advert can achieve this, it is successful. If an advert works well, the same technique can be used to advertise different things. So, for example, in winter if the weather is cold and you see a family having a warming cup of tea and feeling cosy, you may be interested and note the name of the tea ... Here the same technique is being used as with the cool, refreshing drink.";
let rightRow = document.getElementById('rightRow');
let leftRow = document.getElementById('leftRow');
rightRow.innerHTML = taskText;
let taskTextRight = rightRow.innerHTML;
taskTextRight=taskTextRight.split('');
let arr = [];


const deleteRight = function (event) {
    if(event.key===taskTextRight[0]){
   arr.push(taskTextRight.shift());
   if(arr.length>30){
       arr.shift();
       leftRow.innerHTML = arr.join('');
   }else{
       leftRow.innerHTML = arr.join('');
   }
    rightRow.innerHTML = taskTextRight.join('');
    }else{
        if(event.key!=='Shift'){
            alert(event.key)
        }
    }
}

document.addEventListener("keydown", deleteRight)


