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
//		var SE=[["John ate an apple before afternoon"],["before afternoon John ate an apple"],["John before afternoon ate an apple"],["some students like to study at night"],["at night some students like to study"],["John and Mary went to church"],["Mary and John went to church"],["John went to church after eating"],["after eating John went to church"],["John after eating went to church"],["did he go to market"],["he did go to market"],["the woman who called my sister sells cosmetics"],["the woman who sells cosmetics called my sister"],["my sister who sells cosmetics called the woman"],["my sister who called the woman sells cosmetics"],["John goes to the library and studies"],["John studies and goes to the library"],["John ate an apple so did she"],["she ate an apple so did John"],["the teacher returned the book after she noticed the error"],["the teacher noticed the error after she returned the book"],["after the teacher returned the book she noticed the error"],["after the teacher noticed the error she returned the book"],["she returned the book after the teacher noticed the error"],["she noticed the error after the teacher returned the book"],["after she returned the book the teacher noticed the error"],["after she noticed the error the teacher returned the book"],["I told her that I bought a book yesterday"],["I told her yesterday that I bought a book"],["yesterday I told her that I bought a book"],["I bought a book that I told her yesterday"],["I bought a book yesterday that I told her"],["yesterday I bought a book that I told her"]]
	var finalSentence="";
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
	for (var i = 0; i < shuffle.length; i++) {
		document.getElementById("randomSentence").innerHTML += "<button id='"+i+"' class='wordBtn' onclick='myFunction("+i+")'>" + shuffle[i] + "</button>";
	}
}

function checkCorrectness(){

	var found=false;
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
	if(found == true){
				document.getElementById("wrongA").innerHTML="";
				document.getElementById("correctA").innerHTML="Correct answer"+" "+"<i class='fa fa-smile-o' aria-hidden='true'></i>";
				} else{
				document.getElementById("correctA").innerHTML="";
				document.getElementById("wrongA").innerHTML="Wrong answer"+" "+"<i class='fa fa-frown-o' aria-hidden='true'></i>";
				}
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


