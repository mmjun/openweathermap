document.getElementById('getWeatherButton').onclick = showData

var httpRequest = new XMLHttpRequest();


httpRequest.onreadystatechange = responseMethod;
httpRequest.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=fa078b490b3c536855d8fd7be010d629');
httpRequest.send();

function showData() {
  $.post( "http://api.openweathermap.org/data/2.5/weather?zip=20059,us", function( data ) {
    $( ".result" ).html( data );
  });
}


function responseMethod() {
  if(httpRequest.readyState === XMLHttpRequest.DONE) {
    // if response is successful
    if(httpRequest.status === 200) {
      // document.write(httpRequest.responseText);
      console.log(httpRequest.responseText);
    } else {
      // if response has an error
      console.log('There was a '+ httpRequest.status + ' error');
    }
  }
}
