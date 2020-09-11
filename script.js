(function () {
	var names = ["Godson","Godwyn","Samuel","john","paul","jason","frank","larry","paula","jen"];
 for (var name in names){
 	var firstLetter = names[name].charAt(0).toLowerCase();
 	if(firstLetter === 'j'){
 		byeSpeaker.speak(names[name]);
 	}
 	else{
 		helloSpeaker.speak(names[name]);
 	}
 }
})();