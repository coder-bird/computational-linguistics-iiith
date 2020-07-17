SE1=["The", "child", "liked", "the", "chocolate."]
SE2=["She", "was", "stopped", "by", "the", "bravest", "knight."]
SE3=["Mary", "baked", "a", "cake", "for", "his", "birthday"]
SE4=["She", "decorated", "the", "cake", "carefully"]
SE5=["Mary", "wore", "a", "dress", "with", "polka", "dots."]

SH1=["राम", "ने", "सीता", "के", "लिए", "फल", "तोड़ा|"]
SH2=["छोटे", "बच्चे", "पाठशाला", "जल्दी", "आयेंगे|"]
SH3=["मेहनत", "का", "फल", "मीठा", "होता", "है|"]
SH4=["वाह!", "वह", "खूबसूरत", "है।"]
SH5=["पेड़", "से", "पत्ते", "गिर", "गए।"]

/*document.getElementById('1').innerHTML= SE1.join(' ');
document.getElementById('2').innerHTML= SE2.join(' ');
document.getElementById('3').innerHTML= SE3.join(' ');
document.getElementById('4').innerHTML= SE4.join(' ');
document.getElementById('5').innerHTML= SE5.join(' ');
document.getElementById('6').innerHTML= SH1.join(' ');
document.getElementById('7').innerHTML= SH2.join(' ');
document.getElementById('8').innerHTML= SH3.join(' ');
document.getElementById('9').innerHTML= SH4.join(' ');
document.getElementById('10').innerHTML= SH5.join(' '); */
function chooseLang(){
	var optn= document.getElementById('selected').value;
	if(optn=='english'){
		document.getElementById('senDropbox').innerHTML="<select><option value='null'>"+ "---Select a sentence---" +"</option>"+"<option value='1'>"+ SE1.join(" ") +"</option>"+"</option>"+"<option value='2'>"+ SE2.join(" ") +"</option>"+"</option>"+"<option value='3'>"+ SE3.join(" ") +"</option>"+"</option>"+"<option value='4'>"+ SE4.join(" ") +"</option>"+"</option>"+"<option value='5'>"+ SE5.join(" ") +"</option></select>"
	}
	if(optn=='hindi'){
		document.getElementById('senDropbox').innerHTML="<select><option value='null'>"+ "---Select a sentence---" +"</option>"+"<option value='6'>"+ SH1.join(" ") +"</option>"+"</option>"+"<option value='7'>"+ SH2.join(" ") +"</option>"+"</option>"+"<option value='8'>"+ SH3.join(" ") +"</option>"+"</option>"+"<option value='9'>"+ SH4.join(" ") +"</option>"+"</option>"+"<option value='10'>"+ SH5.join(" ") +"</option></select>"
	}
	
}