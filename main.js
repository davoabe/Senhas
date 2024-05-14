const numeroSenha = document.querySelector(`.parametro-senha__texto`);
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = `ABCDEFGHIJKLMNoPQRSTUVWXYZ`;
const letrasMinusculas = `abcdefghijklmnopqrstuvwxyz`;
const numeros = `0123456789`;
const simbolos = `!@#%?*`;
const campoSenha = document.querySelector(`#campo-senha`);
const checkbox = document.querySelectorAll(`.checkbox`);
const botoes = document.querySelectorAll(`.parametro-senha__botao`);
const forçaSenha = document.querySelector(`.força`);

botoes[0].onclick = diminuirTamanho;
botoes[1].onclick = aumentarSenha

function diminuirTamanho(){
    if(tamanhoSenha > 1){
        tamanhoSenha = tamanhoSenha-1;

    }
 numeroSenha.textContent = tamanhoSenha;
gerarSenha();

}

function aumentarSenha(){
    if(tamanhoSenha < 20){
        tamanhoSenha = tamanhoSenha+1;

    }
    numeroSenha.textContent = tamanhoSenha;
    gerarSenha();
}

for (i=0; i < checkbox.length;i++){
    checkbox[i].onclick = gerarSenha;
}

gerarSenha();

function gerarSenha(){
    let alfabeto= ``;
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked){
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos;
    }
    let senha= ``;
    for( let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificaSenha(alfabeto.length)
}

function classificaSenha(tamanhoAlfabeto){
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto)
    forçaSenha.classList.remove(`fraca`,`media`,`forte`);
    if (entropia > 57){
        forçaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia < 57 ) {
        forçaSenha.classList.add('media');
    } else if (entropia <= 35){
        forçaSenha.classList.add('fraca');
    }
    const valorEntropia = document.querySelector(`.entropia`);
    valorEntropia.textContent = "Um compuitador pode levar até " +  Math.floor(2**entropia/(100e6*60*60*24)) + " dias para descorbrir essa senha";

}



