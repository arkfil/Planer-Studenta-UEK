<?php
//<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head></html>

$linkDoPlanu = $_GET["linkDoPlanu"];
$dzien = $_GET["dzien"];
$id = $_GET["id"];
$okres = $_GET["okres"];

// Wywolanie http://v-ie.uek.krakow.pl/~s186287/planerUEK/posrednikXml.php/?linkDoPlanu=http://planzajec.uek.krakow.pl/index.php?typ=G&id=126801&okres=1&dzien=2017-05-18
$linkDoPlanu=$linkDoPlanu.'&id='.$id.'&okres='.$okres.'&xml';

$xml = simplexml_load_file($linkDoPlanu);

// Wywolanie http://v-ie.uek.krakow.pl/~s186287/planerUEK/posrednikXml.php/?linkDoPlanu=http://planzajec.uek.krakow.pl/index.php?typ=G&id=126801&okres=1

/*	
if($dzien!=""){
	$xmlStr = $xml->asXML();
	$xmlStr = str_replace('od-godz', 'odgodz', $xmlStr);
	$xmlStr = str_replace('do-godz', 'dogodz', $xmlStr);
	$xml = simplexml_load_string($xmlStr);
	
	foreach($xml->zajecia as $item)
	{	
		if((string)$item->termin==$dzien){
			echo (string)$item->przedmiot;
			echo '|';
			echo (string)$item->odgodz;
			echo '|';
			echo (string)$item->dogodz;
			echo '|';
			echo (string)$item->typ;
			echo '|';
			echo (string)$item->nauczyciel;
			echo '|';
			echo (string)$item->sala;
			echo '|';
			echo (string)$item->uwagi;
			echo '$';
					
		}
	}
}else{
	foreach($xml->okres as $item)
	{	
		if($item[wybrany]=="tak"){
			echo $item[od];
			echo '|';
			echo $item['do'];
		}
	}

}


*/

	$xmlStr = $xml->asXML();
	$xmlStr = str_replace('od-godz', 'odgodz', $xmlStr);
	$xmlStr = str_replace('do-godz', 'dogodz', $xmlStr);

	$xml = simplexml_load_string($xmlStr);
	$termin = "";
	

	foreach($xml->zajecia as $item){
		if($termin!=$item->termin.""){
			echo "%";
			echo $item->termin;
			echo '%';
			$termin=$item->termin."";
		}
		echo '#';
		echo (string)$item->odgodz;
		echo '#';
		echo '|';
		echo (string)$item->dogodz;
		echo '|';
		echo '@';
		echo (string)$item->nauczyciel;
		echo '@';
		echo '$';
		echo (string)$item->przedmiot;
		echo '$';
		echo '^';
		echo (string)$item->typ;
		echo '^';
		echo '{';
		echo (string)$item->sala;
		echo '{';
		echo '}';
		echo (string)$item->uwagi;
		echo '}';
			
		
	}


?>


