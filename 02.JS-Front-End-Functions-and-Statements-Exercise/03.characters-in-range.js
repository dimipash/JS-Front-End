function characterInRange(firstChar, secondChar) {
    const getFirstCharAsciiCode = (char) => char.charCodeAt(0);
    let firstCharAscii = getFirstCharAsciiCode(firstChar);
    let secondCharAscii = getFirstCharAsciiCode(secondChar);

    let minAscii = Math.min(firstCharAscii, secondCharAscii);
    let maxAscii = Math.max(firstCharAscii, secondCharAscii);
    let chars = [];

    for (let asciiCode = minAscii + 1; asciiCode < maxAscii; asciiCode++) {
        chars.push(String.fromCharCode(asciiCode));
    }
    return chars.join(' ');
}

console.log(
    characterInRange(
        'a',
        'd'
    )
)