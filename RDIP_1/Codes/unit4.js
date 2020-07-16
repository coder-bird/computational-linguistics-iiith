//ANSWERS- CORPUS1- 169,80    CORPUS2- 111,65   CORPUS3- 219, 95


//NEW TYPES ANSWRS- CORPUS1= 73    CORPUS2= 56    CORPUS3= 84

//var Snowball=require('snowball')
var stemmer = new Snowball('English');
stemmer.setCurrent('abbreviations');     
stemmer.stem();
console.log(stemmer.getCurrent());

corpus1='A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.'
corpus2='A wolf carried off a lamb. The lamb said, "I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.'
corpus3='A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.'



function showCorpus(){
	var x=document.getElementById("selected").value;
	if(x=='Corpus1'){
		document.getElementById('answer').innerHTML="";
		document.getElementById('answer1').innerHTML="";
		document.getElementById('answer2').innerHTML="";
		document.getElementById('correct').innerHTML="";
		document.getElementById('wrong').innerHTML="";
		document.getElementById("submitBtn").innerHTML="";
		document.getElementById("submitBtn1").innerHTML="";
		document.getElementById('continue').innerHTML="";
		document.getElementById('tab1').innerHTML="";
		document.getElementById("corp1").innerHTML=corpus1;
		document.getElementById("display").innerHTML="Enter the correct number of tokens and types from the corpus:";
		document.getElementById("tab").innerHTML="<table><tr><td>"+"#tokens"+"</td><td>"+"<input id='token' type='text'>"+"</td></tr><tr><td>"+"#types"+"</td><td>"+"<input id='types' type='text'>"+"</td></tr></table>";
		document.getElementById("submitBtn").innerHTML="<button onclick='compare(corpus1)'>Submit</button>"
	}
	if(x=='Corpus2'){
		document.getElementById('answer').innerHTML="";
		document.getElementById('answer1').innerHTML="";
		document.getElementById('answer2').innerHTML="";
		document.getElementById('correct').innerHTML="";
		document.getElementById('wrong').innerHTML="";
		document.getElementById('submitBtn1').innerHTML="";
		document.getElementById("submitBtn").innerHTML="";
		document.getElementById('continue').innerHTML="";
		document.getElementById('tab1').innerHTML="";
		document.getElementById("submitBtn1").innerHTML="";
		document.getElementById("corp1").innerHTML=corpus2;
		document.getElementById("display").innerHTML="Enter the correct number of tokens and types from the corpus:";
		document.getElementById("tab").innerHTML="<table><tr><td>"+"#tokens"+"</td><td>"+"<input id='token' type='text'>"+"</td></tr><tr><td>"+"#types"+"</td><td>"+"<input id='types' type='text'>"+"</td></tr></table?";
		document.getElementById("submitBtn").innerHTML="<button onclick='compare(corpus2)'>Submit</button>"

	}
	if(x=='Corpus3'){
		document.getElementById('answer').innerHTML="";
		document.getElementById('answer1').innerHTML="";
		document.getElementById('answer2').innerHTML="";
		document.getElementById('correct').innerHTML="";
		document.getElementById('wrong').innerHTML="";
		document.getElementById("submitBtn1").innerHTML="";
		document.getElementById("submitBtn").innerHTML="";
		document.getElementById('continue').innerHTML="";
		document.getElementById('tab1').innerHTML="";
		document.getElementById("submitBtn1").innerHTML="";
		document.getElementById("corp1").innerHTML=corpus3;
		document.getElementById("display").innerHTML="Enter the correct number of tokens and types from the corpus:";
		document.getElementById("tab").innerHTML="<table><tr><td>"+"#tokens"+"</td><td>"+"<input id='token' type='text'>"+"</td></tr><tr><td>"+"#types"+"</td><td>"+"<input id='types' type='text'>"+"</td></tr></table>";
		document.getElementById("submitBtn").innerHTML="<button onclick='compare(corpus3)'>Submit</button>"

	}
}



function tokens(str){
	str=str.replace(/[^a-zA-Z ]/g, "")
	str = str.split(" ");
	return str.length;
}

function types(str){
	str=str.replace(/[^a-zA-Z ]/g, "")
	str= str.toLowerCase();
	str = str.split(" ");
	var unique = str.filter(uniqueWords);
	return unique.length;
}

function uniqueWords(value, index, self) { 
    return self.indexOf(value) === index;
}

