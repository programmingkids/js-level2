var person = {
    name:"山田", 
    age:17, 
    hobby:"tennis",
};

for ( var key in person ) {
    console.log(key + " ==> " + person[key]);
}
