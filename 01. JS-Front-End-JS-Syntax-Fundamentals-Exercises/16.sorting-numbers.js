function sortingNumbers(numbers) {
    let sorted = [...numbers].sort((a, b) => a - b);
    let step = 0;
    let result = []
    while (sorted.length > 0) {
        
        if (step % 2 === 0) {
            let firstEl = sorted.shift();
            result.push(firstEl);
        } else {
            let lastEl = sorted.pop();
            result.push(lastEl);
        }
        step++;
    }

    return result;
}

console.log(
    sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));