(function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for( var a in names)
    {
        var firstLetter = names[a].charAt(0);
        firstLetter = firstLetter.toLocaleLowerCase();

        if (firstLetter == "j") {
            byeSpeaker.speak(names[a]);
        } else {
            helloSpeaker.speak(names[a]);
        }
    }
    window.names = names;
})(window);

