const POSITIONS = {
    1: 'st',
    2: 'nd',
    3: 'rd'
}

const covertToOrdinalNubmer = num => {
    if (num < 0) {
        throw ("number is negative")
    }
    if (isNaN(num)) {
        throw (`cannot convert ${num} to ordinal number`)
    }
    if (num !== parseInt(num, 10)) {
        throw ("cannot convert float number");
    }

    return num % 10 in POSITIONS ? `${num}${POSITIONS[num % 10]}` : `${num}th`;
}

module.exports = {
    covertToOrdinalNubmer
};