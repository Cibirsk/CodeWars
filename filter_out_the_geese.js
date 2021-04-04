function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let outGeese = birds;
  for(let i=0;i<outGeese.length;i++){
      for(let j=0;j<geese.length;j++){
          if(geese[j] === outGeese[i]){
              outGeese.splice(i,1);
          }
      }
  }
  return outGeese;
  // return an array containing all of the strings in the input array except those that match strings in geese
};

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));
//expected: ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]