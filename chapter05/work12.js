function calc() {
    var total = 0;
    for( var i = 1; i <= 10; i++ ) {
        total += i;
    }
    return total;
}

var result = calc();
console.log( result );
