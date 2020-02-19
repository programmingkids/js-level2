// 以下のようなコンストラクタ関数があります
var Student = function(name, scores) {
    this.name = name;
    this.scores = scores;
    this.getTotalScore = function() {
        var total = 0;
        for( var i in this.scores ) {
            total += this.scores[i];
        }
        return total;
    };
};

// コンストラクタ関数を利用してオブジェクトを作成
var s1 = new Student("Anna",[90,92,82]);
var s2 = new Student("Elsa",[95,94,90]);

// メソッドを呼び出してください
console.log("=== " + s1.name + " ===");
console.log(s1.getTotalScore());
console.log("=== " + s2.name + " ===");
console.log(s2.getTotalScore());
