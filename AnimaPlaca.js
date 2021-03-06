/*
    Este script cria animaçoes sobre a placa desenhada no canvas
    -> Depende do script contexto.js carregado para funcionar!
*/
var centroX = 305; //recebe a posicao central da placa no eixo X
var centroY = 175; //recebe a posicao central da placa no eixo Y

var origemx; //define o ponto X onde a imagem sera desenhada
var origemy; //define o ponto Y onde a imagem sera desenhada

var placa = new Image(); //imagem da placa a ser desenhada
placa.src = "placas/lombada.png";

//funçao que reseta o canvas
function limpatela() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(fundo, 0, 0);
}

//desenha uma das placas no outdoor
function DesenhaPlaca() {
    origemx = centroX - (placa.width / 2);
    origemy = centroY - (placa.height / 2);
    ctx.drawImage(placa, origemx, origemy);
}

//aponta qual placa deve ser desenhada
function SetPlaca(patch) {
    placa.src = patch;
}
