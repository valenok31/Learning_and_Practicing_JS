function lalu (numberCard){
    //let arrNumberCard = numberCard.split('');
    let arrNumberCard = Array.from(String(numberCard), Number);
    console.log(arrNumberCard)
    let checkResult = true;
    return checkResult
}

console.log(lalu(345234))