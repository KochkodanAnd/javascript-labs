(function(){
    
    var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];
console.log("First task (Hello / Goodbye)");
for (let i=0;i<names.length;i++) {
    
let first=names[i].charAt(0).toLowerCase();
  
  if (first==="j") {
      helloSpeakWord.speak(names[i]);
  } else {
  
    goodbyeSpeakWord.speak(names[i]);
  }
}

console.log("Gender selection");

for (let i = 0; i < names.length; i++) {

    let last = names[i].charAt(names[i].length - 1).toLowerCase();

    if (last === "a") {
        console.log(names[i] + " -> Female name");
    } else {
        console.log(names[i] + " -> Male name");
    }

}
 

})();
