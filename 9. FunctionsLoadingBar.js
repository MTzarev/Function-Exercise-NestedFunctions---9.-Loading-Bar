function loadingBar(num) {
    let symbol1 = "%";
    let symbol2 = ".";
    let count = num / 10;
    let symbol1Count = 0;
    let pointCount = count - symbol1Count;
    function procentageSymbol(num) {

        if (count >= 1 && count <= 10) {
            return symbol1.repeat(count);
        } else {
            return `Invalid Operation!`;
        }
    }

    for (let i = 1; i <= procentageSymbol(num).length; i++) {
        symbol1Count++;
    }


    function pointSymbol(num) {

        if (count >= 1 && count <= 10) {
            return symbol2.repeat(10 - symbol1Count);
        }
    }
    if (num < 100) {
        console.log(`${num}% [${procentageSymbol(num)}${pointSymbol(num)}]`);
        console.log(`Still loading...`);
    } else if (num === 100) {
        console.log(`${num}% Complete!`);
        console.log(`[${procentageSymbol(num)}]`);
    }

}
//loadingBar(30);
//loadingBar(50);
loadingBar(100);