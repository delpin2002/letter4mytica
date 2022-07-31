alert("Hai ticaaa!");
alert("Surat ini untuk kamu, dibaca yaaa!💖")

var hash = 'l3tt3r4t1c4';
var index = 3;
var guess;

while(index--) {
  guess = prompt('Tapi sebelumnya masukin password dulu ya ehe 🤭\n\nNOTE: kesempatannya cuma 3x hihi');

  if(guess === hash) {
    console.log('Password is correct');
    break;
  } else if(index > 0) {
    window.location = "thisfailed.html";
  }
}