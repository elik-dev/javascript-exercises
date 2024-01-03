const findTheOldest = function (people) {
    return people
        .sort((a, b) => getAge(a.yearOfBirth, a.yearOfDeath) > getAge(b.yearOfBirth, b.yearOfDeath) ? -1 : 1)[0];
};

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
