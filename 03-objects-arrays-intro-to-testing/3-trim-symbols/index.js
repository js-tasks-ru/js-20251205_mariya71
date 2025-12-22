/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  // Проверка входных параметров
  if (!string || size <= 0) {
    return '';
  }

  if (typeof size === "undefined" || size >= string.length) {
    return string;
  }

  let result = '';
  let currentChar = '';
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    // Если символ совпадает с предыдущим
    if (char === currentChar) {
      count++;
      // Добавляем символ, если еще не превысили лимит
      if (count <= size) {
        result += char;
      }
    } else {
      // Начинаем новую последовательность
      currentChar = char;
      count = 1;
      result += char;
    }
  }

  return result;
}
