const getMessages = () => {
	const url = 'api/messages';
	fetch(url)
	.then(res => res.json())
	.then(response => {
		//Se recibe el json de respuesta, se recorre y se arma un string
		//Para mostrar el resultado		
		const content = response.map(message => {
			return message.content + "\n";
		}).join(" ");
		//El string construido se agrega en el div con id tweet
		alert(content);
	});
};

const newMessage = () => {
	//Se define la ruta hacia donde se enviará la petición
	const url = '/api/messages';
	//Se contruye el objeto que se enviará al API
	const message = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		telephone: document.getElementById("telephone").value,
		country: document.getElementById("country").value,
		content: document.getElementById("message").value
	};
	//Se hace una petición tipo POST usando Fetch
	fetch(url,{
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(message)
	}).then(res => res.json())
	//Respuesta con error
	.catch(error => console.error('Error:', error))
	//Respuesta exitosa
	.then(response => {
		document.getElementById("name").value = "";
		document.getElementById("email").value = "";
		document.getElementById("telephone").value = "";
		document.getElementById("country").value = "";
		document.getElementById("message").value = "";
		alert(response.resp);
	});
};

function initMap() {
  // The location of Uluru
  var colombia = {lat: 4.5, lng: -72.2973328};
  var barranquilla = {lat: 10.9880523, lng: -74.7947519}
  var bogota = {lat: 4.6486259, lng: -74.2478958};
  var cali = {lat: 3.395397, lng: -76.6657528};
  var medellin = {lat: 6.268844, lng: -75.6664331};
  
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 5, center: colombia});
  // The marker, positioned at Uluru
  var marker1 = new google.maps.Marker({position: barranquilla, map: map});
  var marker1 = new google.maps.Marker({position: bogota, map: map});
  var marker1 = new google.maps.Marker({position: cali, map: map});
  var marker1 = new google.maps.Marker({position: medellin, map: map});
}