function compare(corp){
	document.getElementById('correct').innerHTML="";
	document.getElementById('wrong').innerHTML="";
	document.getElementById('answer1').innerHTML="";
	document.getElementById('answer2').innerHTML="";
	document.getElementById('continue').innerHTML="";
	var token= document.getElementById('token').value;
	var type1= document.getElementById('types').value;
	var x=document.getElementById('token').innerHTML;
	if(token== tokens(corp) && type1== types(corp)){
		document.getElementById('answer1').innerHTML="Right answer!";
		document.getElementById('token').style.backgroundColor="green";
		document.getElementById('types').style.backgroundColor="green";
		document.getElementById('continue').innerHTML="<button onclick='newTypes()'>Continue</button>";
	}
	if(token== tokens(corp) && type1!= types(corp)){
		document.getElementById('answer2').innerHTML="Wrong answer!";
		document.getElementById('token').style.backgroundColor="green";
		document.getElementById('types').style.backgroundColor="red";
	}
	if(token!= tokens(corp) && type1== types(corp)){
		document.getElementById('answer2').innerHTML="Wrong answer!";
		document.getElementById('token').style.backgroundColor="red";
		document.getElementById('types').style.backgroundColor="green";
	}
	if(token!= tokens(corp) && type1!= types(corp)){
		document.getElementById('answer2').innerHTML="Wrong answer!";
		document.getElementById('token').style.backgroundColor="red";
		document.getElementById('types').style.backgroundColor="red";
	}
}

function newTypes(){
	document.getElementById('answer').innerHTML="Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types";
	document.getElementById("submitBtn").innerHTML="";
	document.getElementById('answer1').innerHTML="";
	document.getElementById('answer2').innerHTML="";
	document.getElementById('correct').innerHTML="";
	document.getElementById('wrong').innerHTML="";
	document.getElementById('continue').innerHTML="#New types:";
	document.getElementById('tab1').innerHTML="<input id='newtype' type=text>";
	var x=document.getElementById("selected").value;
	if(x=='Corpus1'){
	document.getElementById("submitBtn1").innerHTML="<button onclick='compare1(corpus1)'>Submit</button>"
}
if(x=='Corpus2'){
	document.getElementById("submitBtn1").innerHTML="<button onclick='compare1(corpus2)'>Submit</button>"
}
if(x=='Corpus3'){
	document.getElementById("submitBtn1").innerHTML="<button onclick='compare1(corpus3)'>Submit</button>"
}
}

function newSubmit(str){
    str=str.replace(/[^a-zA-Z ]/g, "");
    str= str.toLowerCase();
	str = str.split(" ");
	var s=[];
	for(var i=0; i<str.length;i++){
		if(str[i]=='not'){
			str[i]='no';
		}
		if(str[i]=='grew' || str[i]=='grown'){
			str[i]='grow';
		}
		if(str[i]=='ate'){
			str[i]='eat';
		}
		if(str[i]=='found'){
			str[i]='find';
		}
		if(str[i]=='had'){
			str[i]='have';
		}
		if(str[i]=='said'){
			str[i]='say';
		}
		if(str[i]=='would'){
			str[i]='will';
		}
		if(str[i]=='heard'){
			str[i]='hear';
		}
		if(str[i]=='played'){
			str[i]='play';
		}
		if(str[i]=='me'){
			str[i]='i';
		}
		if(str[i]=='it' || str[i]=='himself' || str[i]=='his' || str[i]=='him'){
			str[i]='he';
		}
		if(str[i]=='does' || str[i]=='did' || str[i]=='done'){
			str[i]='do';
		}
		if(str[i]=='ran'){
			str[i]='run';
		}
		if(str[i]=='was' || str[i]=='are'){
			str[i]='is';
		}
		if(str[i]=='this'){
			str[i]='that';
		}
		stemmer.setCurrent(str[i]);     
		stemmer.stem();
		s.push(stemmer.getCurrent());
	}
	var unique = s.filter(uniqueWords);
	console.log(unique);
	return unique.length;
}

function compare1(str){
	document.getElementById('correct').innerHTML="";
	document.getElementById('wrong').innerHTML="";
	var newType= document.getElementById('newtype').value;
	if(newType == newSubmit(str)){
		document.getElementById('correct').innerHTML="Right answer!";
		document.getElementById('newtype').style.backgroundColor="green"
	}
	else{
	document.getElementById('wrong').innerHTML="Wrong answer!";
	document.getElementById('newtype').style.backgroundColor="red";
	}
}