const adder = referenceNumber => {

    let sum = 0;

    for(let number = 0; number < referenceNumber; number++) {
        if(number % 3 === 0 || number % 5 === 0) {
            sum += number;
        }
    }

    return sum;
}

console.log(adder(10));
console.log(adder(11));