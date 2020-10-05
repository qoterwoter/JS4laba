function takeWord() {
    let word = prompt('Введите слово палиндром:', '').trim();
    let reversedWord = word.split('').reverse().join('').trim();
    if (reversedWord == word) {
        alert('Введеное фраза(слово) является палиндромом!');
    } else {
        alert('Введеное фраза(слово) не является палиндромом, попробуйте снова');
        takeWord();
    }
}

takeWord();