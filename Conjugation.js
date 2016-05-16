// JavaScript Document
/* initiates verbList variable */
var verbList = [];

/* pushes verb made in newVerb to verbList */
var addToList = function (verb){
	verbList.push(verb);
}

/* prints out all verbs in verbList (does not print conjugation) */
var logVerbs = function () {
	for (i = 0; i < verbList.length; i++) {
		console.log(verbList[i].Verb);
	};
}

/* takes inputs to add a new Verb to verbList */
var newVerb = function (verb, yo, tu, ud, nos, vos, uds){
	Verb = verb
	verb = new Object();
	verb["Verb"] = Verb;
	verb["Yo"] = yo;
	verb["Tu"] = tu;
	verb["Ud"] = ud;
	verb["Nos"] = nos;
	verb["Vos"] = vos;
	verb["Uds"] = uds;
	addToList(verb);
	return verb;
};

/* Checks if enter key was pressed */
function enterkey(e){
	if(e.keyCode === 13){
            quiz();
        }
        return false;
};

newVerb("comer", "como", "comes", "come", "comemos", "coméis", "comen");
newVerb("caminar", "camino", "caminas", "camina", "caminamos", "camináis", "caminan");



var quiz = function() {
    var answer;
	var wrong = true;
for (i = 0; i < verbList.length; i++) {
	for(var key in verbList[i]) {
		if (verbList[i][key] != verbList[i].Verb) {
			document.getElementById("writeVerb").innerHTML = verbList[i].Verb;
			/* sentence form 
			document.getElementById("forma").innerHTML = "Conjugate " + verbList[i].Verb + " in the " + key + " form";
			*/
			document.getElementById("forma").innerHTML = key;

		answer = prompt("Conjugate " + verbList[i].Verb + " in the " + key + " form"); 
		 /* answer = document.getElementById("answer").value; */
		if (answer === verbList[i][key]) {
			document.getElementById("demo").innerHTML = "Correct!";
			wrong = false;
		}
		else{
			document.getElementById("demo").innerHTML = "Wrong";
			}
		
		/*
		console.log(key);
		console.log(verbList[i][key]);
		*/
		}
	}
}
};

if ('addEventListener' in window) {
	window.addEventListener('load', function() { document.body.className = document.body.className.replace(/\bis-loading\b/, ''); });
	document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
				}
