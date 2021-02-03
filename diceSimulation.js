var simButton=document.getElementById("simulationButton");

simButton.addEventListener("click",function() {
	var numberOfSimulations=document.getElementById("simulations").value;
	console.log("Klickat på knappen!!!!");
	console.log(numberOfSimulations);
	
	simulate(numberOfSimulations);
});


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
	resultString="One: "+results[0]+"\n"+"Two: "+results[1]+"\n"+"Three: "+results[2]+"\n"
					+"Four: "+results[3]+"\n"+"Five: "+results[4]+"\n" + "Six: "+results[5];
	return resultString;
}

function writeResult() {
	for(var i=0;i<6;i++) {
		document.getElementById(1+i).innerHTML=results[i];
		document.getElementById(11+i).innerHTML=results[i]/numberOfSimulations;
	}
}

function changeText() {
	var numberOfSimulations=document.getElementById("simulationsInput").value;
	console.log(numberOfSimulations);
	simulate(numberOfSimulations);
}

