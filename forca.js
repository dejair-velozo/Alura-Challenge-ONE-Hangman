var palavras = ["ALURA", "ORACLE", "HTML", "CSS", "PYTHON"];
var palavraSecreta=palavras[Math.floor(Math.random()*palavras.length)];
var erros=0;
var acertos=0;
var tentativas=[];

var caixaDeTexto=document.querySelector(".text-input");
var botaoAdicionarPalavra=document.querySelector("#nova-palavra");
botaoAdicionarPalavra.addEventListener("click",function(){
	validaNovaPalavra();
})

var botaoIniciar=document.querySelector("#iniciar-jogo");
botaoIniciar.addEventListener("click",function(){
	caixaDeTexto.value="O jogo começou";
	caixaDeTexto.disabled=true;
	botaoAdicionarPalavra.disabled=true;
	forca();
	campoDasLetras();
	document.onkeypress=validaTeclaPressionada;
});

function validaNovaPalavra(){
	if(!caixaDeTexto.value.match(/^[A-Z]*$/g)){
		alert("Somente letras maiúsculas");
	}else if(caixaDeTexto.value.length>14){
		alert("A palavra deve conter no máximo 14 letras");
	}else if(caixaDeTexto.value.length<5){
		alert("A palavra deve conter no mínimo 5 letras");
	}else if(palavras.includes(caixaDeTexto.value)){
		alert("Esta palavra já existe. Tente uma diferente");
	}else{
		adicionaNovaPalavra();
	}
}

function adicionaNovaPalavra(){
	palavras.push(caixaDeTexto.value);
	console.log(palavras);
	caixaDeTexto.value="Sua palavra foi adicionada"
	caixaDeTexto.disabled=true;
	botaoAdicionarPalavra.disabled=true;
}

function validaTeclaPressionada(){
	if(event.key.match(/[A-Z]/g)){
		verificaTeclaPressionada();
	}else{
		alert("Somente letras maiúsculas");
	}
}

function verificaTeclaPressionada(){
	if(palavraSecreta.includes(event.key)){
		acerto();
	}else{
		if(!tentativas.includes(event.key)){
			tentativas.push(event.key);
			erro();
			boneco(erros);
		}
	}
	verificaFimDeJogo();
}

function verificaFimDeJogo(){
	if(erros==6){
		perdeu();
		document.onkeypress=null;
	}else if(acertos==palavraSecreta.length){
		venceu();
		document.onkeypress=null;
	}
}
