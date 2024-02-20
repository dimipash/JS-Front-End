function printAndSum(start, end) {
    let sum = 0;
    let output = [];

    for(let currentNum = start; currentNum <= end; currentNum++) {
        output.push(currentNum);
        sum += currentNum;
    }
    console.log(`${output.join(' ')}`);
    console.log(`Sum: ${sum}`);
}

