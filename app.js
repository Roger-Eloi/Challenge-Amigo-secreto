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

}


function imprimirListaAmigos(){
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for(i = 0; i<amigos.length; i++){
        let novoItem = document.createElement("li"); 
        novoItem.textContent = amigos[i];

        lista.appendChild(novoItem);
    }
}
function limparEntrada(){
    document.getElementById("amigo").value = "";
}