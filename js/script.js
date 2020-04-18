let x = document.querySelector('.x');
let o = document.querySelector('.o');
let caixa = document.querySelectorAll(".caixa");
let buts = document.querySelectorAll('button');
let mensager = document.querySelector('#msg');
let mensagerP = document.querySelector('#msg p');

let secondPlayer;


// Contador de Jogadas

let Player01 = 0;
let Player02 = 0;

// Add event nas caixas

for (let i = 0; i < caixa.length; i++) {// Aqui ele transforma todas as caixas em um vetor de posição! Assim é possivel clickar e efetuar a ação.

	//Ao clicckr na caixas&tabuleiro
	caixa[i].addEventListener("click", function(){
		
		let el = xecar(Player01,Player02);


		//verifica se já existe algo na caixa para não haver repetição
		if(this.childNodes.length == 0){
			let cloneEl = el.cloneNode(true);

			this.appendChild(cloneEl);

			if(Player01 == Player02){
				Player01++;	
				if(secondPlayer == 'iaPlayers'){
					// IA jogando
					computerIA();
					Player02++;
				}	
			}else {
				Player02++;				
			}

		}

		// Checar quem venceu
		checarVitoria();

	});
}



function xecar (Player01,Player02) {

	if(Player01 == Player02){
			//Vai ser o X
			el = x;

		}else {
			//Vai ser o bola
			el = o;
			
		}

	return el
}



/* ======== */

function checarVitoria (){
	
	let c1 = document.querySelector('#block-1');
	let c2 = document.querySelector('#block-2');
	let c3 = document.querySelector('#block-3');
	
	let c4 = document.querySelector('#block-4');
	let c5 = document.querySelector('#block-5');
	let c6 = document.querySelector('#block-6');

	let c7 = document.querySelector('#block-7');
	let c8 = document.querySelector('#block-8');
	let c9 = document.querySelector('#block-9');

	//checar Horizontais
	// PRIMEIRA LINHA!
	if(c1.childNodes.length > 0 && c2.childNodes.length > 0 && c3.childNodes.length > 0){
		let c1Child = c1.childNodes[0].className;
		let c2Child = c2.childNodes[0].className;
		let c3Child = c3.childNodes[0].className;

		if(c1Child == 'x' && c2Child == 'x' && c3Child == 'x'){
			vencerdor('x');
		}else if(c1Child == 'o' && c2Child == 'o' && c3Child == 'o'){
			vencerdor('o');
		}
	}


	// SEGUNDA LINHA!
	if(c4.childNodes.length > 0 && c5.childNodes.length > 0 && c6.childNodes.length > 0){
		let c4Child = c4.childNodes[0].className;
		let c5Child = c5.childNodes[0].className;
		let c6Child = c6.childNodes[0].className;

		if(c4Child == 'x' && c5Child == 'x' && c6Child == 'x'){
			vencerdor('x');
		}else if(c4Child == 'o' && c5Child == 'o' && c6Child == 'o'){
			vencerdor('o');
		}
	}

	
	// TERCEIRA LINHA!
	if(c7.childNodes.length > 0 && c8.childNodes.length > 0 && c9.childNodes.length > 0){
		let c7Child = c7.childNodes[0].className;
		let c8Child = c8.childNodes[0].className;
		let c9Child = c9.childNodes[0].className;

		if(c7Child == 'x' && c8Child == 'x' && c9Child == 'x'){
			vencerdor('x');
		}else if(c7Child == 'o' && c8Child == 'o' && c9Child == 'o'){
			vencerdor('o');
		}
	}	

	/* ============================================================================*/

	//checar VERTICAL
	// PRIMEIRA COLUNA!
	if(c1.childNodes.length > 0 && c4.childNodes.length > 0 && c7.childNodes.length > 0){
		let c1Child = c1.childNodes[0].className;
		let c4Child = c4.childNodes[0].className;
		let c7Child = c7.childNodes[0].className;

		if(c1Child == 'x' && c4Child == 'x' && c7Child == 'x'){
			vencerdor('x');
		}else if(c1Child == 'o' && c4Child == 'o' && c7Child == 'o'){
			vencerdor('o');
		}
	}


	// SEGUNDA COLUNA!
	if(c2.childNodes.length > 0 && c5.childNodes.length > 0 && c8.childNodes.length > 0){
		let c2Child = c2.childNodes[0].className;
		let c5Child = c5.childNodes[0].className;
		let c8Child = c8.childNodes[0].className;

		if(c2Child == 'x' && c5Child == 'x' && c8Child == 'x'){
			vencerdor('x');
		}else if(c2Child == 'o' && c5Child == 'o' && c8Child == 'o'){
			vencerdor('o');
		}
	}

	
	// TERCEIRA COLUNA!
	if(c3.childNodes.length > 0 && c6.childNodes.length > 0 && c9.childNodes.length > 0){
		let c3Child = c3.childNodes[0].className;
		let c6Child = c6.childNodes[0].className;
		let c9Child = c9.childNodes[0].className;

		if(c3Child == 'x' && c6Child == 'x' && c9Child == 'x'){
			vencerdor('x');
		}else if(c3Child == 'o' && c6Child == 'o' && c9Child == 'o'){
			vencerdor('o');
		}
	}


/* ============================================================================*/


	 //Checar HORIZONTAL
	// PRIMEIRA HORIZONTAL DA ESQUERDA PARA A DIREITA!
	if(c1.childNodes.length > 0 && c5.childNodes.length > 0 && c9.childNodes.length > 0){
		let c1Child = c1.childNodes[0].className;
		let c5Child = c5.childNodes[0].className;
		let c9Child = c9.childNodes[0].className;

		if(c1Child == 'x' && c5Child == 'x' && c9Child == 'x'){
			vencerdor('x');
		}else if(c1Child == 'o' && c5Child == 'o' && c9Child == 'o'){
			vencerdor('o');
		}
	}


	// SEGUNDA DIAGONAL!
	if(c3.childNodes.length > 0 && c5.childNodes.length > 0 && c7.childNodes.length > 0){
		let c3Child = c3.childNodes[0].className;
		let c5Child = c5.childNodes[0].className;
		let c7Child = c7.childNodes[0].className;

		if(c3Child == 'x' && c5Child == 'x' && c7Child == 'x'){
			vencerdor('x');
		}else if(c3Child == 'o' && c5Child == 'o' && c7Child == 'o'){
			vencerdor('o');
		}
	}

	// DEU VELHA		
	/* ============================================================================*/

	let counter = 0;

	for (let i = 0; i < caixa.length; i++) {
		if(caixa[i].childNodes[0] != undefined){
			counter++;
		}
	}

	if(counter == 9){
		vencerdor('ox');
	}
 
	// Limpar o tauleiro e atauliza o placar
	


	/*fim da function*/
}

