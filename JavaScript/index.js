function greet (name, callback ) {
    console.log(name);
    callback();
};


function callback( ) {
    console.log("this is an example for the callback function");
};

greet("champ", callback );