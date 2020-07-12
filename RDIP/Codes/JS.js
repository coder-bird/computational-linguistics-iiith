		var sentenceEng= [['John', 'ate', 'an','apple', 'before', 'afternoon'],['some', 'students', 'like','to', 'study', 'at', 'night'],['John', 'and', 'Mary','went', 'to', 'church'],['John', 'went', 'to', 'church', 'after', 'eating'],['did', 'he', 'go', 'to', 'market'],['the', 'woman', 'who', 'called', 'my', 'sister', 'sells', 'cosmetics'],['John', 'goes', 'to', 'the', 'library', 'and', 'studies'],['John', 'ate', 'an', 'apple', 'so', 'did', 'she'],['the', 'teacher', 'returned', 'the', 'book', 'after', 'she', 'noticed', 'the', 'error'],['I', 'told', 'her', 'that', 'I', 'bought', 'a', 'book', 'yesterday']];
		var sentenceHin= [['राम', 'और', 'श्याम', 'बाजार', 'गयें'], ['राम', 'सोया', 'और', 'श्याम', 'भी'], ['मैंने', 'उसे', 'बताया', 'कि', 'राम', 'सो', 'रहा', 'है'], ['राम', 'खाकर', 'सोया'], ['बिल्लियों', 'को', 'मारकर', 'कुत्ता', 'सो', 'गया'], ['एक', 'लाल', 'किताब', 'वहाँ', 'है'], ['एक', 'बड़ी', 'सी', 'किताब', 'वहाँ', 'है']];
		var shuffle="";
		var displayArray=[];
		var SE1=[["John", "ate", "an", "apple", "before", "afternoon"],["before", "afternoon", "John", "ate", "an", "apple"],["John", "before", "afternoon", "ate", "an", "apple"]];
		var SE2=[["some", "students", "like", "to", "study", "at", "night"],["at", "night", "some", "students", "like", "to", "study"]];
		var SE3=[["John", "and", "Mary", "went", "to", "church"],["Mary", "and", "John", "went", "to", "church"]];
		var SE4=[["John", "went", "to", "church", "after", "eating"],["after", "eating", "John", "went", "to", "church"],["John", "after", "eating", "went", "to", "church"]];
		var SE5=[["did", "he", "go", "to", "market"],["he", "did", "go", "to", "market"]];
		var SE6=[["the", "woman", "who", "called", "my", "sister", "sells", "cosmetics"],["the", "woman", "who", "sells", "cosmetics", "called", "my", "sister"],["my", "sister", "who", "sells", "cosmetics", "called", "the", "woman"],["my", "sister", "who", "called", "the", "woman", "sells", "cosmetics"]];
		var SE7=[["John", "goes", "to", "the", "library", "and", "studies"],["John", "studies", "and", "goes", "to", "the", "library"]];
		var SE8=[["John", "ate", "an", "apple", "so", "did", "she"],["she", "ate", "an", "apple", "so", "did", "John"]];
		var SE9=[["the", "teacher", "returned", "the", "book", "after", "she", "noticed", "the", "error"],["the", "teacher", "noticed", "the", "error", "after", "she", "returned", "the", "book"],["after", "the", "teacher", "returned", "the", "book", "she", "noticed", "the", "error"],["after", "the", "teacher", "noticed", "the", "error", "she", "returned", "the", "book"],["she", "returned", "the", "book", "after", "the", "teacher", "noticed", "the", "error"],["she", "noticed", "the", "error", "after", "the", "teacher", "returned", "the", "book"],["after", "she", "returned", "the", "book", "the", "teacher", "noticed", "the", "error"],["after", "she", "noticed", "the", "error", "the", "teacher", "returned", "the", "book"]];
		var SE10=[["I", "told", "her", "that", "I", "bought", "a", "book", "yesterday"],["I", "told", "her", "yesterday", "that", "I", "bought", "a", "book"],["yesterday", "I", "told", "her", "that", "I", "bought", "a", "book"],["I", "bought", "a", "book", "that", "I", "told", "her", "yesterday"],["I", "bought", "a", "book", "yesterday", "that", "I", "told", "her"],["yesterday", "I", "bought", "a", "book", "that", "I", "told", "her"]];
		var englishArray=[SE1,SE2,SE3,SE4,SE5,SE6,SE7,SE8,SE8,SE9,SE10];
		var SH1=[["राम", "और", "श्याम", "बाजार", "गयें"],["राम", "और", "श्याम", "गयें", "बाजार"],["बाजार", "गयें", "राम", "और", "श्याम"],["गयें", "बाजार", "राम", "और", "श्याम"]]
		var SH2=[["राम", "सोया", "और", "श्याम", "भी"],["श्याम", "सोया", "और", "राम", "भी"],["सोया", "श्याम", "और", "राम", "भी"],["सोया", "राम", "और", "श्याम", "भी"]]
		var SH3=[['मैंने', 'उसे', 'बताया', 'कि', 'राम', 'सो', 'रहा', 'है'],['मैंने', 'उसे', 'बताया', 'कि', 'सो', 'रहा', 'है', 'राम'],['उसे', 'मैंने', 'बताया', 'कि', 'राम', 'सो', 'रहा', 'है'],['उसे', 'मैंने', 'बताया', 'कि', 'सो', 'रहा', 'है', 'राम'],['मैंने', 'बताया', 'उसे', 'कि', 'राम', 'सो', 'रहा', 'है'],['मैंने', 'बताया', 'उसे', 'कि', 'सो', 'रहा', 'है', 'राम'],['उसे', 'बताया', 'मैंने', 'कि', 'राम', 'सो', 'रहा', 'है'],['उसे', 'बताया', 'मैंने', 'कि', 'सो', 'रहा', 'है', 'राम'],['बताया', 'मैंने', 'उसे', 'कि', 'राम', 'सो', 'रहा', 'है'],['बताया', 'मैंने', 'उसे', 'कि', 'सो', 'रहा', 'है', 'राम'],['बताया', 'उसे', 'मैंने', 'कि', 'राम', 'सो', 'रहा', 'है'],['बताया', 'उसे', 'मैंने', 'कि', 'सो', 'रहा', 'है', 'राम']];
		var SH4=[['राम', 'खाकर', 'सोया'],['खाकर', 'राम', 'सोया'],['राम', 'सोया', 'खाकर'],['खाकर', 'सोया', 'राम'],['सोया', 'राम', 'खाकर'],['सोया', 'खाकर', 'राम']];
		var SH5=[['बिल्लियों', 'को', 'मारकर', 'कुत्ता', 'सो', 'गया'],['मारकर', 'बिल्लियों', 'को', 'कुत्ता', 'सो', 'गया'],['बिल्लियों', 'को', 'मारकर', 'सो', 'गया', 'कुत्ता'],['मारकर', 'बिल्लियों', 'को', 'सो', 'गया', 'कुत्ता'],['कुत्ता', 'सो', 'गया', 'बिल्लियों', 'को', 'मारकर'],['कुत्ता', 'सो', 'गया', 'मारकर', 'बिल्लियों', 'को'],['सो', 'गया', 'कुत्ता', 'बिल्लियों', 'को', 'मारकर'],['सो', 'गया', 'कुत्ता', 'मारकर', 'बिल्लियों', 'को']];
		var SH6=[['एक', 'लाल', 'किताब', 'वहाँ', 'है'],['एक', 'लाल', 'किताब', 'है', 'वहाँ'],['वहाँ', 'है', 'एक', 'लाल', 'किताब'],['है', 'वहाँ', 'एक', 'लाल', 'किताब']];
		var SH7=[['एक', 'बड़ी', 'सी', 'किताब', 'वहाँ', 'है'],['एक', 'बड़ी', 'सी', 'किताब', 'है', 'वहाँ'],['बड़ी', 'सी', 'एक', 'किताब', 'वहाँ', 'है'],['बड़ी', 'सी', 'एक', 'किताब', 'है', 'वहाँ'],['वहाँ', 'है', 'एक', 'बड़ी', 'सी', 'किताब'],['वहाँ', 'है', 'बड़ी', 'सी', 'एक', 'किताब'],['है', 'वहाँ', 'एक', 'बड़ी', 'सी', 'किताब'],['है', 'वहाँ', 'बड़ी', 'सी', 'एक', 'किताब']];
		var hindiArray=[SH1,SH2,SH3,SH4,SH5,SH6,SH7];
		var correctSentences=[];
		var finalSentence="";
	function chooseOptn(){
			document.getElementById("randomSentence").innerHTML="";
			document.getElementById("displayText2").innerHTML="";
			document.getElementById("reformBtn").innerHTML="";
			document.getElementById("formedSentence").innerHTML="";
			document.getElementById("wrongA").innerHTML="";
			document.getElementById("correctA").innerHTML="";
			document.getElementById("getAnswer").innerHTML="";
			document.getElementById("answerList").innerHTML="";
			document.getElementById("hideBtn").innerHTML="";
			document.getElementById("getAnswer1").innerHTML="";

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
		displayArray=[];
		document.getElementById("correctnessBtn").innerHTML="";
		var index= sentenceEng[Math.floor(Math.random() * sentenceEng.length)];
		shuffle= shuffleWords(index);
		for (var i = 0; i < shuffle.length; i++) {
		document.getElementById("randomSentence").innerHTML += "<button id='"+i+"' class='wordBtn' onclick='myFunction("+i+")'>" + shuffle[i] + "</button>";
	}
}

	function randomHinSentence(){
		displayArray=[];
		document.getElementById("correctnessBtn").innerHTML="";
		var index= sentenceHin[Math.floor(Math.random() * sentenceHin.length)];
		shuffle= shuffleWords(index);
		for (var i = 0; i < shuffle.length; i++) {
		document.getElementById("randomSentence").innerHTML += "<button id='"+i+"' class='wordBtn' onclick='myFunction("+i+")'>" + shuffle[i] + "</button>";
	}
}

