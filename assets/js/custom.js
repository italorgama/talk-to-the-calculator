var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = "pt-BR";
recognition.interimResults = false;
recognition.maxAlternatives = 5;
var synth = window.speechSynthesis;
recognition.start();

recognition.onresult = (result) => {
try {
var valueA = result.results[0][0].transcript;

if(valueA == "um mais um") {
	document.getElementById('resultado').innerHTML = "Resultado " + parseInt(parseInt(1) + parseInt(1));
}
var __ = valueA.split(' ');
console.log(__);
switch(__[1]){
	case "dividido":
		document.getElementById('resultado').innerHTML = "Resultado " + Number(parseInt(parseInt(__[0]) / parseInt(__[3])));
	break;
	case "potência":
		document.getElementById('resultado').innerHTML = "Resultado " + Number(parseInt(parseInt(__[0]) ** parseInt(__[3])));
	case "elevado":
		document.getElementById('resultado').innerHTML = "Resultado " + Number(parseInt(parseInt(__[0]) ** parseInt(__[3])));
	case "potencia":
		document.getElementById('resultado').innerHTML = "Resultado " + Number(parseInt(parseInt(__[0]) ** parseInt(__[3])));
	break;
	case "sobre":
		document.getElementById('resultado').innerHTML = "Resultado " + Number(parseInt(parseInt(__[0]) / parseInt(__[2])));	
	break;
	case "+":
		document.getElementById('resultado').innerHTML = "Resultado " + parseInt(parseInt(__[0]) + parseInt(__[2]));
	break;
	case "x":
		document.getElementById('resultado').innerHTML = "Resultado " + parseInt(parseInt(__[0]) * parseInt(__[2]));
	break;
	case "-":
	 document.getElementById('resultado').innerHTML = "Resultado " + parseInt(parseInt(__[0]) - parseInt(__[2]));
	break;
	case "mais":
		document.getElementById('resultado').innerHTML = "Resultado " + parseInt(parseInt(__[0]) + parseInt(__[2]));
	break;
	case "vezes":
		document.getElementById('resultado').innerHTML = "Resultado " + parseInt(parseInt(__[0]) * parseInt(__[2]));
	break;
	case "menos":
		document.getElementById('resultado').innerHTML = "Resultado " + parseInt(parseInt(__[0]) - parseInt(__[2]));
	break;
}
}
catch {}
}

recognition.onend = () => {
	recognition.start();
}
