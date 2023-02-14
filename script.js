/*controle de todos os componentes da tela*/
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let numero = '';/* preenche dessa maneira -> let numero = '78111'*/

function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHTML = '';

    /*for para exibir a  quantidade de quadrados de cada etapa*/ 
    for(let i =0;i< etapa.numeros; i++)
    if(i === 0){
        numeroHTML += '<div class="numero pisca"></div>';
    }else{
        numeroHTML += '<div class="numero"></div>';
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHTML;

}

/*verifica numero de candidato e mostrar suas respectivas informações*/
function atualizaInterface(){
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true;
        }else{
            return false;
        }  
    });
    if(candidato.length > 0)
        {
            candidato = candidato[0];
            seuVotoPara.style.display = 'block';
            aviso.style.display = 'block';
            descricao.innerHTML = `Nome:${candidato.nome}<br/>Partido:${candidato.partido}<br/>`;
            let fotosHTML = '';
            for(let i in candidato.fotos)
            {
                fotosHTML += `<div class="d-1-image"> <img src="img/${candidato.fotos[i].url}" alt=""/>${candidato.fotos[i].legenda}</div>`
            }
            lateral.innerHTML = fotosHTML;
        }

}

function clicou(n){
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero !== null){
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;/* preenche dessa maneira -> let numero = '78111'*/
        elNumero.classList.remove('pisca');

        if(elNumero.nextElementSibling !== null)
        {
            elNumero.nextElementSibling.classList.add('pisca');
        }else{
            atualizaInterface();
        }
        
        
    }
    
}

function branco(){
    alert("Clicou em branco");
}

function corrige(){
    alert("Clicou em corrige");
}
function confirma(){
    alert("Clicou em confirma");
}

comecarEtapa();