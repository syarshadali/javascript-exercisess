const repeatString = function(string, num) {
    if (num < 0) console.log("ERROR");
    let str = "";
    for (let i = 0; i < num; i++) {
        str += string;
    }
    console.log(str);
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