function vencerdor (win) {
		let pontosX = document.querySelector("#scorePoint");
		let pontosB = document.querySelector("#scorePoint2");

		let mss = '';

		if(win == 'x'){
			pontosX.textContent = parseInt(pontosX.textContent) + 1;
			mss = "Jogador 1 GANHOU!";
		}else if(win == 'o'){
			pontosB.textContent = parseInt(pontosB.textContent) + 1;
			mss = "Jogador 2 GANHOU!";
		}else{
			mss = "Deu Velha!";
		}

		//Mudar a msg do JS para o HTML

		mensagerP.innerHTML = mss;
		mensager.classList.remove("hide");

		// Escoder msg
		setTimeout(function(){
			mensager.classList.add("hide");
		},3000);

		// Zerar tabuleiro

		Player01 = 0;
		Player02 = 0;

		// Remover X & O

		let caixasRemove = document.querySelectorAll(".caixa div");

		for (var i = 0; i < caixasRemove.length; i++) {
		 caixasRemove[i].parentNode.removeChild(caixasRemove[i]);
		}


}

/* =========== BOTÕES EVENTOS ===================*/

for (var i = 0; i < buts.length; i++) {

	buts[i].addEventListener("click", function(){

		secondPlayer = this.getAttribute("id");

		for (let j = 0; j < buts.length; j++) {
			buts[j].style.display = 'none';
			
		}

		setTimeout(function () {
			
			let contai = document.querySelector('#tabuleiro');
			contai.classList.remove('hide');

		}, 500);


	});
}


function computerIA(){
	let bolaClone = o.cloneNode(true);
	
	counter = 0;
	filler = 0;

	for (var i = 0; i < caixa.length; i++) {
		let aleatorio = Math.floor(Math.random() * 5);

		if(caixa[i].childNodes[0] == undefined){
			if(aleatorio <= 1){
				caixa[i].appendChild(bolaClone);
				counter++;
				break;
			}
		}else{
		
			filler++;
		}
	}

	if(counter == 0 && filler < 9){
		computerIA();
	}

}












