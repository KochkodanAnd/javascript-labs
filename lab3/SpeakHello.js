(function(window){
    var speakWord = "Hello";
let helloSpeakWord={};

helloSpeakWord.speak = function (name) {
  console.log(speakWord + " " + name);
}

window.helloSpeakWord=helloSpeakWord;

})(window);
