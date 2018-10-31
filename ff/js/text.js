var timer;
// function starTimer(speed){
    timer = window.setInterval(changeNum,1000);
// }
// starTimer(100);

var images1=document.querySelector('#images');
var images2=document.querySelector('images');
console.log(images1);
console.log(images2);
console.log(images2.children[3]);
// images2.children[4].style.

var currentNo=1;
// var flag=true;
function changeNum(){
    if(currentNo<8)currentNo++;
    else  currentNo=1;
    // h2Obj.innerHTML='<img src="./images/0'+currentNo+'.jpg" alt="">';
    // console.log(currentNo);
}
// console.log(timer);

var btnObj=document.getElementById('btnObj')
// console.log(btnObj);
function startchange(){
    starTimer(500);
    btnObj.textContent="停止";
}
function stopchange(){
    window.clearInterval(timer);
    btnObj.textContent="启动"
}

btnObj.addEventListener('mouseover',stopchange);
btnObj.addEventListener('mouseout',startchange);