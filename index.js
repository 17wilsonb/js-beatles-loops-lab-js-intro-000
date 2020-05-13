function theBeatlesPlay(musicians, instruments){
  var array = new array();
  for(let i = 0; i < musicians.length; i++){
    for(let j = 0; j < instruments.length; j++){
      array.push(`${musicians[i]} plays ${instruments[j]}`);
    }
  }
  return array;
}

function johnLennonFacts(facts){
  var array = new array();
  let count = 0;
  while (count < facts.length){
    array.push(facts[count] + '!!!');
    count++;
  }
  return array;
}

function iLoveTheBeatles(num){
  var array = new array();
  do {
    array.push(`I love the Beatles!`);
    num++;
  } while (num < 15);
  return array;
}
