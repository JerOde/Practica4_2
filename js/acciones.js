//JavaScript
	
$(document).ready(function(e){	
 
 $('#Beep').click(function(e){
	 
navigator.nofification.beep(1)
	 
});// click continuar
$('#Vibrar').click(function(e){
	 
navigator.notification.vibrate(1000)
	 
});// click continuar
});//ready