let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];

let user = users.find(item => item.id == 3);
let userIndex = users.findIndex(item => item.id == 3);

console.log(user.name);
console.log(userIndex);