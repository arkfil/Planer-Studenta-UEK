//var app = angular.module("kalendarzApp", []);



function rysujKalendarz(dzienWKtorymZaczynaSieMiesiac,liczbaDniMiesiaca,miesiac,miesiacLiczbowo,rok){

var kalendarz = "<div class='calendar' id='calendar'><header><button onclick='calleft()' class='left_but' id='left_but'>«</button><h3><b id='miesiac'>"+miesiac+"</b></h3> <h3><b id='rok'>"+rok+"</b><b id='miesiacLiczbowo' style='display: none;'>"+miesiacLiczbowo+"</b></h3><button  onclick='callright()' class='right_but' id='right_but'>»</button></header>";
kalendarz+="<table><tr><td>Nd</td><td>Pn</td><td>Wt</td><td>Śr</td><td>Cz</td><td>Pt</td><td>Sb</td></tr>";
++miesiacLiczbowo;
switch(dzienWKtorymZaczynaSieMiesiac){
	case 0:
		for(var i=1;i<=liczbaDniMiesiaca;++i){
			if(i==1||i==8||i==15||i==22||i==29)
				kalendarz+="<tr><td id='"+rok+"-"+miesiacLiczbowo+"-"+i+"' onclick='wybierzDzien(this.id,"+rok+","+miesiacLiczbowo+")'>"+i+"</td>";
			else if(i==7||i==14||i==21||i==28)
				kalendarz+="<td id='"+rok+"-"+miesiacLiczbowo+"-"+i+"' onclick='wybierzDzien(this.id,"+rok+","+miesiacLiczbowo+")'>"+i+"</td></tr>";
			else
				kalendarz+="<td id='"+rok+"-"+miesiacLiczbowo+"-"+i+"' onclick='wybierzDzien(this.id,"+rok+","+miesiacLiczbowo+")'>"+i+"</td>";
		}
		
		kalendarz+="</tr>";
		break;
	case 1:
		kalendarz+="<tr><td></td>";
		for(var i=1;i<=liczbaDniMiesiaca;++i){
			if(i==7||i==14||i==21||i==28)
				kalendarz+="<tr><td id='"+rok+"-"+miesiacLiczbowo+"-"+i+"' onclick='wybierzDzien(this.id,"+rok+","+miesiacLiczbowo+")'>"+i+"</td>";
			else if(i==6||i==13||i==20||i==27)
				kalendarz+="<td id='"+rok+"-"+miesiacLiczbowo+"-"+i+"' onclick='wybierzDzien(this.id,"+rok+","+miesiacLiczbowo+")'>"+i+"</td></tr>";
			else
				kalendarz+="<td id='"+rok+"-"+miesiacLiczbowo+"-"+i+"' onclick='wybierzDzien(this.id,"+rok+","+miesiacLiczbowo+")'>"+i+"</td>";
		}
		kalendarz+="</tr>";
		
		break;
	case 2:
		kalendarz+="<tr><td></td><td></td>";
		for(var i=1;i<=liczbaDniMiesiaca;++i){
			if(i==6||i==13||i==20||i==27)
				kalendarz+="<tr><td id='"+rok+"-"+miesiacLiczbowo+"-"+i+"' onclick='wybierzDzien(this.id,"+rok+","+miesiacLiczbowo+")'>"+i+"</td>";
			else if(i==5||i==12||i==19||i==26)
				kalendarz+="<td id='"+rok+"-"+miesiacLiczbowo+"-"+i+"' onclick='wybierzDzien(this.id,"+rok+","+miesiacLiczbowo+")'>"+i+"</td></tr>";
			else
				kalendarz+="<td id='"+rok+"-"+miesiacLiczbowo+"-"+i+"' onclick='wybierzDzien(this.id,"+rok+","+miesiacLiczbowo+")'>"+i+"</td>";
		}
		kalendarz+="</tr>";
		break;
	case 3:
		kalendarz+="<tr><td></td><td></td><td></td>";
		for(var i=1;i<=liczbaDniMiesiaca;++i){
			if(i==5||i==12||i==19||i==26)
				kalendarz+="<tr><td id='"+rok+"-"+miesiacLiczbowo+"-"+i+"' onclick='wybierzDzien(this.id,"+rok+","+miesiacLiczbowo+")'>"+i+"</td>";
			else if(i==4||i==11||i==18||i==25)
				kalendarz+="<td id='"+rok+"-"+miesiacLiczbowo+"-"+i+"' onclick='wybierzDzien(this.id,"+rok+","+miesiacLiczbowo+")'>"+i+"</td></tr>";
			else
				kalendarz+="<td id='"+rok+"-"+miesiacLiczbowo+"-"+i+"' onclick='wybierzDzien(this.id,"+rok+","+miesiacLiczbowo+")'>"+i+"</td>";
		}
		kalendarz+="</tr>";
		break;
	case 4:
		kalendarz+="<tr><td></td><td></td><td></td><td></td>";
		for(var i=1;i<=liczbaDniMiesiaca;++i){
			if(i==4||i==11||i==18||i==25)
				kalendarz+="<tr><td id='"+rok+"-"+miesiacLiczbowo+"-"+i+"' onclick='wybierzDzien(this.id,"+rok+","+miesiacLiczbowo+")'>"+i+"</td>";
			else if(i==3||i==10||i==17||i==24||i==31)
				kalendarz+="<td id='"+rok+"-"+miesiacLiczbowo+"-"+i+"' onclick='wybierzDzien(this.id,"+rok+","+miesiacLiczbowo+")'>"+i+"</td></tr>";
			else
				kalendarz+="<td id='"+rok+"-"+miesiacLiczbowo+"-"+i+"' onclick='wybierzDzien(this.id,"+rok+","+miesiacLiczbowo+")'>"+i+"</td>";
		}
		break;
	case 5:
		kalendarz+="<tr><td></td><td></td><td></td><td></td><td></td>";
		for(var i=1;i<=liczbaDniMiesiaca;++i){
			if(i==3||i==10||i==17||i==24||i==31)
				kalendarz+="<tr><td id='"+rok+"-"+miesiacLiczbowo+"-"+i+"' onclick='wybierzDzien(this.id,"+rok+","+miesiacLiczbowo+")'>"+i+"</td>";
			else if(i==2||i==9||i==16||i==23||i==30)
				kalendarz+="<td id='"+rok+"-"+miesiacLiczbowo+"-"+i+"' onclick='wybierzDzien(this.id,"+rok+","+miesiacLiczbowo+")'>"+i+"</td></tr>";
			else
				kalendarz+="<td id='"+rok+"-"+miesiacLiczbowo+"-"+i+"' onclick='wybierzDzien(this.id,"+rok+","+miesiacLiczbowo+")'>"+i+"</td>";
		}
		kalendarz+="<td></td><td></td><td></td><td></td><td></td><td></td></tr>";
		break;
	case 6:
		kalendarz+="<tr><td></td><td></td><td></td><td></td><td></td><td></td>";
		for(var i=1;i<=liczbaDniMiesiaca;++i){
			if(i==2||i==9||i==16||i==23||i==30)
				kalendarz+="<tr><td id='"+rok+"-"+miesiacLiczbowo+"-"+i+"' onclick='wybierzDzien(this.id,"+rok+","+miesiacLiczbowo+")'>"+i+"</td>";
			else if(i==1||i==8||i==15||i==22||i==29)
				kalendarz+="<td id='"+rok+"-"+miesiacLiczbowo+"-"+i+"' onclick='wybierzDzien(this.id,"+rok+","+miesiacLiczbowo+")'>"+i+"</td></tr>";
			else
				kalendarz+="<td id='"+rok+"-"+miesiacLiczbowo+"-"+i+"' onclick='wybierzDzien(this.id,"+rok+","+miesiacLiczbowo+")'>"+i+"</td>";
		}
		kalendarz+="<td></td><td></td><td></td><td></td><td></td></tr>";
		break;
}
kalendarz+="</div>";
return kalendarz;
}


