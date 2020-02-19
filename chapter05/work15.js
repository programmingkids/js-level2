// ここに関数を作成します
function getEvenTotal( data ) {
    var total = 0;
    for( var i in data ) {
        if( data[i] % 2 == 0 ) {
            total += data[i];
        }
    }
    return total;
}

// これ以降は修正してはいけません
var numbers = [2,5,7,8,6,9];
var r = getEvenTotal( numbers );
console.log( r );
