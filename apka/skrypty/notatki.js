function zapiszNotatke(){
	var tresc = $( "#notepad_ex" ).value;
	zapiszCookie("notatka",tresc,333);
	console.log( "Zapis notatki" );
}

$( "#notepad_ex" ).ready(function() {
	var notatka=odczytajCookie("notatka");
    console.log("Notatka: "+ notatka );
    $( "#notepad_ex" ).value=notatka;
});



function zapiszCookie(nazwa,tresc,dni) {
    var wygasa = "";
    if (dni) {
        var date = new Date();
        date.setTime(date.getTime() + (dni*24*60*60*1000));
        wygasa = "; expires=" + date.toUTCString();
    }
    document.cookie = nazwa + "=" + tresc + wygasa + "; path=/";
}

function odczytajCookie(nazwa) {
    var nazwaTmp = nazwa + "=";
    var g = document.cookie.split(';');
    for(var i=0;i < g.length;i++) {
        var c = g[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nazwaTmp) == 0) return c.substring(nazwaTmp.length,c.length);
    }
    return null;
}

function usunCookie(nazwa) {
    createCookie(nazwa,"",-1);
}
