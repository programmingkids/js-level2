// 「1」から「20」の3の倍数の合計を表示する
var total = 0;
for( var i = 1; i<= 20; i++ ) {
    if( i % 3 == 0) {
        total += i;
    }
}
console.log( total );
