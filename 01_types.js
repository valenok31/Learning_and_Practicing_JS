function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = (prompt) => this.value += prompt
}


let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(1); // прибавит ввод prompt к текущему значению
accumulator.read(1); // прибавит ввод prompt к текущему значению

console.log(accumulator.value); // выведет сумму этих значений


