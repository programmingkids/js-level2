var data = [[2,13,5],[11,19,7]];

for( var i in data ) {
    for( var j in data[i] ) {
        if( data[i][j] >= 10) {
            console.log( data[i][j]);
        }
    }
}
