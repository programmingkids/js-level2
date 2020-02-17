var colors = [["red","pink"],["blue","green"]];

// 1次元目のインデックスが「2」に2次元目の配列を追加します
colors[2] = ["black","white"];

console.log( colors[0][0] );
console.log( colors[0][1] );
console.log( colors[1][0] );
console.log( colors[1][1] );
console.log( colors[2][0] );
console.log( colors[2][1] );
