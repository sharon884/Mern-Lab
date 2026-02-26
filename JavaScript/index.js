let movies = [
  { name: "Inception", ratings: [5, 4, 5, 4] },
  { name: "Interstellar", ratings: [5, 5, 4, 5] },
  { name: "Tenet", ratings: [3, 4, 3] }
];

let obj = {};

for ( let data of movies ) {
   if ( !obj[data.name] ) {
       obj[data.name] = obj[data.name];

   };
  //  console.log(data.ratings)?

  let avg = 0;
   let sum = 0;

  for ( let num of data.ratings ) {
       sum = sum + num;
  };

  avg = sum / data.ratings.length;
  obj[data.name] = avg.toFixed(2);


};


console.log(obj)