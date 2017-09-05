var showAlert = function (event) {
	event.preventDefault()
	
	$.getJSON("http://demo6292426.mockable.io/blickTest", function (response) {
		
		showData(response)
	})
}

var showData = function(data){
	console.log(data)
	var alert_ = data.name
	alert_ += " "+data.email
	
	alert(alert_)
}


var btnContacto = document.getElementById("contacto-btn")
btnContacto.addEventListener("click", showAlert)
