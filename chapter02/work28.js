var names = [['山田','鈴木'],['佐藤','田中']];

for( var i in names ) {
    for( var j in names[i] ) {
        console.log( names[i][j] );
    }
}
