function findShortestString(arr) {
  let shortestString = arr[0]
  for(let i=1; i<arr.length;i++){
    if(arr[i].length < shortestString.length){
      shortestString = arr[i]
    }
  }
  return shortestString
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// create variable that keeps track of shortest string
// create a for loop that loops over the array
// if statement that compares the shortest string variable to the iterable
// if iterable is shorter than the shortest string than reassign variable
// return shortest string variable
// And a written explanation of your solution
