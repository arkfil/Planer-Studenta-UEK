<?php
$przystanek1 = $_GET["przystanek1"];
$przystanek2 = $_GET["przystanek2"];
$dzien = $_GET["dzien"];

//dzie=p, dzien=s, dzien=sw
//$dzien="sw";

//Wzgórza%20Krzesławickie
//http://v-ie.uek.krakow.pl/~s186287/IntegracjaZRozkladem/posrednik.php?przystanek1=Fabryczna&przystanek2=Wzg%C3%B3rza%20Krzes%C5%82awickie

$przystanek1 = $przystanek1."";
$przystanek2 = $przystanek2."";

$przystanekZnaleziony1="";
$przystanekZnaleziony2="";


$xml = simplexml_load_file("./rozklad.xml");
//echo (string)$xml->linia[0]->przystanek[0]->powszedni->h;


function sumuj($h1,$h2){

$godzina1 = (int)substr($h1,0,2);
$godzina2 = (int)substr($h2,0,2);

$minuta1 = (int)substr($h1,3,2);
$minuta2 = (int)substr($h2,3,2);

$godzina1+=$godzina2;
$minuta1+=$minuta2;


if($minuta1>=60){
	++$godzina1;
	$minuta1-=60;
}

if($godzina1>=24){
	$godzina1="00";
}

if(strlen((string)$minuta1)==1)
	$minuta1="0".$minuta1;

if(strlen((string)$godzina1)==1)
	$godzina1="0".$godzina1;


$h1 = $godzina1.":".$minuta1;
return $h1;
}




	foreach($xml->linia as $linia){
		foreach($linia->przystanek as $item2){
			
			
			if((string)$item2->nazwa===$przystanek1){
				$przystanekZnaleziony1 = $item2;
				//echo (string)$item2->nazwa;
				continue;
			}
			if(($przystanekZnaleziony1!="")&&((string)($item2->nazwa)===$przystanek2)){
				$przystanekZnaleziony2 = $item2;
				//echo (string)$item2->nazwa;
			}
		}
		
		
		
		if(($przystanekZnaleziony1!="") && ($przystanekZnaleziony2!="")){
			
		//	echo (string)$przystanekZnaleziony1->nazwa;
			
			if((string)$przystanekZnaleziony1->id=='1'){
		
				switch($dzien){
					case "p":
						//echo (string)$przystanekZnaleziony1->nazwa;
						foreach($przystanekZnaleziony1->powszedni->h as $element)
							echo (string)$element."|";
					break;
					case "s":
						foreach($przystanekZnaleziony1->sobota->h as $element)
							echo (string)$element."|";
					break;
					case "sw":
						foreach($przystanekZnaleziony1->swieta->h as $element)
							echo (string)$element."|";
					break;
				}
			}else{
				switch($dzien){
					case "p":
						foreach($linia->przystanek[0]->powszedni->h as $godzina){
							echo sumuj((string)$godzina,(string)$przystanekZnaleziony1->offset)."|";
							/*
								$idk=0;
								$suma=(string)$godzina;
								foreach($linia->przystanek as $stop){
									if((string)$stop->id!='1'){
										$idk=(int)$stop->id;
									
										if((int)idk<=(int)$przystanekZnaleziony1->id)
											$suma=sumuj($suma,(string)$stop->offset);
									}
								}
								echo $suma."|";*/
						}
					break;
					case "s":
						foreach($linia->przystanek[0]->sobota->h as $godzina){
							echo sumuj((string)$godzina,(string)$przystanekZnaleziony1->offset)."|";
				/*
								$idk=0;
								$suma=(string)$godzina;
								foreach($linia->przystanek as $stop){
									if((string)$stop->id!='1'){
										$idk=(int)$stop->id;
									
										if((int)idk<=(int)$przystanekZnaleziony1->id)
											$suma=sumuj($suma,(string)$stop->offset);
									}
								}
								echo $suma."|";*/
						}
					break;
					case "sw":
						foreach($linia->przystanek[0]->swieta->h as $godzina){
							echo sumuj((string)$godzina,(string)$przystanekZnaleziony1->offset)."|";

					/*	$idk=0;
								$suma=(string)$godzina;
								foreach($linia->przystanek as $stop){
									if((string)$stop->id!='1'){
										$idk=(int)$stop->id;
									
										if((int)idk<=(int)$przystanekZnaleziony1->id)
											$suma=sumuj($suma,(string)$stop->offset);
									}
								}
								echo $suma."|";*/
						}
						
					break;
				}

				
			}

		
			
			/*if($przystanekZnaleziony1[id]=="1"){
				//foreach($przystanekZnaleziony1->h as $item2){
					echo (string)$item2;
				//}
			}else{
				
				
				
			}
			*/
			
			
			
		
		}
		
	
		$przystanekZnaleziony2="";
		$przystanekZnaleziony1="";
	}

		
			
			
			
			
			
			
			
		/*	
			echo $item2->nazwa;
			echo "||";
			echo $przystanek1;
			echo "...........";
			
			if((string)$item2->nazwa === $przystanek1)
				echo "OKK";
		}
		

		
	}
*/
//	echo (string)$item[nr];

?>
