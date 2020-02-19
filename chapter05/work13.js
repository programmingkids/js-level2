function getTotal( data ) {
    var total = 0;
    for( var i in data ) {
        total += data[i];
    }
    return total;
}

var numbers = [5,7,2,6];
var answer = getTotal( numbers );
console.log( answer );
