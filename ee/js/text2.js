var img4=document.querySelector('#images>a:nth-child(4)');
var img4=document.getElementById('images').children[4];
var img4=document.getElementsByClassName('hiddenImg')[3];
var img4=document.getElementsByTagName('a')[4];
var imagesA=document.getElementById("images").children;



var imagesA=document.getElementById('images').children;
console.log(imagesA);

var currentNo=0;
function changeImg(){
    imagesA[currentNo].className="displayImg";
    if(currentNo<7){currentNo++;}
    else{
        currentNo=0;
    }
    console.log(currentNo);
}
var timer=window.setInterval(changeImg,1000);
var imagesG=document.querySelector('#images');
console.log(imagesG);
function starChange(){
    timer=window.setInterval(changeImg,1000);
}
function stopChange(){
    window.clearInterval(timer);
}
imagesG.addEventListener('mouseover',stopChange);
imagesG.addEventListener('mouseout',starChange);




