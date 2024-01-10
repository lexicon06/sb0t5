print(0, "country.js country has been loaded correctly");

var json = File.load("countryCodes.json");

CheckCountry = function (u) {
  var req = new HttpRequest();
  req.src = "http://api.country.is/" + u.externalIp;
  req.oncomplete = function (e) {
    if (e) {
      print(
        "\x0315" +
          u.name +
          " \x0313~ \x0315" +
          JSON.parse(json)[JSON.parse(this.page).country]
      );
    }
  };
  req.download(u);
};

onJoin = function (u) {
  CheckCountry(u);
};


//made by lexicon06 for sb0t5