function myFunction(y) {
	document.getElementById("displayText2").innerHTML="Formed Sentence (after selecting words):";	
  	var x = document.getElementById(y);
    x.style.display = "none";
	displayArray.push(document.getElementById(y).textContent);
	finalSentence= displayArray.join(' ');
	document.getElementById("formedSentence").innerHTML= finalSentence;
    document.getElementById("reformBtn").innerHTML= "<button id='reform' onclick='resetBtn()'>"+"Re-form the sentence"+"</button>";
    if(displayArray.length == shuffle.length){
    	document.getElementById("correctnessBtn").innerHTML = "<button onclick='checkCorrectness()' class='correctBtn'>" +"Check correctness of the sentence"+ "</button>";
    }
  }

function resetBtn(){
	displayArray=[];
	document.getElementById("randomSentence").innerHTML="";
	document.getElementById("displayText2").innerHTML="";
	document.getElementById("reformBtn").innerHTML="";
	document.getElementById("formedSentence").innerHTML=""; 
	document.getElementById("wrongA").innerHTML="";
	document.getElementById("correctA").innerHTML="";
	document.getElementById("getAnswer").innerHTML="";
	document.getElementById("correctnessBtn").innerHTML="";
	document.getElementById("answerList").innerHTML="";
	document.getElementById("hideBtn").innerHTML="";
	document.getElementById("getAnswer1").innerHTML="";
	for (var i = 0; i < shuffle.length; i++) {
		document.getElementById("randomSentence").innerHTML += "<button id='"+i+"' class='wordBtn' onclick='myFunction("+i+")'>" + shuffle[i] + "</button>";
	}
}

