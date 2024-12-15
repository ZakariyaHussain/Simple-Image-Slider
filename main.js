

var photoes = ["image/1.jpg", "image/2.jpg", "image/3.jpg"];
var image  = document.querySelector("#img");
var count = 0;
function next(){
    count++;
    if(count >= photoes.length){
        count = 0;
    }
    image.src = photoes[count];
}

function pre(){
    count--;
    if(count < 0){
        count = 2;
    }
    image.src = photoes[count]
}
