print(0, "scribble.js has been loaded correctly");

var Commands = ["scribble", "foto"];
var LevelScribble = 0;

function onCommand(userobj, command, target, args) {
  if (userobj.level >= LevelScribble) {
    for (var i = 0; i < Commands.length; i++) {
      if (command.toLowerCase().substring(0, Commands[i].length) == Commands[i]) {
        var fotoScribble = new Scribble();
        fotoScribble.src = command.substring(Commands[i].length + 1);
        fotoScribble.oncomplete = handleScribble;
        fotoScribble.download(`\x0314Scribble sent by ${userobj.name}\x06\x07`);
      }
    }
  }
}

function handleScribble(e) {
  if (e) {
    var Image = this;
    Users.local(function (i) {
      i.scribble(Image);
    });
    print(this.arg);
  } else {
    print(0, "\x0314Sorry bad scribble response.");
  }
}

//made by lexicon06 for sb0t5