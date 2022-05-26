
// сделать информацию о текущем пользователе глобальной, для предоставления доступа всем скриптам
globalThis.currentUser = {
    name: "John"
};

// где угодно в коде
console.log(currentUser.name); // John

// или, если у нас есть локальная переменная с именем "currentUser",
// получим её из window явно (безопасно!)
console.log(globalThis.currentUser.name); // John