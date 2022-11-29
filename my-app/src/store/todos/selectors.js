/**
 * Функция достанет из стора переменную todos
 * @param {*} state - состояние
 * @returns {array} массив c объектами или пустой массив
 */
export const getTodos = (state) => state?.todos?.todos || [];