  $( function() {
    var dialog, form,
  
    importuj=function() {
		
			
			link=document.querySelector("#linkHt").value;
			var strona = "http://v-ie.uek.krakow.pl/~s186287/IntegracjaZKalendarzem/posrednikXml.php/?linkDoPlanu="+link;
			console.log(strona);
			$.get(strona, function( kod ) {

			var data="";
			for (var i = 0, len = kod.length; i < len; i++) {
				switch(kod[i]){
					case "%":
						i++;
						data="";
						while(kod[i]!="%"){
							data+=kod[i];
							++i;
						}
						
						break;

					case "#":
						++i; //#
						var odGodziny=kod[i]+kod[i+1]+kod[i+2]+kod[i+3]+kod[i+4];
						i+=7;
						var doGodziny=kod[i]+kod[i+1]+kod[i+2]+kod[i+3]+kod[i+4];
						i+=7;
						var opis="Prowadzacy: ";
						while(kod[i]!="@"){
							opis+=kod[i];
							++i;
						}
						++i;//@
						opis+=", Przedmiot: ";
						++i;//$
						while(kod[i]!="$"){
							opis+=kod[i];
							++i;
						}
						++i;//$
						opis+=", ";
						++i;//^
						while(kod[i]!="^"){
							opis+=kod[i];
							++i;
						}
						++i//^
						opis+=", sala:";
						++i;//{
						//++i;
						while(kod[i]!="{"){
							opis+=kod[i];
							++i;
						}
						++i;//{
						opis+=", uwagi: ";
						++i;//}
						while(kod[i]!="}"){
							opis+=kod[i];
							++i;
						}
						//++i;//}
						
						var zajecia = {'date': data, 'startTime': odGodziny, 'endTime': doGodziny, 'eventTitle': opis, 'lokalizacja': "UEK"};
						if (zajecia)
							createEvent(zajecia);
													//console.log(zajecia);

						break;
				}
				
			}
			dialog.dialog( "close" );
			      var msc=document.querySelector("#checkedDay").value;
			      if(msc.length==10)
					msc=msc.substring(4,5);
			      else
					msc=msc.substring(4,4);
			       wybierzDzien(document.querySelector("#checkedDay").value,document.querySelector("#checkedDay").value.substring(0,3),msc);
			       	 $( "#okienko_importu" ).css("visibility","hidden");
			      alert("Plan zostal zainportowany do kalendarza.");
			});		
			
		  	
    };

    cancelImport=function(){
		gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'showDeleted': false,
          'timeMin': "2017-4-10T00:00:01.00Z",
          'singleEvents': true,
          'maxResults': 150,
          'orderBy': 'startTime'
        }).then(function(response) {
          var events = response.result.items;
          if (events.length > 0) {
            for (i = 0; i < events.length; i++) {
              if(events[i].location=="UEK"){
				
				  var params = {
					calendarId: 'primary',
					eventId: events[i].eventId,
				  };

				  calendar.events.delete(params, function(err) {
					if (err) {
					  console.log('Blad API: ' + err);
					}else
						console.log('Zdarzenie usuniete');
				  });
				
				
				
				//console.log(events[i].location);
			  }
            }
          }
        });
    	
    }

	
    dialog = $( "#okienko_importu" ).dialog({
      autoOpen: false,
      height: 400,
      width: 450,
      modal: true,
      open: function(event, ui) {
        $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
        $( "#okienko_importu" ).css("visibility","visible");

	  },
      dialogClass: 'formularz-importu',
      buttons: {
        "Importuj do kalendarza": importuj,
        "Cofnij import": cancelImport,
        Cancel: function() {
          dialog.dialog( "close" );
          $( "#okienko_importu" ).css("visibility","hidden");
        }
      }
    });
 
    form = dialog.find( "form" ).on( "submit", function( event ) {
      event.preventDefault();
      importuj();
    });
 
    $( "#plan_zajec_btn" ).button().on( "click", function() {
      dialog.dialog( "open" );
    });
    
    
  } );

	

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
  
    // coś można zrobic po wykonaniu operacji dodania zdarzenia
    request.execute(function(resp) {
      console.log(resp);
    });
}

