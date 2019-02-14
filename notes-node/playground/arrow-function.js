//examples or arrow functions
var square = (x) =>{
    return x = x*x;
};
console.log(square(9));

var square_a = (x) =>x*x;
console.log(square_a(9));

var square_b = x=>x*x;
console.log(square_b(9));

var user = {
    name:'Miguel',
    sayHiNotWorking: () => {
        console.log(arguments); //not works with argument keyword, use instad a regular function
        console.log(`Hi, I'm ${this.name}`); //not works with this keyword , use instad a regular function
    },
    sayHiWorking (){
        console.log(arguments);
        console.log(`Hi, I'm ${this.name}`);
    }
};

user.sayHiNotWorking();
user.sayHiWorking(1,2,3,4);




