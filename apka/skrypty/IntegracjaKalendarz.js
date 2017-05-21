		// Id klienta, osoby z której API korzystamy
		
		
      var CLIENT_ID = '194600498228-qma3i1keplbb79o2j9htrcuh3ohnbhjt.apps.googleusercontent.com';

      var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

      // Soczewki autoryzacyjne - wymaga ich API
      var SCOPES = "https://www.googleapis.com/auth/calendar";
	
      var przyciskAutoryzacji = document.getElementById("authorize-button");
      var divAutoryzacji = document.getElementById("cover");
      var napis = document.getElementById("greetings");

      
   //   var przyciskWylogowania = document.getElementById('signout-button');
   //   var przyciskDodawania = document.getElementById('addToCalendar');
		
      
      /**
       *  On load, called to load the auth2 library and API client library.
       */
      function handleClientLoad() {
		divAutoryzacji = document.getElementById("cover");
		przyciskAutoryzacji = document.getElementById("authorize-button");
		napis =document.getElementById("greetings");
		console.log("in handle client load");
        gapi.load('client:auth2', initClient);
		
      }

      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
      function initClient() {
		console.log("in init client");

        gapi.client.init({
          discoveryDocs: DISCOVERY_DOCS,
          clientId: CLIENT_ID,
          scope: SCOPES
        }).then(function () {
          // Nasluchiwanie czy jest autoryzacja
          		console.log("in init client2");

          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Poczatkowa obsluga autoryzacji
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          przyciskAutoryzacji.onclick = handleAuthClick;
     //     przyciskWylogowania.onclick = handleSignoutClick;
        }, function(error) {
			console.log(error);
		}
);
      }

     // Funkcja jest wolana gdy zmieni sie status autoryzacji, w celu aktualizacji wygladu
      function updateSigninStatus(isSignedIn) {
		          				console.log("in update signing status");

        if (isSignedIn) {
          divAutoryzacji.style.visibility = 'hidden';
          napis.style.visibility = 'hidden';
          przyciskAutoryzacji.style.visibility = 'hidden';

    //      listUpcomingEvents();
        } else {
                   divAutoryzacji.style.visibility = 'visible';
					napis.style.visibility = 'visible';
          przyciskAutoryzacji.style.visibility = 'visible';

        }
      }
       // Autoryzacja po kliknięciu przycisku 
      function handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
      }
      // Wypowiedzenie autoryzacji po kliknięciu przycisku.
/*      function handleSignoutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
      }
*/
	  // Wpisywanie wydarzenia z kalendarza do elementu html
 /*     function appendPre(message) {
        var pre = document.getElementById('content');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }
*/
