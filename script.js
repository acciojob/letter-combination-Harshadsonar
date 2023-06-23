function letterCombinations(digits) {

    const digitToLetters = {
        '0': '0',
        '1': '1',
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    function generateCombinations(currentIndex, currentCombination, combinations) {
        if (currentCombination.length === digits.length) {
            combinations.push(currentCombination);
            return;
        }

        const letters = digitToLetters[digits[currentIndex]];

        for (let i = 0; i < letters.length; i++) {
            const letter = letters[i];

            generateCombinations(currentIndex + 1, currentCombination + letter, combinations);
        }
    }

    const combinations = [];
    if (digits.length > 0) {
        generateCombinations(0, '', combinations);
    }
    return combinations.sort();
}