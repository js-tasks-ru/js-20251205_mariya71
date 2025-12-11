/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const newArr = [...arr];

  return newArr.sort(function(a, b) {
    return param === 'asc'
      ? a.localeCompare(b, 'ru', { sensitivity: 'case', caseFirst: 'upper' })
      : b.localeCompare(a, 'ru', { sensitivity: 'case', caseFirst: 'upper' });
  });
}
