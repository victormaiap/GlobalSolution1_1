// Lucas Liguori Vaz - RM 97907
// Luigi Guimãrães La Pastina - RM 551269
// Victor Maia Prates de Almeida - RM 550596
// Antenise Alana Barbosa de Souza - RM552285

// FUNÇÃO 1 - Cada vez que o usuário subir/descer a página roda a funções abaixo
window.onscroll = function() {
  returnTop()
  lockh1()
};

// FUNÇÃO 2 - Verifica se a página esta no topo, se não estiver mostra o botão "Voltar ao topo"
function returnTop() {
  if (document.scrollingElement.scrollTop > 600) {
    document.getElementById("top").style.display = "flex";
  } else {
    document.getElementById("top").style.display = "none";
  }
}

// FUNÇÃO 3 - Carrossel interativo
//Variáveis para o script saber qual item do carrossel é o atual
var carousel1CurrentItem = 1
var carousel2CurrentItem = 1
function carousel(carouselId,nextBool) {
  //A função recebe dois parâmetros, o primeiro indentifica qual carrossel
  //a segunda indentifica qual das setas foi clicada, esses parâmetros vem do <button> no HTML
  if (carouselId == 1){
    //Para o carrossel 1
    document.getElementById('carousel1item'+carousel1CurrentItem).style.display = "none"
    if (nextBool) {
      //aqui se a seta para o próximo for clicada, ele tira o primeiro e ativa o próximo, depois
      //atualiza a variável, só funciona para os primeiros 2 itens
      if (carousel1CurrentItem == 1 || carousel1CurrentItem == 2) {
        document.getElementById('carousel1item'+(carousel1CurrentItem + 1)).style.display = "flex"
        carousel1CurrentItem = carousel1CurrentItem + 1
      //aqui é para o ultimo item, precisou de diferencas para ele voltar ao primeiro
      } else if (carousel1CurrentItem == 3) {
        document.getElementById('carousel1item1').style.display = "flex"
        carousel1CurrentItem = 1
      }
      //aqui é para a seta de voltar, mesma coisa que acima, ao contrário.
    } else if (carousel1CurrentItem == 2 || carousel1CurrentItem == 3){
      document.getElementById('carousel1item'+(carousel1CurrentItem - 1)).style.display = "flex"
        carousel1CurrentItem = carousel1CurrentItem - 1
      //aqui é para seta de voltar no primeiro item, assim ele da a volta para último
    } else {
      document.getElementById('carousel1item3').style.display = "flex"
        carousel1CurrentItem = 3
    }

  } else if (carouselId == 2){
    //aqui é para o carrosel 2, mais simples pois por ter dois itens as duas setas tem a mesma função.
    document.getElementById('carousel2item'+carousel2CurrentItem).style.display = "none"
    if (carousel2CurrentItem == 1) {
      document.getElementById('carousel2item2').style.display = "flex"
      carousel2CurrentItem = 2
    } else {
      document.getElementById('carousel2item1').style.display = "flex"
      carousel2CurrentItem = 1
    }
  }
}

//FUNÇÃO 4 - Travar o título
//Tranca o título do site quando descer o suficiente a página
 function lockh1() {
     if (document.scrollingElement.scrollTop >= 300) {
     document.getElementById("title").style.position = "inherit"
     document.getElementById("banner").style.flexDirection = "column-reverse"
     }
 }