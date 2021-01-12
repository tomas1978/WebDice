//var simButton=document.getElementById("simulationButton");
//simButton.onClick="changeText()";

let results=new Array(0,0,0,0,0,0);
var res="";
var numberOfSimulations=document.getElementById("simulationsInput").value;
console.log(numberOfSimulations);
simulate(numberOfSimulations);
console.log(writeResult());
document.getElementById("res").innerHTML=calcResult();
writeResult();


function simulate(simulations) {	
	for(var i=0;i<simulations;i++) {
		let result=Math.floor(Math.random() * 6) + 1;
		results[result-1]++;
	}
	console.log(results);
}

function calcResult() {
	resultString="";
	resultString="Ettor: "+results[0]+"\n"+"Tvåor: "+results[1]+"\n"+"Treor: "+results[2]+"\n"
					+"Fyror: "+results[3]+"\n"+"Femmor: "+results[4]+"\n" + "Sexor: "+results[5];
	return resultString;
}

function writeResult() {
	for(var i=0;i<6;i++) {
		document.getElementById(1+i).innerHTML=results[i];
		document.getElementById(11+i).innerHTML=results[i]/results.length;
	}
}

function changeText() {
	var element = document.getElementById("result");
	element.innerHTML="Hello World";
	console.log("TESTING TESTING!");
}

