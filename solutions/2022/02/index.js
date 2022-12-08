export const parseInput = (input) => input.split('\n')

const moves =  {
  A: 0, // Rock
  B: 1, // Paper
  C: 2, // Scissors
  X: 0, // Rock
  Y: 1, // Paper
  Z: 2, // Scissors
}

const possibleOutcomes = {
  'lose': 'X',
  'tie': 'Y',
  'win': 'Z',
  'X': 'lose',
  'Y': 'tie',
  'Z': 'win'
}


const getHandScore = ( theirMove, myMove ) => {
  return handResult( moves[theirMove], moves[myMove] ) + (moves[myMove] + 1 );
}

const handResult = (theirMove, myMove) => {
  // I win.
  if ( (theirMove + 1) % 3  === myMove ) {
    return 6
  }
  // Draw
  if ( theirMove === myMove ) {
    return 3
  }
  // I lose;
  return 0
}

const determineMyMove = ( theirMove, outcome ) => {

  const possibleMoves = ['A', 'B', 'C'];
  // Am I supposed to win, lose or tie?
  const expectedOutcome = possibleOutcomes[outcome];
  const indexOfTheirMove = possibleMoves.indexOf(theirMove);
   // Get my move to match the expected result.
  if ( expectedOutcome === 'tie' ) {
    return theirMove;
  }

  if ( expectedOutcome === 'win' ) {
  
    const myIndexofMyMove = ( indexOfTheirMove === 2 ) ? 0: indexOfTheirMove + 1;
    return possibleMoves[myIndexofMyMove]
  }

  if ( expectedOutcome === 'lose' ) {
    const myIndexofMyMove = ( indexOfTheirMove === 0 ) ? 2: indexOfTheirMove - 1;
    return possibleMoves[myIndexofMyMove]
  }
}

export const part1 = (input) => {
  let score = 0;
  input.map( hand => {
    const [theirMove, myMove] = hand.split(' ');
    score += getHandScore(theirMove, myMove)
  })  
  return score;
}

export const part2 = (input) => {
  let score = 0;
  input.map( hand => {
    const [theirMove, expectedMove] = hand.split(' ');
    const myMove = determineMyMove(theirMove, expectedMove);
    score += getHandScore(theirMove, myMove);
  } )
  return score;
}
