let amigos = []

function adicionarAmigo(){
    let entrada = document.getElementById("amigo").value;

    if (entrada == ""){
        return alert("Por favor, insira um nome.");
    }
    amigos.push(entrada);
    
    limparEntrada();

    imprimirListaAmigos();
}


function sortearAmigo(){
    if(amigos.length == 0){
        return alert("Adicione um amigo para sortear.");
    }

    let gerarIndice = Math.random()*amigos.length;
    let selecionarIndice = Math.floor(gerarIndice);

    let amigoSorteado = document.getElementById("resultado");
    amigoSorteado.innerHTML = amigos[selecionarIndice];
    
    //console.log(amigos[selecionarIndice]);
}


function imprimirListaAmigos(){
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for(i = 0; i<amigos.length; i++){
        let novoAmigo = document.createElement("li"); 
        novoAmigo.textContent = amigos[i];

        lista.appendChild(novoAmigo);
    }
}

function limparEntrada(){
    document.getElementById("amigo").value = "";
}