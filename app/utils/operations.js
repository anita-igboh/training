const addition = (a, b) => {
    const result = a + b;
    return result;
}

const subtraction = (a, b) => {
    const result = a - b;
    return result;
}

const multiplication = (a, b) => {
    const result = a * b;
    return result;
}

const division = (a, b) => {
    const result = a/b;
    return result;
}

const operations = {
    addition,
    subtraction,
    multiplication,
    division
};
module.exports = operations;