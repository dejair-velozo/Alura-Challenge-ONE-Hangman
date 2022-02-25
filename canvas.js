var tela=document.querySelector('canvas');
var pincel=tela.getContext('2d');
pincel.lineWidth=5;
pincel.font="39px Arial";

function venceu(){
	pincel.fillText("Você ganhou!",670,60);
	
}

function perdeu(){
	pincel.fillText("Você perdeu :(",670,60);
}

function erro(){
	for(var i=0;i<6;i++){
		if(tentativas[i]==event.key){
			pincel.fillText(event.key,670+(50*i),220);
			erros++;
		}
	}
}

function acerto(){
	for(var i=0;i<palavraSecreta.length;i++){
		if(palavraSecreta[i]==event.key){
			pincel.fillText(event.key,235+(69*i),455);
			acertos++;
		}
	}
}

function campoDasLetras(){
	for(var i=0;i<palavraSecreta.length;i++){
		pincel.moveTo(220+(70*i),460);
		pincel.lineTo(270+(70*i),460);
		pincel.stroke();
	}
}

function forca(){
	pincel.fillStyle = 'white'
	pincel.beginPath();
	pincel.moveTo(95,500);
	pincel.lineTo(95,10);
	pincel.stroke();

	pincel.beginPath();
	pincel.moveTo(92,10);
	pincel.lineTo(400,10);
	pincel.stroke();

	pincel.beginPath();
	pincel.moveTo(400,7);
	pincel.lineTo(400,50);
	pincel.stroke();
}

function cabeca(){
	pincel.fillStyle = 'white'
	pincel.beginPath();
	pincel.arc(400,87,35,0,2*Math.PI);
	pincel.stroke();
	pincel.fill();
}

function corpo(){
	pincel.fillStyle = 'white'
	pincel.beginPath();
	pincel.moveTo(400,124);
	pincel.lineTo(400,250);
	pincel.stroke();
}

function pernaDir(){
	pincel.fillStyle = 'white'
	pincel.beginPath();
	pincel.moveTo(400,249);
	pincel.lineTo(460,360);
	pincel.stroke();
}

function pernaEsq(){
	pincel.fillStyle = 'white'
	pincel.beginPath();
	pincel.moveTo(400,250);
	pincel.lineTo(340,360);
	pincel.stroke();
}

function bracoDir(){
	pincel.fillStyle = 'white'
	pincel.beginPath();
	pincel.moveTo(400,180);
	pincel.lineTo(470,180);
	pincel.stroke();
}

function bracoEsq(){
	pincel.fillStyle = 'white'
	pincel.beginPath();
	pincel.moveTo(400,180);
	pincel.lineTo(330,180);
	pincel.stroke();
}

function boneco(erros){
	switch(erros){
		case 1: cabeca();
		break;
		case 2: corpo();
		break;
		case 3: pernaDir();
		break;
		case 4: pernaEsq();
		break;
		case 5: bracoDir();
		break;
		case 6: bracoEsq();
		break;
	}
}