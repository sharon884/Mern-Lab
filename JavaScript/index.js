let obj = {
  a: 10,
  b: 20,
  c: 30
};

function check ( obj ) {



for ( key in obj ) {
   if ( typeof obj[key] !== "number" ) {
    return console.log(false);
   };

};

return console.log(true);
};

check(obj)
