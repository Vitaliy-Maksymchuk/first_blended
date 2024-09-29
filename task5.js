// Написати функцію extractBetween, яка приймає три аргументи:
// рядок str, підрядок start і підрядок end.Функція повинна повертати частину рядка
// між першим входженням підрядка start і підрядка end.Якщо один з підрядків не знайдено,
//   функція повинна повертати порожній рядок.

// Приклади використання:
function extractBetween(str, start, end) {
    const startIndex = str.indexOf(start)
    if (startIndex === -1) {
        return ""
    }
    const endIndex = str.indexOf(end)
    if (endIndex === -1) {
        return ""
    }
    return str.slice(startIndex + start.length, endIndex)
}


console.log(extractBetween('Hello, [world]!', '[', ']')) // "world"
console.log(extractBetween('Hello, [world]!', '{', '}')) // ""
console.log(extractBetween('Hello, {world}!', '{', '}')) // "world"
