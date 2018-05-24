

var nomes = ["Felipe Emidio", "Thiago Emidio", "Thales Simonato", "Son Goku", "Saint Seya", "Santos Dumont",
	"Isaac Newton", "Alber Einsteins", "Doctor Who", "Son Gohan", "Power Ranger Vermelho", "Power Ranger Rosa", 
	"Power Ranger Azul", "Alice Evergarden", "Jesus Cristo", "Odin"];



var pageSize = 10;
var numberOfPages = Math.ceil(nomes.length/pageSize);

console.log("Number of Pages: " + numberOfPages);
function AddMultiplier(){
	var m = sessionStorage.getItem("Multiplier");
	if(m == null){
		m = 0;
	}
	else if ( Number(m) < numberOfPages -1){
		m = Number(m)+1;
	}
	sessionStorage.setItem("Multiplier", m);
	location.reload();
	 
}

function SubMultiplier(){
	var m = sessionStorage.getItem("Multiplier");
	if(m == null || Number(m) <= 1){
		m = 1;
	} 
	m = Number(m)-1;
	sessionStorage.setItem("Multiplier", m);
	location.reload(); 
}


function LoadStudents(){

	
	//var table = document.getElementById("StudentTable");

	var pageMultiplier = Number(sessionStorage.getItem("Multiplier") );
	if(pageMultiplier==null){
		pageMultiplier = 0;
	}
	console.log("Multiplier " + pageMultiplier);
	document.getElementById("pageText").innerHTML = "Página " + (pageMultiplier+1) + " de " + numberOfPages;
	/*
	for( var i = 0 + pageMultiplier * pageSize; i < nomes.length && i < pageSize + pageMultiplier * pageSize; ++i){
		var row = table.insertRow();
	    var name = row.insertCell(0);
	    var grade = row.insertCell(1);
	    name.innerHTML = nomes[i];
	    grade.innerHTML = "3-A";
	    //console.log("Aluno: " + nomes[i]);  
	}
	*/
	var studentsList = document.getElementById("studentList");
	for( var i = 0 + pageMultiplier * pageSize; i < nomes.length && i < pageSize + pageMultiplier * pageSize; ++i){
		var btn = document.createElement("BUTTON");
		var text = document.createTextNode(nomes[i]);
		btn.appendChild(text);
		btn.classList.add("accordion");
		studentsList.appendChild(btn);

		var div = document.createElement("DIV");
		div.classList.add("panel");
		var paragraph = document.createElement("P");
		paragraph.innerHTML ="A palavra é a pronúncia abreviada de 'animação' em japonês, onde esse termo se" + 
		"refere a qualquer animação.[1] Para os ocidentais, a palavra se refere às animações oriundas do Japão." + 
		" A origem da palavra é controversa, podendo vir da palavra inglesa animation [animação] ou da palavra francesa animé [animado].";
		div.appendChild(paragraph);
		studentsList.appendChild(div);
	    //console.log("Aluno: " + nomes[i]);  
	}


	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
	    this.classList.toggle("active");
	    var panel = this.nextElementSibling;
	    if (panel.style.maxHeight){
	      panel.style.maxHeight = null;
	    } else {
	      panel.style.maxHeight = panel.scrollHeight + "px";
	    } 
	  });
	}

}