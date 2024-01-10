var txt = "La Caja De Pandora♥...";
var timer = new Timer();
timer.interval = 50;
var i = 0;
var temp = "";
var fx2 = 0;
var wait = 3;

timer.start();

timer.oncomplete = function () {
  for (var o = 0; o <= 3; o++) {
    if (i < txt.length) {
      temp += txt.charAt(i);
      isInt(i / 2) ? todos(temp + "|") : todos(temp);
      i++;
    }
    if (i == txt.length) {
      if (fx2 <= txt.length) {
        if (fx2 == txt.length) {
          todos("");
        } else {
          if (fx2 == 0) {
            todos(txt);
          } else {
            isInt(fx2 / 2)
              ? todos(txt.substring(0, txt.length - fx2) + "|")
              : todos(txt.substring(0, txt.length - fx2));
          }
        }
        timer.start();
      } else {
        fx2 = 0;
        i = 0;
        timer.start();
        temp = "";
      }

      fx2++;
    } else {
      timer.start();
    }
  }
};

function isInt(n) {
  return n % 1 === 0;
}

function todos(esto) {
  Users.local(function (i) {
    i.setUrl("www.google.com", esto);
  });
}
