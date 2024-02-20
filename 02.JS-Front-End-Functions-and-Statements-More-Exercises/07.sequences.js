function sequences(arrays) {
    const setArrays = new Set();
    arrays.forEach(arr => {
        const parsedArr = JSON.parse(arr);
        const sortedArr = parsedArr.sort((a, b) => b - a);
        const newArr = JSON.stringify(sortedArr);
        setArrays.add(newArr);
    });

    let result = []

    for (const arr of arrays) {
        let currentArray = JSON.parse(arr).sort((a, b) => b - a)
        if (setArrays.has(JSON.stringify(currentArray))){
            result.push(currentArray)
            setArrays.delete(JSON.stringify(currentArray))
        }
    }

    result.sort((a, b) => a.length - b.length).forEach(arr => console.log(`[${arr.join(', ')}]`))

}