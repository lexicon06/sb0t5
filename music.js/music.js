print(0, "music.js loaded successfully");


function onPersonalMessage(userobj, msg) {
    if (IsListeningMusic(msg)) {
        print(0, "\x0314" + userobj.name + " \x0315is now listening \x0314" + msg.substr(1).replace(" - ", "\x0301 ♪ \x0314"));
    }
    return true;
}


function IsListeningMusic(str){
    return str[0] == "\x07";
}

//made by lexicon06 for sb0t5