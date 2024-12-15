

var photoes = ["./image/battery-charging.jpg", "./image/battery-full.jpg", "./image/battery-low.jpg"];
var image  = document.querySelector("#img");
var count = 0;
function next(){
    count++;
    if(count >= photoes.length){
        count = 0;
    }else{
        image.src = photoes[count];
    }
    image.src = photoes[count];
}
function pre(){
    count--;
    if(count < 0){
        count = 2;
    }else{
        image.src = photoes[count];
    }
    image.src = photoes[count];
}
