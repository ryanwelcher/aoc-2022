export const parseInput = (input) => input.split('\n')


const generateElfList = (input) => {
  const list = []
  let currentIndex = 0;
  for (let i = 0; i < input.length; i++) {
    if ( input[i].length ) {
      if ( ! list[currentIndex] ) {
        list.push(0);
      }
      list[currentIndex] += Number(input[i])
    } else {
      currentIndex++
    }
  }
  return list
}

const getElfWithMost = (list) => {
  // sort the list 
  const sorted = list.slice().sort((a, b) => b - a);
  const elfIndex = list.indexOf(sorted[0])
  return list[elfIndex]
}

const topThreeElves = (list) => {
  const sorted = list.slice().sort((a, b) => b - a);
  const topThree = sorted.slice(0, 3).reduce((acc, cur) => acc + cur, 0);
  return topThree;

}
export const part1 = (input) => {
  return getElfWithMost(generateElfList( input ))
}

export const part2 = (input) => {
  return topThreeElves(generateElfList( input ))
}
