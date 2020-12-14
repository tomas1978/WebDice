//var simButton=document.getElementById("simulationButton");
//simButton.onClick"changeText()";

let results=new Array(0,0,0,0,0,0);
var res="";
simulate(1000);

function simulate(simulations) {
	for(var i=0;i<simulations;i++) {
		let result=Math.floor(Math.random() * 6) + 1;
		results[result-1]++;
	}
	console.log(results);
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

