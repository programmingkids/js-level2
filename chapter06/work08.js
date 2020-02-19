// 以下のようなコンストラクタ関数があります
function Calc(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    this.add = function() {
        return this.num1 + num2;
    };
    this.multiply = function() {
        return this.num1 * num2;
    };
}

// コンストラクタ関数を利用してオブジェクトを作成
var calc1 = new Calc(3,5);
// メソッドを呼び出してください
console.log(calc1.add());
console.log(calc1.multiply());
