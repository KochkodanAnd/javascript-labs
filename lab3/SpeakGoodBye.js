
(function(window) {
    var speakWord = "Good Bye";
let goodbyeSpeakWord={};

goodbyeSpeakWord.speak = function (name) {
  console.log(speakWord + " " + name);
}

window.goodbyeSpeakWord=goodbyeSpeakWord;

})(window);
