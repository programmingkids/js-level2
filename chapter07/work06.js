var student = {
    name     : "Anna",
    English  : 90,
    Math     : 95,
    Science  : 88,
    History  : 97,
};

// 連想配列からキーと値を表示する
for( var i in student ) {
    console.log( i + " ==> " + student[i]);
}