var app = angular.module('myApp', []);

app.controller('MainCtrl', ['$scope', '$sce', function($scope, $sce) {
  $scope.renderHtml = function(html_code) {
    return $sce.trustAsHtml(html_code);
  };

var dzis = new Date();

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
var miesiac = month[dzis.getMonth()];



var dzienMiesiaca = dzis.getUTCDate();

var tempDnMsc= dzienMiesiaca;
var dzienWKtorymZaczynaSieMiesiac = dzis.getDay();
while(tempDnMsc>1){
    	if(dzienWKtorymZaczynaSieMiesiac>=0){
		--tempDnMsc;
		--dzienWKtorymZaczynaSieMiesiac;
	}else{
		dzienWKtorymZaczynaSieMiesiac=6;
	}
}



var temporarny = new Date(dzis.getFullYear(), dzis.getMonth()+1, 0);
var liczbaDniMiesiaca = temporarny.getDate();

miesiacLiczbowo=parseInt(dzis.getMonth());
miesiacLiczbowo+=1;

document.getElementById("checkedDay").value = dzis.getFullYear()+"-"+miesiacLiczbowo+"-"+dzis.getUTCDate();


$scope.pgf = rysujKalendarz(dzienWKtorymZaczynaSieMiesiac,liczbaDniMiesiaca,miesiac,dzis.getMonth(),dzis.getFullYear());

}]);





