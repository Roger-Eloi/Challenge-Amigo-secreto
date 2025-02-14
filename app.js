let amigos = []

function adicionarAmigo(){
    let entrada = document.getElementById("amigo");

    if (entrada.value == ""){
        return alert("Por favor, insira um nome.");
    }
    amigos.push(entrada.value);
    
    limparEntrada(entrada);

    imprimirListaAmigos();
}


function sortearAmigo(){
    if(amigos.length == 0){
        return alert("Adicione um amigo para sortear.");
    }

    limparListaAmigos(document.getElementById("listaAmigos"));

    let gerarIndice = Math.random()*amigos.length;
    let selecionarIndice = Math.floor(gerarIndice);

    let amigoSorteado = document.getElementById("resultado");
    amigoSorteado.innerHTML = "Amigo Sorteado: " + amigos[selecionarIndice];
    
    //console.log(amigos[selecionarIndice]);
}


function imprimirListaAmigos(){
    let lista = document.getElementById("listaAmigos");
    limparListaAmigos(lista);

    for(i = 0; i<amigos.length; i++){
        let novoAmigo = document.createElement("li"); 
        novoAmigo.textContent = amigos[i];

        lista.appendChild(novoAmigo);
    }
}

function limparListaAmigos(lista){
    lista.innerHTML = "";
}
function limparEntrada(entrada){
    entrada.value = "";
}