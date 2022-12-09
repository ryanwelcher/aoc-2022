export const parseInput = (input) => input.split('\n')
const alphabet = [
  'a','b','c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

const divideIntoCompartments = (input) => {
  return [
    input.slice(0, input.length / 2).split(''),
    input.slice(input.length / 2, input.length).split('')
  ]
}

const tallyPriorities = (priorities) => {
  let tally = 0;
  for (let i = 0; i < priorities.length; i++) {
    tally += Number(alphabet.indexOf(priorities[i])) + 1;
  }
  return tally;
}


export const part1 = (input) => {
  const priorities = [];
  // loop through all rucksacks
  for (let i = 0; i < input.length; i++) {
    const [compOne, comp2] = divideIntoCompartments(input[i]);
    for (let i = 0; i < compOne.length; i++) {
      if ( comp2.includes( compOne[i] ) ) {
        priorities.push(compOne[i])
        break;
      }
    }
  }
  return tallyPriorities(priorities)
}

export const part2 = (input) => {
  const priorities = [];
  for (let i = 0; i < input.length; i += 3) {
    for ( let j = 0; j < input[i].length; j++) {
      if ( input[i+1].includes(input[i][j] ) && input[i+2].includes(input[i][j] ) ) {
        priorities.push(input[i][j])
        break;
      }
    }
  }
  return tallyPriorities(priorities);
}
