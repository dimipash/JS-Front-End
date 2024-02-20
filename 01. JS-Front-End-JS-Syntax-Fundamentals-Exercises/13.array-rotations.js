function arrayRotations(numbers, rotations) {
    rotations %= numbers.length;

    for (let index = 0; index < rotations; index++) {
        let firstNum = numbers.shift();
        numbers.push(firstNum);
    }
    console.log(numbers.join(' '));
}

arrayRotations([2, 4, 15, 31], 5);