function Person (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHello = function() {
    console.log("I am " + this.name);
};
Person.prototype.sayAge = function() {
    console.log("I am " + this.age + " years old");
};

var person1 = new Person("Yamada", 15);
person1.sayHello();
person1.sayAge();
