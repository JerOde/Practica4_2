//JavaScript
	var audio;
$(document).ready(function(e){	
 
 if(window.plugins && window.plugins.LowLatencyAudio)
 {audio=window.plugins.LowLatencyAudio;
 audio.preloadFX('mario','audio/mario.mp3',function(msg){},function(msg){alert('error=' + msg);});}//if
 
 
 
 $('#Beep').bind("tap",function(e){
	 
navigator.notification.beep(1);
	 
});// click continuar
$('#Vibrar').bind("tap",function(e){
	 
navigator.notification.vibrate(1000);
	 
});// click continuar
$('#Play').bind("tap",function(e){
	
audio.play('mario');

});// click continuar
});//ready