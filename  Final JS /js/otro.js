/*general varibles*/
var contadorGlobal=0;
var cockie= 0;
var random1 = Math.floor((Math.random() * 15) + 1);//numero random del 1 al 100 que me da la cantidad de click en que sale el evento

/*when document load do the following instructions*/
$(document).ready(function(){ //cuando entra la pagina antes que el usuario la vea

	/*hiding imgs before being watched by users*/
	//ocultar las imagenes cuando entra al documento
	$('#img1').hide();
	$('#img2').hide();
	$('#img3').hide();
	$('#img4').hide();
	$('#img5').hide();
	$('#img6').hide();
	$('#img6').hide();
	$('#img7').hide();
	$('#clicker').click(function() {

  		//aqui meter el if para valida compra
  		if (cockie>0) {//condicion para saber si ya compro una cockie o más
  			contadorGlobal=contadorGlobal+(cockie*3);//multiplico la cantidad de cockies compradas * 3 mas el contadorGlobal
  		}

		if(cockie<=0) {//si no tiene nada comprado solo suma 1 click
			contadorGlobal++;
		}
  		$('#counter').html(contadorGlobal);


  		if (contadorGlobal>=random1) {// condicion para saber si sale el evento inesperado
		var imagen = Math.floor((Math.random() * 7) + 1);//random para saber que imagen sale
		var top = Math.floor((Math.random() * 1000) + 1);//top en el que va a salir la imagen
		var left = Math.floor((Math.random() * 1500) + 1);//left en el que va a salir la imagen

			switch(imagen) {//cual imagen va a salir depende del numero random imagen
				case 1:
		  			$('#img1').show().css({top: top, position:'absolute'}).delay(1000).fadeOut();//muestro la imagen
				case 2:
		  			$('#img2').show().css({top: top, position:'absolute'}).delay(1000).fadeOut();
				break;
				case 3:
		  			$('#img3').show().css({top: top, position:'absolute'}).delay(1000).fadeOut();
				break;
				case 4:
		  			$('#img4').show().css({top: top, position:'absolute'}).delay(1000).fadeOut();
				break;
				case 5:
		  			$('#img5').show().css({top: top, position:'absolute'}).delay(500).fadeOut();
				break;
				case 6:
		  			$('#img6').show().css({top: top, position:'absolute'}).delay(500).fadeOut();
				break;
				case 7:
		  			$('#img7').show().css({top: top, position:'absolute'}).delay(500).fadeOut();
				break;
			}
			random1=random1+Math.floor((Math.random() * 30) + 1);//le sumo al numero random el random de nuevo para sacar el evento de nuevo
  		}

	});


	//Aqui se ponen los eventos inesperados que suman  puntos si los clickeas
	$('#img1').click(function() {
		contadorGlobal=contadorGlobal+3;//le sumo 3 puntos si clickea una imagen del evento insesperado
  		$('#counter').html(contadorGlobal);
	});
	$('#img2').click(function() {
		contadorGlobal=contadorGlobal+5;
  		$('#counter').html(contadorGlobal);
	});
	$('#img3').click(function() {
		contadorGlobal=contadorGlobal+7;
  		$('#counter').html(contadorGlobal);
	});
	$('#img4').click(function() {
		contadorGlobal=contadorGlobal+9;
  		$('#counter').html(contadorGlobal);
	});
	$('#img5').click(function() {
		contadorGlobal=contadorGlobal+11;
  		$('#counter').html(contadorGlobal);
	});
	$('#img6').click(function() {
		contadorGlobal=contadorGlobal+13;
  		$('#counter').html(contadorGlobal);
	});
	$('#img7').click(function() {
		contadorGlobal=contadorGlobal+15;
  		$('#counter').html(contadorGlobal);
	});
//Termina eventos inesperados

//compra de articulos aumentando clicks
	$('#imgV').click(function() {//imagen de compra
      	if (contadorGlobal>=40) {
      		window.alert("You are about to spend 40 Santa's clicks on the upgrade");
         	contadorGlobal = contadorGlobal - 40;
        $('#counter').html(contadorGlobal);
		}else{
			window.alert("You don't have enough Santa's clicks to buy this one");
		}
	});

	$('#item2').click(function() {
      	if (contadorGlobal>= 60) {
      		window.alert("You are about to spend 60 Santa's clicks on the upgrade");
         	contadorGlobal = contadorGlobal - 60;
        $('#counter').html(contadorGlobal);
		}else{
			window.alert("You don't have enough Santa's clicks to buy this one");
		}
	});

	$('#item3').click(function() {
      	if (contadorGlobal>=80) {
      		window.alert("You are about to spend 80 Santa's clicks on the upgrade");
         	contadorGlobal = contadorGlobal - 80;
        $('#counter').html(contadorGlobal);
		}else{
			window.alert("You don't have enough Santa's clicks to buy this one");
		}
	});

	$('#item4').click(function() {
      	if (contadorGlobal>=100) {
      		window.alert("You are about to spend 100 Santa's clicks on the upgrade");
         	contadorGlobal = contadorGlobal - 100;
        $('#counter').html(contadorGlobal);
		}else{
			window.alert("You don't have enough Santa's clicks to buy this one");
		}
	});

	$('#item5').click(function() {
      	if (contadorGlobal>=120) {
      		window.alert("You are about to spend 120 Santa's clicks on the upgrade");
         	contadorGlobal = contadorGlobal - 120;
        $('#counter').html(contadorGlobal);
		}else{
			window.alert("You don't have enough Santa's clicks to buy this one");
		}
	});

	$('#item6').click(function() {
      	if (contadorGlobal>=140) {
      		window.alert("You are about to spend 140 Santa's clicks on the upgrade");
         	contadorGlobal = contadorGlobal - 140;
        $('#counter').html(contadorGlobal);
		}else{
			window.alert("You don't have enough Santa's clicks to buy this one");
		}
	});

	$('#autoclick').click(function() {
			var i =0;
			if (contadorGlobal>=10) {//si la cantidad de clicks me da para comprar
				contadorGlobal = contadorGlobal- 10;//le resto 40 a los clicks por la compra
				function loopLi() {
				        if (i<=500) {
				            i++;
				            contadorGlobal=contadorGlobal+3;
								$('#counter').html(contadorGlobal);
				            setTimeout(loopLi,150);
				        }
				    }
				loopLi();
			$('#counter').html(contadorGlobal);//muestro el nuevo contador de clicks
		}else {
			window.alert("keep clicking...You don't have enough Santa's clicks to generate autoclicks");
		}
	});

	function cantClicks() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.contadorGlobal) {
            localStorage.contadorGlobal = Number(localStorage.contadorGlobal)+1;
        } else {
            localStorage.contadorGlobal = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.contadorGlobal + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

});
