let x = document.querySelector('.x');
let o = document.querySelector('.o');
let caixa = document.querySelectorAll(".caixa");
let buts = document.querySelector('button');
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
		
		let el;

		if(Player01 == Player02){
			//Vai ser o X
			el = x;
			Player01 ++;
		}else {
			//Vai ser o bola
			el = o;
			Player02++;
		}

		//verifica se já existe algo na caixa para não haver repetição
		if(this.childNodes.length == 0){
			let cloneEl = el.cloneNode(true);
			this.appendChild(cloneEl);
		}

	});
}


