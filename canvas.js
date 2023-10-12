String.method('deentityify', function () {

let entity = {
    quot: '"',
    lt: '<',
    gt: '>'
};

return function () {
    return this.replace(/&([A&;]+);/g,
        function (a, b) {
            let r = entity[b];
            return typeof r === 'string' ? r : a;
        }
    );
};
}());