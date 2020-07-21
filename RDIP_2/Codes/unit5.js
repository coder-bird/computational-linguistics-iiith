SE1=["The", "child", "liked", "the", "chocolate"]
SE2=["She", "was", "stopped", "by", "the", "bravest", "knight"]
SE3=["Mary", "baked", "a", "cake", "for", "his", "birthday"]
SE4=["She", "decorated", "the", "cake", "carefully"]
SE5=["Mary", "wore", "a", "dress", "with", "polka", "dots"]

E1=["The", "child", "liked", "the", "chocolate."]
E2=["She", "was", "stopped", "by", "the", "bravest", "knight."]
E3=["Mary", "baked", "a", "cake", "for", "his", "birthday"]
E4=["She", "decorated", "the", "cake", "carefully"]
E5=["Mary", "wore", "a", "dress", "with", "polka", "dots."]

SH1=["राम", "ने", "सीता", "के", "लिए", "फल", "तोड़ा"]
SH2=["छोटे", "बच्चे", "पाठशाला", "जल्दी", "आयेंगे"]
SH3=["मेहनत", "का", "फल", "मीठा", "होता", "है"]
SH4=["वाह", "वह", "खूबसूरत", "है"]
SH5=["पेड़", "से", "पत्ते", "गिर", "गए"]

H1=["राम", "ने", "सीता", "के", "लिए", "फल", "तोड़ा|"]
H2=["छोटे", "बच्चे", "पाठशाला", "जल्दी", "आयेंगे|"]
H3=["मेहनत", "का", "फल", "मीठा", "होता", "है|"]
H4=["वाह!", "वह", "खूबसूरत", "है।"]
H5=["पेड़", "से", "पत्ते", "गिर", "गए।"]

SEnglish=[SE1,SE2,SE3,SE4,SE5];
SHindi=[SH1,SH2,SH3,SH4,SH5];

var engList='<select id="select2"><option value="noun">Noun</option><option value="pronoun">Pronoun</option><option value="conjunction">Conjunction</option><option value="interjection">Interjection</option><option value="verb">Verb</option><option value="determiner">Determiner</option><option value="adjective">Adjective</option><option value="adverb">Adverb</option><option value="preposition">Preposition</option></select>'
var hinList='<select id="select2"><option value="noun">Noun</option><option value="pronoun">Pronoun</option><option value="conjunction">Conjunction</option><option value="interjection">Interjection</option><option value="verb">Verb</option><option value="determiner">Determiner</option><option value="adjective">Adjective</option><option value="adverb">Adverb</option><option value="postposition">Postposition</option></select>'
function chooseLang(){
	document.getElementById('submitBtn').innerHTML="";
	document.getElementById("myTable").innerHTML="";
	document.getElementById('displayTxt').innerHTML="";		
	var optn= document.getElementById('selected').value;
	if(optn=='english'){
		document.getElementById('senDropbox').innerHTML="<select id='b' onchange='createTable()'><option value='null'>"+ "---Select a sentence---" +"</option>"+"<option value='0' id='SE1'>"+ E1.join(" ") +"</option>"+"</option>"+"<option value='1' id='SE2'>"+ E2.join(" ") +"</option>"+"</option>"+"<option value='2' id='SE3'>"+ E3.join(" ") +"</option>"+"</option>"+"<option value='3' id='SE4'> "+ E4.join(" ") +"</option>"+"<option value='4' id='SE5'>"+ E5.join(" ") +"</option></select>"
	} 
	if(optn=='hindi'){
		document.getElementById('senDropbox').innerHTML="<select id='b' onchange='createTable()'><option value='null'>"+ "---Select a sentence---" +"</option>"+"<option value='0' id='SH1'>"+ H1.join(" ") +"</option>"+"</option>"+"<option value='1' id='SH2'>"+ H2.join(" ") +"</option>"+"<option value='2' id='SH3'>"+ H3.join(" ") +"</option>"+"<option value='3' id='SH4'> "+ H4.join(" ") +"</option>"+"<option value='4' id='SH5'>"+ H5.join(" ") +"</option></select>"

	}

	if(optn=='---Select language---'){

		document.getElementById('senDropbox').innerHTML="";	
	}
	
}


function createTable(){
	 	document.getElementById("myTable").innerHTML="";
	 	document.getElementById('displayTxt').innerHTML="Select the POS tag for corresponding words"
	var x = document.createElement("TABLE");
	  x.setAttribute("id", "myTable");
	  document.body.appendChild(x);

	
	  var y = document.createElement("TR");
	  y.setAttribute("id", "myTr");
	  document.getElementById("myTable").appendChild(y);

	  var z = document.createElement("TD");
	  var t = document.createTextNode("LEXICON");
	  z.appendChild(t);
	  document.getElementById("myTr").appendChild(z);

	  	  var y = document.createElement("TR");	
	  y.setAttribute("id", "myTr");
	  document.getElementById("myTable").appendChild(y);

	  var z = document.createElement("TD");
	  var t = document.createTextNode("POS");
	  z.appendChild(t);
	  document.getElementById("myTr").appendChild(z);

	  	  var y = document.createElement("TR");
	  y.setAttribute("id", "myTr");
	  document.getElementById("myTable").appendChild(y);

	  var z = document.createElement("TD");
	  var t = document.createTextNode("");
	  z.appendChild(t);
	  document.getElementById("myTr").appendChild(z);

	  	  var y = document.createElement("TR");
	  y.setAttribute("id", "myTr");
	  document.getElementById("myTable").appendChild(y);

	  var z = document.createElement("TD");
	  var t = document.createTextNode("");
	  z.appendChild(t);
	  document.getElementById("myTr").appendChild(z);
	 
	var optn= document.getElementById('selected').value;
	if(optn=='english'){

		var selectedValue= SEnglish[document.getElementById('b').value];

	}

	if(optn=='hindi'){

		var selectedValue= SHindi[document.getElementById('b').value];

		}	
			
	for(var i=selectedValue.length-1; i>=0; i--){
		insertRows(selectedValue[i]);
	}

	document.getElementById('submitBtn').innerHTML="<button>Submit</button>";
}

		
function insertRows(y){
	var optn= document.getElementById('selected').value;
	var tab= document.getElementById('myTable');
	var row= tab.insertRow(1);
	var cell1= row.insertCell(0);
	var cell2= row.insertCell(1);
	var cell3= row.insertCell(2);
	var cell4= row.insertCell(3);
	cell1.innerHTML= y;
	if(optn=='english'){
		cell2.innerHTML=engList;
	}
	if(optn=='hindi'){
		cell2.innerHTML=hinList;
	}
}


