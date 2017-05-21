  $( function() {
    var dialog, form,
 
      godz_rozpoczecia = $( "#godz_rozpoczecia" ),
      godz_zakonczenia = $( "#godz_zakonczenia" ),
      opis_zdarzenia = $( "#opis_zdarzenia" ),

	
    dodajZdarzenie=function() {
		
			var userChoices = getUserInput();
		 	console.log(userChoices);
		 	if (userChoices) 
		  	createEvent(userChoices);
		  	;
			//console.log("KRZYCZE LALLALALLALAALLALALALLALALALLLALALAALLALA");
			
		 
		 dialog.dialog( "close" );
		 var ajdek=document.querySelector("#checkedDay").value;
		 var rok=ajdek.substring(0,4);
		 ajdek = ajdek.substring(5);
		 var index =ajdek.search("-");
		 var msc = ajdek.substring(0,index);
		 /*
			var ajdek=document.querySelector("#checkedDay").value;
			   console.log("               AAAAAAAAAAJDEKKKKKKKKKK                                 "+ajdek);
			   
			   			   console.log("               ROOOOOOOOOOKKKKK                                 "+rok);
			   
			   
				console.log("               MSSCCCCCCCCC                                 "+miesiaczek);
			
				if(miesiaczek.length==1)
					miesiaczek = "0"+miesiaczek;
		 console.log("               MSSCCCCCCCCC                                 "+miesiaczek);
		  	 var msc=document.querySelector("#checkedDay").value;
			      
			      // Odswiezenie listy zdarzen dla dnia
			      if(msc.length==10)
					msc=msc.substring(4,5);
			      else
					msc=msc.substring(4,4);
				wybierzDzien(document.querySelector("#checkedDay").value,rok,miesiaczek);
*/
			// console.log("               ROOOOOOOOOOKKKKK                                 "+rok);
		//	 console.log("               MSSCCCCCCCCC                                 "+msc);
			//wybierzDzien("2017-5-5",rok,msc);
	//		console.log("                  Takisedzien NO:"+document.querySelector("#checkedDay").value);
				       wybierzDzien(document.querySelector("#checkedDay").value,rok,msc);
			$( "#okienko_zdarzenia" ).css("visibility","hidden");
			alert("Zdarzenie zostalo dodane.");
    };
	

	
    dialog = $( "#okienko_zdarzenia" ).dialog({
      autoOpen: false,
      height: 400,
      width: 450,
      modal: true,
      open: function(event, ui) {
        $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
        	 $( "#okienko_zdarzenia" ).css("visibility","visible");
	  },
      dialogClass: 'formularz-zdarzenia',
      buttons: {
        "Dodaj zdarzenie": dodajZdarzenie,
        Cancel: function() {
          dialog.dialog( "close" );
          $( "#okienko_zdarzenia" ).css("visibility","hidden");
        }
      }
    });
 
    form = dialog.find( "form" ).on( "submit", function( event ) {
      event.preventDefault();
      dodajZdarzenie();
    });
 
    $( "#add_button" ).button().on( "click", function() {
      dialog.dialog( "open" );
    });
  } );

	
	
	function getUserInput(){
  
		  var date = document.querySelector("#checkedDay").value;
		  var startTime = document.querySelector("#godz_rozpoczecia").value;
		  var endTime = document.querySelector("#godz_zakonczenia").value;
		  var eventDesc = document.querySelector("#opis_zdarzenia").value;
		  var lokalizacja = "domyslna";
		  
		  // sprawdzenie wprowadzonych wartosci, nie powinny byc puste
		  if (date=="" || startTime=="" || endTime=="" || eventDesc=="" || lokalizacja==""){
			alert("Wszystkie pola powinny miec wprowadzona poprawna wartosc.");
			return
		  }
		  else return {'date': date, 'startTime': startTime, 'endTime': endTime,
					   'eventTitle': eventDesc, 'lokalizacja': lokalizacja}
	}


// Zapytanie do API
function createEvent(eventData) {
  // Utworzenie zasobu do przeslania na serwer
    var resource = {
        "summary": eventData.eventTitle,
        "start": {
          "dateTime": new Date(eventData.date + " " + eventData.startTime).toISOString()
        },
        "end": {
          "dateTime": new Date(eventData.date + " " + eventData.endTime).toISOString()
          },
         "location": eventData.lokalizacja
        };
    // create the request

    var request = gapi.client.calendar.events.insert({
      'calendarId': 'primary',
      'resource': resource
    });
  
    // execute the request and do something with response
    request.execute(function(resp) {
      console.log(resp);
 

    });
    
    
 
        

}