function checkCorrectness(){
	var languageArray=document.getElementById("selected").value;
	var found=false;
	if(languageArray=='english'){
	for(var k=0; k<englishArray.length; k++){
		if(found==true){
			break;
		} else{
			for(var i=0; i<englishArray[k].length; i++){
				if(found==true){
				break;
				} else{
					for(var j=0; j<englishArray[k][i].length; j++){

						if(displayArray[j] == englishArray[k][i][j]){
							found=true;
						} else{
							found=false;
							break;
						}
					}
				}
			}
		}
	}
}
	if(languageArray=='hindi'){
	for(var k=0; k<hindiArray.length; k++){
		if(found==true){
			break;
		} else{
			for(var i=0; i<hindiArray[k].length; i++){
				if(found==true){
				break;
				} else{
					for(var j=0; j<hindiArray[k][i].length; j++){

						if(displayArray[j] == hindiArray[k][i][j]){
							found=true;
						} else{
							found=false;
							break;
						}
					}
				}
			}
		}
	}
	}
	if(found == true){
				document.getElementById("wrongA").innerHTML="";
				document.getElementById("correctA").innerHTML="Correct answer"+" "+"<i class='fa fa-smile-o' aria-hidden='true'></i>";
				} else{
				document.getElementById("correctA").innerHTML="";
				document.getElementById("wrongA").innerHTML="Wrong answer"+" "+"<i class='fa fa-frown-o' aria-hidden='true'></i>";
				document.getElementById("getAnswer").innerHTML="<button class='correctAnsBtn' onclick='getAnswers()'>"+"GET CORRECT SENTENCE"+"</button>";
				}

}

