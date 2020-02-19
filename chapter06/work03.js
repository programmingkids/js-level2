var person = {
    name : "Yamada",
    age : 15,
    hobby : "Tennis",
    sayHello : function() {
        console.log("I am " + this.name);
    },
    sayAge : function() {
        console.log("I am " + this.age + " years old");
    },
};

person.sayHello();
person["sayAge"]();
