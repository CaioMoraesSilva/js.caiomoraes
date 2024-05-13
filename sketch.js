let palavra;

function setup() {
  createCanvas(400, 400);
  
  let palavras = ["Campeao", "Vencedor", "Ganhador", "Vitorioso", "Conquistador"];
 palavra = random(palavras)
}

function draw() {
  background("orange");
  fill("black");
  textSize(60)
  textAlign(CENTER, CENTER)
   
  let maximo = width;
  let minimo = 0;
  //mouseX, 0, widht ==> 0, Ipalavra.length
  
  
  
  let quantidade = map (mouseX, 0, width, 1, palavra.length)
  console.log(quantidade)
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200 ) 
  
 // if(mouseX < 50) {
 // let palavra = "C";
 // text(palavra, 200, 200);
 // } else if(mouseX < 100) {
 // let palavra = "Ca";
 // text(palavra, 200, 200);
 // } else { 
 // let palavra = "Campeao";
 // text(palavra, 200, 200);
 // }  
}