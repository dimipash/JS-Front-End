function makeADictionary(input){
    dictionary = {};
    for (const line of input) {
        let termObj = JSON.parse(line);
        let [key, value] = Object.entries(termObj)[0]
        dictionary[key] = value;
    }
    let sortedDict = Object.entries(dictionary).sort((termA, termB) => {
        let [wordA, _defA] = termA;
        let [wordB, _defB] = termB;
        return wordA.localeCompare(wordB)
    })

    for (const [word, def] of sortedDict) {
        console.log(`Term: ${word} => Definition: ${def}`)
    }
} 