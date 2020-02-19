// ここにオブジェクトを作成する
var player = {
    name  : "ドナルド",
    job   : "勇者",
    level : 5,
    fight : function() {
        console.log( this.name + "は" + this.job　+"として戦った");
    },
    getLevel : function() {
        console.log( this.name + "のレベルは" + this.level);
    },
};


// これ以降は修正してはいけません
player.fight();
player.getLevel();
