function greet (name, callback ) {
    console.log(name);
    callback();
};


// function callback( ) {
//     console.log("this is an example for the callback function");
// };

greet("champ", function callback (){
     console.log("this is also an example for the callback function ");
});