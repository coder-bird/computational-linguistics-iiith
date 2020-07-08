		var sentenceEng= [['John', 'ate', 'an','apple', 'before', 'afternoon'],['some', 'students', 'like','to', 'study', 'at', 'night'],['John', 'and', 'Mary','went', 'to', 'church'],['John', 'went', 'to', 'church', 'after', 'eating'],['did', 'he', 'go', 'to', 'market'],['the', 'woman', 'who', 'called', 'my', 'sister', 'sells', 'cosmetics'],['John', 'goes', 'to', 'the', 'library', 'and', 'studies'],['John', 'ate', 'an', 'apple', 'so', 'did', 'she'],['the', 'teacher', 'returned', 'the', 'book', 'after', 'she', 'noticed', 'the', 'error'],['I', 'told', 'her', 'that', 'I', 'bought', 'a', 'book', 'yesterday']];
		var sentenceHin= [['राम', 'और', 'श्याम', 'बाजार', 'गयें'], ['राम', 'सोया', 'और', 'श्याम', 'भी'], ['मैंने', 'उसे', 'बताया', 'कि', 'राम', 'सो', 'रहा', 'है'], ['राम', 'खाकर', 'सोया'], ['बिल्लियों', 'को', 'मारकर', 'कुत्ता', 'सो', 'गया'], ['एक', 'लाल', 'किताब', 'वहाँ', 'है'], ['एक', 'बड़ी', 'सी', 'किताब', 'वहाँ', 'है']];

	function chooseOptn(){
			document.getElementById("randomSentence").innerHTML="";
			document.getElementById("displayText2").innerHTML="";
			document.getElementById("reformBtn").innerHTML="";
			document.getElementById("formedSentence").innerHTML="";


			var x= document.getElementById("selected").value;
			var message="";
			if(x=='english'){
			message="Form a sentence (Declarative or Interrogative or any other type) from the given words<br>(select the buttons in proper order)";
			randomEngSentence();
		} 
			if(x=='hindi'){
			message="Form a sentence (Declarative or Interrogative or any other type) from the given words <br>(select the buttons in proper order)";
			randomHinSentence();
		}
		document.getElementById("displayText").innerHTML=message;
	}

	function randomEngSentence(){
		var index= sentenceEng[Math.floor(Math.random() * sentenceEng.length)];
		var shuffle= shuffleWords(index);
		for (var i = 0; i < shuffle.length; i++) {
		document.getElementById("randomSentence").innerHTML += "<button id='"+i+"' class='wordBtn' onclick='myFunction("+i+")'>" + shuffle[i] + "</button>";
	}
}

function myFunction(y) {
	document.getElementById("displayText2").innerHTML="Formed Sentence (after selecting words):";	
  	var x = document.getElementById(y);
    x.style.display = "none";
    document.getElementById("formedSentence").innerHTML= document.getElementById(y).textContent;
    document.getElementById("reformBtn").innerHTML= "<button>"+"Re-form the sentence"+"</button>"
  }

/*	function removeBtn(z,shuffle){
		alert("chacha")
		shuffle.remove(z);
		for (var i = 0; i < shuffle.length; i++) {
		document.getElementById("randomSentence").innerHTML += "<button class='wordBtn'>" + shuffle[i] + "</button>";
	}
	}
*/
	function randomHinSentence(){
		var index= sentenceHin[Math.floor(Math.random() * sentenceHin.length)];
		var shuffle= shuffleWords(index);
		for (var i = 0; i < shuffle.length; i++) {
		document.getElementById("randomSentence").innerHTML += "<button id='"+i+"' class='wordBtn' onclick='myFunction("+i+")'>" + shuffle[i] + "</button>";
	}
}

	function shuffleWords(arra1) {
    	var ctr = arra1.length, temp, index;
    	while (ctr > 0) {
        	index = Math.floor(Math.random() * ctr);
        	ctr--;
        	temp = arra1[ctr];
        	arra1[ctr] = arra1[index];
        	arra1[index] = temp;
    }
    return arra1;
}



