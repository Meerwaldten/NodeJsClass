const rocks = [
    { name: "Pet rock", age: 2},
    { name: "Led Zeppelin", age: 50},
    { name: "Dwayne Johnson", age: 47}, 
    { name: "Neptune", age: 100_000_000}
]
//console.log(rocks);

// loop methods: map, filter, find, reduce, sort, forEach.

//console.log( { ...rocks[0] } );


const rocksAgedOneyear = rocks.map(rock => ({...rock, age: rock.age+1}));
//console.log(rocksAgedOneyear);


const evenAgedRocks = rocks.filter(rock => rock.age % 2 === 0);
//console.log(evenAgedRocks);

