function stringSubstring(word, text) {
    let wordLowerCase = word.toLowerCase();
    let textArr = text.split(' ');

   for (const text of textArr) {
    if (text.toLowerCase() === wordLowerCase) {
        return word
    }
   }

   return `${word} not found!`;
}

    
