print("\x0315banderas.js cargado correctamente\x09\x0309!!\x09.");

//otra version de pais pero menos compleja y sin banderas, guarda el pais de los usuarios conectados

//TODO make scribble method and use flags such as https://www.esportsearnings.com/images/flags/32/xx.png


function onCommand(userobj, command, target, args) {
    if (command.toLowerCase().substr(0, 6) == "paises" && userobj.level > 0) {
        Users.local(function(i) {
            if (i.pais != null && i.pais != "" && i != userobj) {
                print(userobj, "User: " + i.name + " - Location: " + i.pais);
            }
        });
    }
}


function colores() {
    var num = [1, 2, 3, 4, 5, 6, 7, 10, 12, 13];
    var color = num[Math.floor(Math.random() * num.length)];
    return ((color < 10) ? "\x030" : "\x03") + color;
}

function onJoinCheck(u) {
    u.pais = "";
    u.show = false;
    ob(u.externalIp, u);

    return true;
}

function onJoin(u){
    u.show = true;
}

function ob(ip, u) {
    gx = new HttpRequest();
    gx.src = "http://ip-api.com/json/" + ip;
    gx.utf = true;
    gx.oncomplete = function() {
        js0n(this.page, this.arg);
    }
    gx.download(u.name);
}

function js0n(string, u) {
    datos = JSON.parse(string);
    if (datos.country != null && user(u).show) {
        print(0, "\x0314" + datos.regionName + ", " + datos.city + colores() + " ⋆ \x0314" + datos.country + ".");
        user(u).pais = datos.regionName + ", " + datos.city + " - " + datos.country;
    }
}
