var names = ['Kamron', 'Amber', 'Ari', 'Colin', 'Stephanie', 'Kira', 'Max'];
var matches = ['Kamron', 'Amber', 'Ari', 'Colin', 'Stephanie', 'Kira', 'Max'];
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
shuffle(matches);
for(var i = 0; i < names.length; i++){
    console.log(names[i] + ' <-> ' + matches[i]);
}
