
const generateId = (() => (id = 0, () => id++))();

const birds = []
const bird1 ={id: generateId(), name: "Sparrow"};
const bird2 ={id: generateId(), name: "Eagle"};
const bird3 ={id: generateId(), name: "Falcon"};
birds.push(bird1, bird2, bird3);



module.exports=generateId;
module.exports=birds;