/*function sentences(){
var sentence1= [['John', 'ate', 'an','apple', 'before', 'afternoon'],['some', 'students', 'like','to', 'study', 'at', 'night'],['John', 'and', 'Mary','went', 'to', 'church'],['John', 'went', 'to', 'church', 'after', 'eating'],['did', 'he', 'go', 'to', 'market'],['the', 'woman', 'who', 'called', 'my', 'sister', 'sells', 'cosmetics'],['John', 'goes', 'to', 'the', 'library', 'and', 'studies'],['John', 'ate', 'an', 'apple', 'so', 'did', 'she'],['the', 'teacher', 'returned', 'the', 'book', 'after', 'she', 'noticed', 'the', 'error'],['I', 'told', 'her', 'that', 'I', 'bought', 'a', 'book', 'yesterday']];
		var x=document.getElementById("1");
		x.innerHTML= sentence1[0]+" "+sentence1[1]+" "+sentence1[2]+" "+sentence1[3]+" "+sentence1[4]+" "+sentence1[5];
		var x=document.getElementById("2");
		x.innerHTML= sentence1[4]+" "+sentence1[5]+" "+sentence1[0]+" "+sentence1[1]+" "+sentence1[2]+" "+sentence1[3];
		var x=document.getElementById("3");
		x.innerHTML= sentence1[0]+" "+sentence1[4]+" "+sentence1[5]+" "+sentence1[1]+" "+sentence1[2]+" "+sentence1[3];
		
		var sentence2= ['some', 'students', 'like','to', 'study', 'at', 'night']
		var x=document.getElementById("4");
		x.innerHTML= sentence2[0]+" "+sentence2[1]+" "+sentence2[2]+" "+sentence2[3]+" "+sentence2[4]+" "+sentence2[5]+" "+sentence2[6];
		var x=document.getElementById("5");
		x.innerHTML= sentence2[5]+" "+sentence2[6]+" "+sentence2[0]+" "+sentence2[1]+" "+sentence2[2]+" "+sentence2[3]+" "+sentence2[4]

		var sentence3= ['John', 'and', 'Mary','went', 'to', 'church']
		var x=document.getElementById("6");
		x.innerHTML= sentence3[0]+" "+sentence3[1]+" "+sentence3[2]+" "+sentence3[3]+" "+sentence3[4]+" "+sentence3[5];
		var x=document.getElementById("7");
		x.innerHTML= sentence3[2]+" "+sentence3[1]+" "+sentence3[0]+" "+sentence3[3]+" "+sentence3[4]+" "+sentence3[5];

		var sentence4= ['John', 'went', 'to', 'church', 'after', 'eating'];
		var x=document.getElementById("8");
		x.innerHTML= sentence4[0]+" "+sentence4[1]+" "+sentence4[2]+" "+sentence4[3]+" "+sentence4[4]+" "+sentence4[5];
		var x=document.getElementById("9");
		x.innerHTML= sentence4[4]+" "+sentence4[5]+" "+sentence4[0]+" "+sentence4[1]+" "+sentence4[2]+" "+sentence4[3];
		var x=document.getElementById("10");
		x.innerHTML= sentence4[0]+" "+sentence4[4]+" "+sentence4[5]+" "+sentence4[1]+" "+sentence4[2]+" "+sentence4[3];

		var sentence5= ['did', 'he', 'go', 'to', 'market']
		var x=document.getElementById("11");
		x.innerHTML= sentence5[0]+" "+sentence5[1]+" "+sentence5[2]+" "+sentence5[3]+" "+sentence5[4];
		var x=document.getElementById("12");
		x.innerHTML= sentence5[1]+" "+sentence5[0]+" "+sentence5[2]+" "+sentence5[3]+" "+sentence5[4];


		var sentence6= ['the', 'woman', 'who', 'called', 'my', 'sister', 'sells', 'cosmetics'];
		var x=document.getElementById("13");
		x.innerHTML= sentence6[0]+" "+sentence6[1]+" "+sentence6[2]+" "+sentence6[3]+" "+sentence6[4]+" "+sentence6[5]+" "+sentence6[6]+" "+sentence6[7];
		var x=document.getElementById("14");
		x.innerHTML= sentence6[0]+" "+sentence6[1]+" "+sentence6[2]+" "+sentence6[6]+" "+sentence6[7]+" "+sentence6[3]+" "+sentence6[4]+" "+sentence6[5];
		var x=document.getElementById("15");
		x.innerHTML= sentence6[4]+" "+sentence6[5]+" "+sentence6[2]+" "+sentence6[6]+" "+sentence6[7]+" "+sentence6[3]+" "+sentence6[0]+" "+sentence6[1];
		var x=document.getElementById("16");
		x.innerHTML= sentence6[4]+" "+sentence6[5]+" "+sentence6[2]+" "+sentence6[3]+" "+sentence6[0]+" "+sentence6[1]+" "+sentence6[6]+" "+sentence6[7];

		var sentence7= ['John', 'goes', 'to', 'the', 'library', 'and', 'studies']
		var x=document.getElementById("17");
		x.innerHTML= sentence7[0]+" "+sentence7[1]+" "+sentence7[2]+" "+sentence7[3]+" "+sentence7[4]+" "+sentence7[5]+" "+sentence7[6];
		var x=document.getElementById("18");
		x.innerHTML= sentence7[0]+" "+sentence7[6]+" "+sentence7[5]+" "+sentence7[1]+" "+sentence7[2]+" "+sentence7[3]+" "+sentence7[4];

		var sentence8= ['John', 'ate', 'an', 'apple', 'so', 'did', 'she']
		var x=document.getElementById("19");
		x.innerHTML= sentence8[0]+" "+sentence8[1]+" "+sentence8[2]+" "+sentence8[3]+" "+sentence8[4]+" "+sentence8[5]+" "+sentence8[6];
		var x=document.getElementById("20");
		x.innerHTML= sentence8[6]+" "+sentence8[1]+" "+sentence8[2]+" "+sentence8[3]+" "+sentence8[4]+" "+sentence8[5]+" "+sentence8[0];

		var sentence9= ['the', 'teacher', 'returned', 'the', 'book', 'after', 'she', 'noticed', 'the', 'error'];
		var x=document.getElementById("21");
		x.innerHTML= sentence9[0]+" "+sentence9[1]+" "+sentence9[2]+" "+sentence9[3]+" "+sentence9[4]+" "+sentence9[5]+" "+sentence9[6]+" "+sentence9[7]+" "+sentence9[8]+" "+sentence9[9];
		var x=document.getElementById("22");
		x.innerHTML= sentence9[0]+" "+sentence9[1]+" "+sentence9[7]+" "+sentence9[3]+" "+sentence9[9]+" "+sentence9[5]+" "+sentence9[6]+" "+sentence9[2]+" "+sentence9[8]+" "+sentence9[4];
		var x=document.getElementById("23");
		x.innerHTML= sentence9[5]+" "+sentence9[0]+" "+sentence9[1]+" "+sentence9[2]+" "+sentence9[3]+" "+sentence9[4]+" "+sentence9[6]+" "+sentence9[7]+" "+sentence9[8]+" "+sentence9[9];
		var x=document.getElementById("24");
		x.innerHTML= sentence9[5]+" "+sentence9[0]+" "+sentence9[1]+" "+sentence9[7]+" "+sentence9[3]+" "+sentence9[9]+" "+sentence9[6]+" "+sentence9[2]+" "+sentence9[8]+" "+sentence9[4];
		var x=document.getElementById("25");
		x.innerHTML= sentence9[6]+" "+sentence9[2]+" "+sentence9[0]+" "+sentence9[4]+" "+sentence9[5]+" "+sentence9[3]+" "+sentence9[1]+" "+sentence9[7]+" "+sentence9[8]+" "+sentence9[9];
		var x=document.getElementById("26");
		x.innerHTML= sentence9[6]+" "+sentence9[7]+" "+sentence9[0]+" "+sentence9[9]+" "+sentence9[5]+" "+sentence9[3]+" "+sentence9[1]+" "+sentence9[2]+" "+sentence9[8]+" "+sentence9[4];
		var x=document.getElementById("27");
		x.innerHTML= sentence9[5]+" "+sentence9[6]+" "+sentence9[2]+" "+sentence9[0]+" "+sentence9[4]+" "+sentence9[3]+" "+sentence9[1]+" "+sentence9[7]+" "+sentence9[8]+" "+sentence9[9];
		var x=document.getElementById("28");
		x.innerHTML= sentence9[5]+" "+sentence9[6]+" "+sentence9[7]+" "+sentence9[0]+" "+sentence9[9]+" "+sentence9[3]+" "+sentence9[1]+" "+sentence9[2]+" "+sentence9[8]+" "+sentence9[4];

		var sentence10= ['I', 'told', 'her', 'that', 'I', 'bought', 'a', 'book', 'yesterday'];
		var x=document.getElementById("29");
		x.innerHTML= sentence10[0]+" "+sentence10[1]+" "+sentence10[2]+" "+sentence10[3]+" "+sentence10[4]+" "+sentence10[5]+" "+sentence10[6]+" "+sentence10[7]+" "+sentence10[8];
		var x=document.getElementById("30");
		x.innerHTML= sentence10[0]+" "+sentence10[1]+" "+sentence10[2]+" "+sentence10[8]+" "+sentence10[3]+" "+sentence10[4]+" "+sentence10[5]+" "+sentence10[6]+" "+sentence10[7];
		var x=document.getElementById("31");
		x.innerHTML= sentence10[8]+" "+sentence10[0]+" "+sentence10[1]+" "+sentence10[2]+" "+sentence10[3]+" "+sentence10[4]+" "+sentence10[5]+" "+sentence10[6]+" "+sentence10[7];
		var x=document.getElementById("32");
		x.innerHTML= sentence10[0]+" "+sentence10[5]+" "+sentence10[6]+" "+sentence10[7]+" "+sentence10[3]+" "+sentence10[4]+" "+sentence10[1]+" "+sentence10[2]+" "+sentence10[8];
		var x=document.getElementById("33");
		x.innerHTML= sentence10[0]+" "+sentence10[5]+" "+sentence10[6]+" "+sentence10[7]+" "+sentence10[8]+" "+sentence10[3]+" "+sentence10[4]+" "+sentence10[1]+" "+sentence10[2];
		var x=document.getElementById("34");
		x.innerHTML= sentence10[8]+" "+sentence10[0]+" "+sentence10[5]+" "+sentence10[6]+" "+sentence10[7]+" "+sentence10[3]+" "+sentence10[4]+" "+sentence10[1]+" "+sentence10[2];
		var sentence11= ['राम', 'और', 'श्याम', 'बाजार', 'गयें'];
		var x=document.getElementById("35");
		x.innerHTML= sentence11[0]+" "+sentence11[1]+" "+sentence11[2]+" "+sentence11[3]+" "+sentence11[4];
		var x=document.getElementById("36");
		x.innerHTML= sentence11[0]+" "+sentence11[1]+" "+sentence11[2]+" "+sentence11[4]+" "+sentence11[3];
		var x=document.getElementById("37");
		x.innerHTML= sentence11[3]+" "+sentence11[4]+" "+sentence11[0]+" "+sentence11[1]+" "+sentence11[2];
		var x=document.getElementById("38");
		x.innerHTML= sentence11[4]+" "+sentence11[3]+" "+sentence11[0]+" "+sentence11[1]+" "+sentence11[2];
		var sentence12= ['राम', 'सोया', 'और', 'श्याम', 'भी'];
		var x=document.getElementById("39");
		x.innerHTML= sentence12[0]+" "+sentence12[1]+" "+sentence12[2]+" "+sentence12[3]+" "+sentence12[4];
		var x=document.getElementById("40");
		x.innerHTML= sentence12[3]+" "+sentence12[1]+" "+sentence12[2]+" "+sentence12[0]+" "+sentence12[4];
		var x=document.getElementById("41");
		x.innerHTML= sentence12[1]+" "+sentence12[3]+" "+sentence12[2]+" "+sentence12[0]+" "+sentence12[4];
		var x=document.getElementById("42");
		x.innerHTML= sentence12[1]+" "+sentence12[0]+" "+sentence12[2]+" "+sentence12[3]+" "+sentence12[4];
		var sentence13= ['मैंने', 'उसे', 'बताया', 'कि', 'राम', 'सो', 'रहा', 'है'];
		var x=document.getElementById("43");
		x.innerHTML= sentence13[0]+" "+sentence13[1]+" "+sentence13[2]+" "+sentence13[3]+" "+sentence13[4]+" "+sentence13[5]+" "+sentence13[6]+" "+sentence13[7];
		var x=document.getElementById("44");
		x.innerHTML= sentence13[0]+" "+sentence13[1]+" "+sentence13[2]+" "+sentence13[3]+" "+sentence13[5]+" "+sentence13[6]+" "+sentence13[7]+" "+sentence13[4];
		var x=document.getElementById("45");
		x.innerHTML= sentence13[1]+" "+sentence13[0]+" "+sentence13[2]+" "+sentence13[3]+" "+sentence13[4]+" "+sentence13[5]+" "+sentence13[6]+" "+sentence13[7];
		var x=document.getElementById("46");
		x.innerHTML= sentence13[1]+" "+sentence13[0]+" "+sentence13[2]+" "+sentence13[3]+" "+sentence13[5]+" "+sentence13[6]+" "+sentence13[7]+" "+sentence13[4];
		var x=document.getElementById("47");
		x.innerHTML= sentence13[0]+" "+sentence13[2]+" "+sentence13[1]+" "+sentence13[3]+" "+sentence13[4]+" "+sentence13[5]+" "+sentence13[6]+" "+sentence13[7];
		var x=document.getElementById("48");
		x.innerHTML= sentence13[0]+" "+sentence13[2]+" "+sentence13[1]+" "+sentence13[3]+" "+sentence13[5]+" "+sentence13[6]+" "+sentence13[7]+" "+sentence13[4];
		var x=document.getElementById("49");
		x.innerHTML= sentence13[1]+" "+sentence13[2]+" "+sentence13[0]+" "+sentence13[3]+" "+sentence13[4]+" "+sentence13[5]+" "+sentence13[6]+" "+sentence13[7];
		var x=document.getElementById("50");
		x.innerHTML= sentence13[1]+" "+sentence13[2]+" "+sentence13[0]+" "+sentence13[3]+" "+sentence13[5]+" "+sentence13[6]+" "+sentence13[7]+" "+sentence13[4];
		var x=document.getElementById("51");
		x.innerHTML= sentence13[2]+" "+sentence13[0]+" "+sentence13[1]+" "+sentence13[3]+" "+sentence13[4]+" "+sentence13[5]+" "+sentence13[6]+" "+sentence13[7];
		var x=document.getElementById("52");
		x.innerHTML= sentence13[2]+" "+sentence13[0]+" "+sentence13[1]+" "+sentence13[3]+" "+sentence13[5]+" "+sentence13[6]+" "+sentence13[7]+" "+sentence13[4];
		var x=document.getElementById("53");
		x.innerHTML= sentence13[2]+" "+sentence13[1]+" "+sentence13[0]+" "+sentence13[3]+" "+sentence13[4]+" "+sentence13[5]+" "+sentence13[6]+" "+sentence13[7];
		var x=document.getElementById("54");
		x.innerHTML= sentence13[2]+" "+sentence13[1]+" "+sentence13[0]+" "+sentence13[3]+" "+sentence13[5]+" "+sentence13[6]+" "+sentence13[7]+" "+sentence13[4];
		var sentence14= ['राम', 'खाकर', 'सोया'];
		var x=document.getElementById("55");
		x.innerHTML= sentence14[0]+" "+sentence14[1]+" "+sentence14[2];
		var x=document.getElementById("56");
		x.innerHTML= sentence14[1]+" "+sentence14[0]+" "+sentence14[2];
		var x=document.getElementById("57");
		x.innerHTML= sentence14[0]+" "+sentence14[2]+" "+sentence14[1];
		var x=document.getElementById("58");
		x.innerHTML= sentence14[1]+" "+sentence14[2]+" "+sentence14[0];
		var x=document.getElementById("59");
		x.innerHTML= sentence14[2]+" "+sentence14[0]+" "+sentence14[1];
		var x=document.getElementById("60");
		x.innerHTML= sentence14[2]+" "+sentence14[1]+" "+sentence14[2];
		var sentence15= ['बिल्लियों', 'को', 'मारकर', 'कुत्ता', 'सो', 'गया'];
		var x=document.getElementById("61");
		x.innerHTML= sentence15[0]+" "+sentence15[1]+" "+sentence15[2]+" "+sentence15[3]+" "+sentence15[4]+" "+sentence15[5];
		var x=document.getElementById("62");
		x.innerHTML= sentence15[2]+" "+sentence15[0]+" "+sentence15[1]+" "+sentence15[3]+" "+sentence15[4]+" "+sentence15[5];
		var x=document.getElementById("63");
		x.innerHTML= sentence15[0]+" "+sentence15[1]+" "+sentence15[2]+" "+sentence15[4]+" "+sentence15[5]+" "+sentence15[3];
		var x=document.getElementById("64");
		x.innerHTML= sentence15[2]+" "+sentence15[0]+" "+sentence15[1]+" "+sentence15[4]+" "+sentence15[5]+" "+sentence15[3];
		var x=document.getElementById("65");
		x.innerHTML= sentence15[3]+" "+sentence15[4]+" "+sentence15[5]+" "+sentence15[0]+" "+sentence15[1]+" "+sentence15[2];
		var x=document.getElementById("66");
		x.innerHTML= sentence15[3]+" "+sentence15[4]+" "+sentence15[5]+" "+sentence15[2]+" "+sentence15[0]+" "+sentence15[1];
		var x=document.getElementById("67");
		x.innerHTML= sentence15[4]+" "+sentence15[5]+" "+sentence15[3]+" "+sentence15[0]+" "+sentence15[1]+" "+sentence15[2];
		var x=document.getElementById("68");
		x.innerHTML= sentence15[4]+" "+sentence15[5]+" "+sentence15[3]+" "+sentence15[2]+" "+sentence15[0]+" "+sentence15[1];
		var sentence16= ['एक', 'लाल', 'किताब', 'वहाँ', 'है'];
		var x=document.getElementById("69");
		x.innerHTML= sentence16[0]+" "+sentence16[1]+" "+sentence16[2]+" "+sentence16[3]+" "+sentence16[4];
		var x=document.getElementById("70");
		x.innerHTML= sentence16[0]+" "+sentence16[1]+" "+sentence16[2]+" "+sentence16[4]+" "+sentence16[3];
		var x=document.getElementById("71");
		x.innerHTML= sentence16[3]+" "+sentence16[4]+" "+sentence16[0]+" "+sentence16[1]+" "+sentence16[2];
		var x=document.getElementById("72");
		x.innerHTML= sentence16[4]+" "+sentence16[3]+" "+sentence16[0]+" "+sentence16[1]+" "+sentence16[2];
		var sentence17= ['एक', 'बड़ी', 'सी', 'किताब', 'वहाँ', 'है'];
		var x=document.getElementById("73");
		x.innerHTML= sentence17[0]+" "+sentence17[1]+" "+sentence17[2]+" "+sentence17[3]+" "+sentence17[4]+" "+sentence17[5];
		var x=document.getElementById("74");
		x.innerHTML= sentence17[0]+" "+sentence17[1]+" "+sentence17[2]+" "+sentence17[3]+" "+sentence17[5]+" "+sentence17[4];
		var x=document.getElementById("75");
		x.innerHTML= sentence17[1]+" "+sentence17[2]+" "+sentence17[0]+" "+sentence17[3]+" "+sentence17[4]+" "+sentence17[5];
		var x=document.getElementById("76");
		x.innerHTML= sentence17[1]+" "+sentence17[2]+" "+sentence17[0]+" "+sentence17[3]+" "+sentence17[5]+" "+sentence17[4];
		var x=document.getElementById("77");
		x.innerHTML= sentence17[4]+" "+sentence17[5]+" "+sentence17[0]+" "+sentence17[1]+" "+sentence17[2]+" "+sentence17[3];
		var x=document.getElementById("78");
		x.innerHTML= sentence17[4]+" "+sentence17[5]+" "+sentence17[1]+" "+sentence17[2]+" "+sentence17[0]+" "+sentence17[3];
		var x=document.getElementById("79");
		x.innerHTML= sentence17[5]+" "+sentence17[4]+" "+sentence17[0]+" "+sentence17[1]+" "+sentence17[2]+" "+sentence17[3];
		var x=document.getElementById("80");
		x.innerHTML= sentence17[5]+" "+sentence17[4]+" "+sentence17[1]+" "+sentence17[2]+" "+sentence17[0]+" "+sentence17[3]; 
	} */

