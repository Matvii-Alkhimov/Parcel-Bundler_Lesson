
export function average(numbers) {
    let num = 0;
    numbers.forEach((number) => num += number);
    return num / numbers.length;
}

