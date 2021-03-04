let person = {
    name: "Nick",
    surName: "Ferrari",
    age: 24,
    location: "Wrexham",
}

const getPerson = () => {
    return person;
}

console.log(getPerson());

module.exports = getPerson;