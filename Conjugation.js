/* initiates verbList variable */
var verbList = [];

/* pushes verb made in newVerb to verbList */
function addToList(verb){
	verbList.push(verb);
}

/* prints out all verbs in verbList (does not print conjugation) */
function logVerbs() {
	for (i = 0; i < verbList.length; i++) {
		console.log(verbList[i].Verb);
	};
}

/* takes inputs to add a new Verb to verbList */
function newVerb(verb, yo, tu, ud, nos, vos, uds){
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


function quiz() {
    var answer;
	var wrong = true;
	for (i = 0; i < verbList.length; i++) {
		for(var key in verbList[i]) {
			if (verbList[i][key] != verbList[i].Verb) {
				document.getElementById("writeVerb").innerHTML = verbList[i].Verb;
				/* sentence form: document.getElementById("forma").innerHTML = "Conjugate " + verbList[i].Verb + " in the " + key + " form"; */
				document.getElementById("forma").innerHTML = key;

			var x = true;
			while (x == true) {
			answer = prompt("Conjugate " + verbList[i].Verb + " in the " + key + " form");
			answer = answer.toLowerCase();
			if (answer === verbList[i][key]) {
				document.getElementById("demo").innerHTML = "Correct!";
				x = false;
			}
			else{
				document.getElementById("demo").innerHTML = "Wrong";
				}
			}
			
			/*
			console.log(key);
			console.log(verbList[i][key]);
			*/
			}
		}
	}
	document.getElementById("writeVerb").innerHTML = "Verb";
	document.getElementById("forma").innerHTML = "Pronoun";
    document.getElementById("demo").innerHTML = "Good Job!"
};

if ('addEventListener' in window) {
	window.addEventListener('load', function() { document.body.className = document.body.className.replace(/\bis-loading\b/, ''); });
	document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
				}
