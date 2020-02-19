function Person (name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log("I am " + this.name);
    };
}

var person1 = new Person("Yamada", 15);
console.log(person1.name);
console.log(person1.age);
person1.sayHello();

var person2 = new Person("Sato", 13);
console.log(person2.name);
console.log(person2.age);
person2.sayHello();
