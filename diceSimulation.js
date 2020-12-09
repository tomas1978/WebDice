//var simButton=document.getElementById("simulationButton");
//simButton.onClick"changeText()";

simulate(1000);
writeResult();

var results=[0,0,0,0,0,0];

function simulate(simulations) {
	for(var i=0;i<simulations;i++) {
		let result=Math.floor(Math.random() * 6) + 1;
		results[result-1]++;
	}
}

function writeResult() {
	for(var i=0;i<6;i++) {
		Console.log(i+": "+results[i])
	}
}

function changeText() {
	var element = document.getElementById("test");
	element.innerHTML="Hello World";
	console.log("TESTING TESTING!");
}

