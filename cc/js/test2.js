// // css选择器--document.querySelector()
// var img4=document.querySelector('#images a:nth-child(4)');
// // ID--document.getElementByid()
// var img4=document.getElementById('images').children[4];
// //类名--document.getElementsByClassName()
// var img4=document.getElementsByClassName('hiddenImg')[3];
// //标签名--document.getElementsByTagName()
// var img4=document.getElementsByTagName('a')[4]; 
// console.log(img4);

// img4.style.display='block'


//获取一组带超链接的图像
var imagesA=document.getElementById("images").children;
console.log(imagesA);

// //行内样式实现更换显示样式
// //26行元素隐藏
// imagesA[0].style.display="none";
// //30行元素显示
// imagesA[4].style.display="inlineblock"; 


//通过更换CSS类名来实现更换显示样式

//26行元素隐藏
imagesA[0].className="hiddenImg";
//30行元素显示
imagesA[4].className="displayImg"

//利用计时器间隔1S，显示1张图像，其余图像隐藏。
var currentNo=0;
function changeImg(){
    //排除原理，先去掉同类
    for(var i=0;i<imagesA.length;i++){
        imagesA[i].className="hiddenImg";
    }
    //或者
    // for(const item of imagesA){
    //     item.className="hiddenImg";
    // }

    //再突出自己
     imagesA[currentNo].className="displayImg"

     //换个元素，为下一次计时器调用做准备
     if(currentNo<7) {currentNo++;} 
     else{
         currentNo=0;
     }
}

var timer=window.setInterval(changeImg,1000)

var imagesG=document.querySelector('#images');

function starChange(){
    timer=window.setInterval(changeImg,1000);
}

function stopChange(){
    window.clearInterval(timer);
}

imagesG.addEventListener('mouseover',stopChange);
imagesG.addEventListener('mouseout',starChange);


