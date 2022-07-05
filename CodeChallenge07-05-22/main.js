// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// //Examples
// rowWeights([80]), [80,0]
// rowWeights([100,50]), [100,50]
// rowWeights([50,60,70,80]), [120,140]
// rowWeights([13,27,49]), [62,27]
// rowWeights([70,58,75,34,91]), [236,92]
// rowWeights([29,83,67,53,19,28,96]), [211,164]
// rowWeights([0]), [0,0]
// rowWeights([100,51,50,100]), [150,151]
// rowWeights([39,84,74,18,59,72,35,61]), [207,235]
// rowWeights([0,1,0]), [0,1]

function rowWeights(array) {
  let first = 0;
  let Sec = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    if (i % 2 === 0) {
      first += array[i];
    } else Sec += array[i];
  }
  return [first, Sec];
}

function rowWeights(array) {
  let t1 = array.filter((x, i) => i % 2 == 0).reduce((a, item) => a + item, 0);
  let t2 = array.filter((x, i) => i % 2 != 0).reduce((a, item) => a + item, 0);

  return [t1, t2];
}
