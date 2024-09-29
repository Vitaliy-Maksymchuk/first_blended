// Написати функцію removeVowelsFromWords,
//   яка приймає рядок str і повертає новий рядок,
//     у якому з кожного слова видалені всі голосні букви.

const vowels = 'aeiouAEIOU'

function removeVowelsFromWords(str) {
    let newStr = "";

    for(let i = 0; i < str.length; i += 1) {
        if(!vowels.includes(str[i])) {
            newStr += str[i]
        } 
    } return newStr;
}

// Приклади використання:
console.log(removeVowelsFromWords('Hello, world!')) // "Hll, wrld!"
console.log(removeVowelsFromWords('JavaScript is awesome!')) // "JvScrpt s wsm!"
console.log(removeVowelsFromWords('Remove vowels from words')) // "Rmv vwls frm wrds"
