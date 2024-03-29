function toChineseNumeral(num) {
    let numerals = {
        "-": "负",
        ".": "点",
        0: "零",
        1: "一",
        2: "二",
        3: "三",
        4: "四",
        5: "五",
        6: "六",
        7: "七",
        8: "八",
        9: "九",
        10: "十",
        100: "百",
        1000: "千",
        10000: "万"
    };
    let negativ = false;
    if (num < 0) {
        num = -num;
        negativ = true;
    }
    let but = String(num).split('.');


    let arr_num = String(but[0]).split('');

    if (but[0] == 10) {
        arr_num = [but[0]];
    }

    let arr_dot = String(but[1]).split('');

    let num_chin = [];
    let dot_chin = [];
    for (let i = 0; i < arr_num.length; i++) {
        if (num_chin[num_chin.length - 1] === "零" && numerals[arr_num[i]] === "零") {
            //console.log(num_chin[num_chin.length - 1]);
        } else {
            num_chin.push(numerals[arr_num[i]]);
        }

        if (10 ** (arr_num.length - i - 1) !== 1 && num >= 20 && arr_num[i] != 0) {
            num_chin.push(numerals[10 ** (arr_num.length - i - 1)]);
        }
    }
    if (but.length > 1) {
        for (let i = 0; i < arr_dot.length; i++) {
            dot_chin.push(numerals[arr_dot[i]]);
        }
        dot_chin.unshift("点")
    }

    if (num_chin[num_chin.length - 1] === "零") {
        num_chin.length = num_chin.length - 1;
    }
    if (num_chin.length === 0) {
        num_chin = ["零"];
    }
    if(but[0]<20 && but[0]>10){
        num_chin.length=0;
        num_chin.push("十");
        num_chin.push(numerals[but[0]-10]);
    }



    if (negativ) {
        num_chin.unshift("负");
    }

    return num_chin.join('').concat(dot_chin.join(''));
    //console.log(dot_chin.join(''))

}

console.log(toChineseNumeral(54))