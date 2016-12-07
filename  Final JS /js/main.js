var json = function json() {

  // Obtener la instancia del objeto XMLHttpRequest
  if (window.XMLHttpRequest) {
    peticion_http = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
  }

  // Preparar la funcion de respuesta
  peticion_http.onreadystatechange = showIntro;

  // Realizar peticion HTTP
  peticion_http.open('GET', 'data/intro.json', true);
  peticion_http.send(null);

  function showIntro() {
    //State request
    if (peticion_http.readyState == 4) {
      //State response
      if (peticion_http.status == 200) {
        console.log(peticion_http);
        window.alert('peticion_http.responseText');

        document.getElementById('result').innerHTML = peticion_http.responseText;
      }
    }
  }
}

document.getElementById('json').addEventListener('click', json)

