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

/* Add verbs Here */
newVerb("andar","ando", "andas", "anda", "andamos", "andáis", "andan");
newVerb("bailar", "bailo", "bailas", "baila", "bailamos", "bailáis", "bailan");
newVerb("borrar", "borro", "borras", "borra", "borramos", "boráis", "borran");
newVerb("caminar", "camino", "caminas", "camina", "caminamos", "camináis", "caminan");
newVerb("cocinar", "cocino", "cocinas", "cocina", "cocinamos", "cocináis", "cocinan");
newVerb("contestar", "contesto", "contestas", "contesta", "contestamos", "contestáis", "contestan");
newVerb("escuchar", "escucho", "escuchas", "escucha", "escuchamos", "escucháis", "escuchan");
newVerb("hablar", "hablo", "hablas", "habla", "hablamos", "habláis", "hablan");
newVerb("llamar", "llamo", "llamas", "llama", "llamaos", "llamáis", "llaman");
newVerb("practicar", "practico", "practicas", "practica", "practicamos", "practicáis", "practican");
newVerb("jugar*", "juego", "juegas", "juega", "jugamos", "jugáis", "juegan");
newVerb("ayudar", "ayudo", "ayudas","ayuda", "ayudamos", "ayudáis", "ayudan");
newVerb("buscar", "busco", "buscas", "busca", "buscamos", "buscáis", "buscan");
newVerb("cortar", "corto", "cortas", "corta", "cortamos", "cortáis", "cortan");
newVerb("dibujar", "dijbujo", "dijbujas", "dibuja", "dibujamos", "dibujáis", "dibujan");
newVerb("esperar", "espero", "esperas", "espera", "esperamos", "esperáis", "esperan");
newVerb("estudiar", "estudio", "estudias", "estudia", "estudiamos", "estudiáis", "estudian");
newVerb("lavar", "lavo", "lavas", "lava", "lavamos", "laváis", "lavan");
newVerb("pagar", "pago", "pagas", "paga", "pagamos", "pagáis", "pagan");
newVerb("trabajar", "trabajo", "trabajas", "trabaja", "trabajamos", "trabajáis", "trabajan");


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
