//zad1
function showFibonacciNumber(n) { //first element index is 0 not 1
    var current;
    var previous = 1;
    var add = 0;

    if(n===0) {
        console.log(0);
    } else if(n===1){
        console.log(1);
    } else {
        for (let i = 0; i < n; i++) {
            current = previous + add;
            add = previous;
            previous = current;
        }
        console.log(n + "th Fibonacci element = " + current);
    }
}
console.log("Zadanie 1");
showFibonacciNumber(0)
showFibonacciNumber(5)
showFibonacciNumber(10)

//zad2
function isItAPalindrome(word){
    var isIt = true;
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        if(word[i] < "a" || word[i] > "z"){
            word = word.replace(word[i], "");
            i--;
        }
    }
    for (let i = 0; i < word.length; i++) {
        if(word[i] !== word[word.length - 1 - i]){
            isIt = false;
        }
    }

    return isIt;
}
console.log("Zadanie 2");
console.log(isItAPalindrome("tatarak"));
console.log(isItAPalindrome("kajak"));
console.log(isItAPalindrome("Nowy Targ, góry, Zakopane - na pokazy róg, graty won"));
//zad3
console.log("Zadanie 3");
function getType(value){
    return typeof value;
}

console.log("8 is a " + getType(8));
console.log("8.5 is a " + getType(8.5));
console.log("\"Steve Irwin\" is a " + getType("Steve Irwin"));
console.log("true is a " + getType(true));
console.log("null is a " + getType(null));
console.log("[1,2,3] is a " + getType([1,2,3]));
console.log("function(){} is a " + getType(function(){}));
//zad4
console.log("Zadanie 4");
function amountToCoins(amount, nominals) {
    const result = new Map();
    let coinIndex = 0;
    let occurrences = 0;
    while (amount > 0) {
        if(amount >= nominals[coinIndex]){
            occurrences++;
            amount -= nominals[coinIndex];
            //console.log("Amount " + amount + " occurrences " + occurrences);
            if (amount === 0) {
                result.set(nominals[coinIndex], occurrences);

                while (nominals.length > coinIndex + 1) {
                    result.set(nominals[coinIndex + 1], 0);
                    coinIndex++;
                }
            }
        } else {
            result.set(nominals[coinIndex], occurrences);
            occurrences = 0;
            coinIndex++;
            //console.log("ELSE | nominal = " + nominals[coinIndex] + " | amount = " + amount);
        }
    }
    return result;
}

let result = amountToCoins(46, [25, 10, 5, 2, 1]);
console.log("\nCoins for 46:");
result.forEach((value, key) => console.log(key + " coin: " + value + "x"));
result = amountToCoins(144, [25, 10, 5, 2, 1]);
console.log("\nCoins for 144:");
result.forEach((value, key) => console.log(key + " coin: " + value + "x"));