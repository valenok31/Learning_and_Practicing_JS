function func(){
    var a = 0;
    return function(){
        return a++;
    }
}



console.log(func()());