function getAnswers(){
  	correctSentences=[];
  	var count=0;
  	var isFound=false;
 	var answerExists= document.getElementById("answerList").textContent;
	var languageArray=document.getElementById("selected").value;

if(languageArray == 'english'){
if(answerExists == ""){ 
  for(var k=0; k<englishArray.length+1; k++)
   
  {
	//alert("Entering in iteration of main list :" +k);
	if(isFound==true && count== englishArray[k-1][0].length)
        {
          //alert(" found is true and the first value of K is :"+k);
			var z = k;
          //alert("value of z is set to :" +z);
		if (z==1)
           {
			for(p=0; p<englishArray[z-1].length;p++)
               {
                  correctSentences[p]=(englishArray[z-1][p]);
                  //alert("Inside for loop to get correctSentences when z=1 and loop number is :"+p+"  : and the value of correctSentences is ; "+correctSentences);
                  //alert("value of z is :"+z);
               }
            }
		if (z>1)
           {
			for(p=0; p<englishArray[z-1].length;p++)
               {
                  correctSentences[p]=(englishArray[k-1][p]);
                 // alert("Inside for loop to get correctSentences when z>1 and p loop number is :"+p+"  : and the value of correctSentences is ; "+correctSentences);
                  //alert("value of z is :"+z);
               }
                   
            }
         
            break;
        }
      	for(var i=0; i<displayArray.length; i++)
		{
            //alert("Inside for loop and the first element of englishArray is : "+englishArray[k][0]);
            //alert("inside for loop :"+ i +": and displayArray element is :"+displayArray[i]);
            isFound=englishArray[k][0].includes(displayArray[i]);
            //alert("inside for loop :"+ i +": is found flag "+isFound);
			if(isFound==true)
            {
              count++;
              //alert("Increasing Count : "+ count);
            }

            if(isFound==false)
            {
              count= 0;
              break;
              
            }

          }
}
  //alert(correctSentences[0]);
    //alert(correctSentences[1]);

  //alert(correctSentences);
  for(j=0; j<correctSentences.length;j++)
  {
	//alert("Found correct sentences :"+correctSentences[j]);
    document.getElementById("answerList").innerHTML+=correctSentences[j].join(" ")+"<br>";
  }
  document.getElementById("hideBtn").innerHTML="<button class='hide' onclick='hideAnswers()'>"+ "hide the correct sentence" + "</button>";
  document.getElementById("getAnswer").innerHTML="";
}
}

if(languageArray == 'hindi'){
if(answerExists == ""){ 
  for(var k=0; k<hindiArray.length+1; k++)   
  {
	//alert("Entering in iteration of main list :" +k);
	if(isFound==true && count== hindiArray[k-1][0].length)
        {
          //alert(" found is true and the first value of K is :"+k);
			var z = k;
          //alert("value of z is set to :" +z);
		if (z==1)
           {
			for(p=0; p<hindiArray[z-1].length;p++)
               {
                  correctSentences[p]=(hindiArray[z-1][p]);
                  //alert("Inside for loop to get correctSentences when z=1 and loop number is :"+p+"  : and the value of correctSentences is ; "+correctSentences);
                  //alert("value of z is :"+z);
               }
            }
		if (z>1)
           {
			for(p=0; p<hindiArray[z-1].length;p++)
               {
                  correctSentences[p]=(hindiArray[k-1][p]);
                 // alert("Inside for loop to get correctSentences when z>1 and p loop number is :"+p+"  : and the value of correctSentences is ; "+correctSentences);
                  //alert("value of z is :"+z);
               }
                   
            }
         
            break;
        }
      	for(var i=0; i<displayArray.length; i++)
		{
            //alert("Inside for loop and the first element of englishArray is : "+englishArray[k][0]);
            //alert("inside for loop :"+ i +": and displayArray element is :"+displayArray[i]);
            isFound=hindiArray[k][0].includes(displayArray[i]);
            //alert("inside for loop :"+ i +": is found flag "+isFound);
			if(isFound==true)
            {
              count++;
              //alert("Increasing Count : "+ count);
            }

            if(isFound==false)
            {
              count= 0;
              break;
              
            }

          }
}
  //alert(correctSentences[0]);
    //alert(correctSentences[1]);

  //alert(correctSentences);
  for(j=0; j<correctSentences.length;j++)
  {
	//alert("Found correct sentences :"+correctSentences[j]);
    document.getElementById("answerList").innerHTML+=correctSentences[j].join(" ")+"<br>";
  }
 document.getElementById("hideBtn").innerHTML="<button class='hide' onclick='hideAnswers()'>"+ "hide the correct sentence" + "</button>";
  document.getElementById("getAnswer").innerHTML="";
}	
}
}

