const palindromes = function (string) {
    let normal = string
    .toLowerCase()
    .replace(/[^a-z]/g, "");
    let reverse = normal
        .split("")
        .reverse()
        .join("");
    return normal === reverse;
};

// Do not edit below this line
module.exports = palindromes;
