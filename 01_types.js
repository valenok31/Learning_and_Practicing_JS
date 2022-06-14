const obj = {
    propertyName: 'red'
}


let descriptor = Object.getOwnPropertyDescriptor(obj, 'propertyName');

console.log(descriptor)