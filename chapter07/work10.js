// コンストラクタ関数が定義されています
function Triangle( base, height ) {
    this.base = base;
    this.height = height;
    this.getArea = function() {
       return (this.base * this.height) / 2; 
    };
}

// コンストラクタ関数を利用してオブジェクトを作成
var t1 = new Triangle(4,5);
// 「getArea」メソッドを呼び出す

