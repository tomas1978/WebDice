var simButton=document.getElementById("simulationButton");
simButton.onClick="changeText()";

function changeText() {
	var element = document.getElementById("test");
	element.innerHTML="Hello World";
	console.log("TESTING TESTING!");
}