function hideAnswers(){
	var x=document.getElementById("answerList");
	x.style.display="none";
	document.getElementById("hideBtn").innerHTML="";
	document.getElementById("getAnswer1").innerHTML="<button class='correctAnsBtn' onclick='showAnswers()'>"+"Get Answers"+"</button>";
}

function showAnswers(){
	var v=document.getElementById("answerList");
	v.style.display="block";
	document.getElementById("getAnswer1").innerHTML="";
  document.getElementById("hideBtn").innerHTML="<button class='hide' onclick='hideAnswers()'>"+ "hide the correct sentence" + "</button>";

}

function shuffleWords(a) {
    var c = a.length, temp, index;
    while (c > 0) {
        index = Math.floor(Math.random() * c);
        c--;
        temp = a[c];
        a[c] = a[index];
        a[index] = temp;
    }
    return a;
}

function choose(){
	var x= document.getElementById("selected1").value;
	var message1="";
	if(x=='Corpus1'){
		message1="A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. 'How shall I climb out?' said the mouse. 'oh, how shall I climb out?' Just then a rat came along, and he heard the mouse. 'Mouse', said the rat, 'if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in."
	}
	if(x=='Corpus2'){
		message1='A wolf carried off a lamb. The lamb said, " I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.'
	}
	if(x=='Corpus3'){
		message1='A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.'
	}
	document.getElementById("displayCorpus").innerHTML=message1;
}


