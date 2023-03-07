function createPlayer() {
  let score = 0;

  function add(amount) {
    score = score + amount;
  }

  function report(label) {
    console.log(label, score);
  }
  function getScore() {
    return score;
  }

  return {
    score,
    add,
    report,
    getScore,
  };
}

let player1 = createPlayer();
let player2 = createPlayer();

console.log(player1);
// console.log(player1.add);

player1.add(1);
player1.add(100000);

player2.add(2);

console.log("score:", player1.score);
console.log("getScore:", player1.getScore());

//   console.log('2:', player2.score);

player1.report("report:");
//   player2.report('4:');
