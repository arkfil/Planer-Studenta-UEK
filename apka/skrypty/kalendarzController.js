function ustalMiesiac(miesiacLiczbowo){
	var month = new Array();
	month[0] = "Styczen";
	month[1] = "Luty";
	month[2] = "Marzec";
	month[3] = "Kwiecien";
	month[4] = "Maj";
	month[5] = "Czerwiec";
	month[6] = "Lipiec";
	month[7] = "Sierpien";
	month[8] = "Wrzesien";
	month[9] = "Pazdziernik";
	month[10] = "Listopad";
	month[11] = "Grudzien";
	return month[miesiacLiczbowo];
}

function calleft(){

var rok = $( "#rok" ).text();
		
		var miesiacLiczbowo = $( "#miesiacLiczbowo" ).text();
		--miesiacLiczbowo;
		var nazwaMiesiaca;
		if(miesiacLiczbowo>=0)
			nazwaMiesiaca = ustalMiesiac(miesiacLiczbowo);
		else{
			nazwaMiesiaca = ustalMiesiac(11);
			rok=parseInt(rok)-1;
			miesiacLiczbowo=11;
		}
		


		console.log(parseInt(rok));
		console.log(parseInt(miesiacLiczbowo));
		console.log(nazwaMiesiaca);
		
		var poprzedni = new Date(parseInt(rok),parseInt(miesiacLiczbowo),1,1,1,1,1);
		console.log(poprzedni.toString());

		//$("#calendarHolder").empty();
		
		//$("#calendar").innerHTML="SDDSDSDSDS";
		console.log("------------------------------------------------------");
		var temporarny = new Date(poprzedni.getFullYear(), poprzedni.getMonth()+1, 0);
		var liczbaDniMiesiaca = temporarny.getDate();


		console.log(poprzedni.getDay());
		console.log(liczbaDniMiesiaca);
		console.log(nazwaMiesiaca);
		console.log(miesiacLiczbowo);
		console.log(poprzedni.getFullYear());


		document.getElementById("calendarHolder").innerHTML=rysujKalendarz(poprzedni.getDay(),liczbaDniMiesiaca,nazwaMiesiaca,miesiacLiczbowo,poprzedni.getFullYear());;
		//parent.document.getElementById("calendarHolder").reload();
		
		
		var a=document.getElementById(document.getElementById("checkedDay").value);
		if(a!=null) a.style.background = "blue";
}
function callright(){

var rok = $( "#rok" ).text();
		
		var miesiacLiczbowo = $( "#miesiacLiczbowo" ).text();
		++miesiacLiczbowo;
		var nazwaMiesiaca;
		if(miesiacLiczbowo<=11)
			nazwaMiesiaca = ustalMiesiac(miesiacLiczbowo);
		else{
			nazwaMiesiaca = ustalMiesiac(11);
			rok=parseInt(rok)+1;
			miesiacLiczbowo=0;
		}
		


		console.log(parseInt(rok));
		console.log(parseInt(miesiacLiczbowo));
		console.log(nazwaMiesiaca);
		
		var poprzedni = new Date(parseInt(rok),parseInt(miesiacLiczbowo),1,1,1,1,1);
		console.log(poprzedni.toString());

		//$("#calendarHolder").empty();
		
		//$("#calendar").innerHTML="SDDSDSDSDS";
		console.log("------------------------------------------------------");
		var temporarny = new Date(poprzedni.getFullYear(), poprzedni.getMonth()+1, 0);
		var liczbaDniMiesiaca = temporarny.getDate();


		console.log(poprzedni.getDay());
		console.log(liczbaDniMiesiaca);
		console.log(nazwaMiesiaca);
		console.log(miesiacLiczbowo);
		console.log(poprzedni.getFullYear());


		document.getElementById("calendarHolder").innerHTML=rysujKalendarz(poprzedni.getDay(),liczbaDniMiesiaca,nazwaMiesiaca,miesiacLiczbowo,poprzedni.getFullYear());;
		//parent.document.getElementById("calendarHolder").reload();
		
		var a=document.getElementById(document.getElementById("checkedDay").value);
		if(a!=null) a.style.background = "black";

}

function wybierzDzien(id,rok,miesiac){
	console.log(id);
	console.log("ZAWOLANO FUNKCJE WYBIESZ_DZIENNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN1");
	
	for(var i=1;i<=31;++i){
		var g = document.getElementById(rok+"-"+miesiac+"-"+i);
		if(g!=null) g.style.background = "";
		//console.log(rok+"-"+miesiac+"-"+i);
	};

	document.getElementById(id).style.background = "grey";
	document.getElementById("checkedDay").value = id;

	 gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': id+"T00:00:01.00Z",
          'timeMax': id+"T23:59:59.00Z",
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 70,
          'orderBy': 'startTime'
        }).then(function(response) {
          var events = response.result.items;

          if (events.length > 0) {
			  var eventsy="";
            for (i = 0; i < events.length; i++) {
              var event = events[i];
              var when = event.start.dateTime;
              if (!when) {
                when = event.start.date;
              }
              
             
              eventsy+="<div id='"+event.id+"'><div class='time'><br>"+event.start.dateTime.toString().substring(11,16)+"<br>"+event.end.dateTime.toString().substring(11,16)+"</div><div class='what'><p>"+event.summary+"</p></div></div>";
              
              if(i==events.length-1){
              	var nazwaPrzystanku = odczytajCookie("przystanekPoczatkowy");
              	if (typeof nazwaPrzystanku !== 'undefined') {
              	
			   	 eventsy+="<div><div class='time'></div><div class='what'><p>Tramwaje z "+nazwaPrzystanku+": <b id='coos'></b></p></div></div>";
              	 
	             zwrocGodzinyKomunikacji(event.end.dateTime);

              	}

              }


              
              //appendPre('Zdarzenie o id: ' + event.id + ' i nazwie: ' + event.summary + ', Poczatek: ' + event.start.dateTime + ', Koniec: ' + event.end.dateTime +', Lokalizacja zdarzenia: ' +event.location);
            }
            document.getElementById("sthaa").innerHTML=eventsy;
          } else {
             document.getElementById("sthaa").innerHTML="<div id=''><div class='time'></div><div class='what'><br><p>Nie znaleziono nachodzących zdarzeń</p></div></div>";
          }
        });
}


