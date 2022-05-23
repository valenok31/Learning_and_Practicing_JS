

    let maxArgument = function(s,f,...arr){
        console.log(s,f)
        return arr.sort((a,b)=> b-a).shift();

    }

    console.log(maxArgument(3,543,5,436,5,63,45,23,23,544))

