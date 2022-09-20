const testList1 = [1, 2, 3];
const testList2 = ['a','b', 'c'];

function zipList(first, second){
  const retList = [];
  for(let i = 0; i < first.length; i++){
    retList.push(first[i], second[i]);
  }
  return retlist;
}

console.log(zipList(testList2, testList1));

function zipListTheSimpleWay(first, second){
  return _.flatten(_.zip(first,second));
}

console.log(zipListTheSimpleWay(testList1,testList2));