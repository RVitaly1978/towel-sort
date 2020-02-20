
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if ((arguments.length === 0)
        || (matrix.length === 0)) {
        return [];
    }

    const arr = [];

    matrix.forEach((element, index) => {
        if (index % 2 !== 0) {
            const reversedElement = [...element].reverse();
            return arr.push(...reversedElement);
        }

        return arr.push(...element);
    });

    return arr;
}
