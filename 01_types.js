function camelize(str) {
    return str.split('-').map(
        (b,e) => {
            if(e>0){
            b = b.split('');
            b[0] = b[0].toUpperCase();
            let c = b.join('')
            //console.log(c)
            return c}else{return b}
        }
    ).join('');
}


console.log(camelize('class-div-map'));
