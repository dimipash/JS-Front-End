
function wordsUppercase(words) {
    const regexExp = /\b\w+\b/g;
    let validWords = [];
    let matches = words.matchAll(regexExp);
  
    for (const match of matches) {
      validWords.push(match[0].toUpperCase());
    }
  
    console.log(validWords.join(", "));
  }