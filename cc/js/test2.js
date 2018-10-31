// CSS选择器--document.querySelector()
// var img4=document.querySelector('#images>a:nth-child(4)');
//ID--d
// var img4=document.getElementById('images').children[4];
// var img4=document.getElementsByClassName('hiddenImg')[3];
// var img4=document.getElementsByName('a')[4];
// console.log(img4);

// img4.style.display="block";
// img0.style.display="none";

//获取一组带图像的超链接
var imagesA=document.getElementById("images").children;
//获取一组li文本
var txtList=document.querySelectorAll(".txtItem");

//初始化当前显示的图片/文本编号
var currentNo=0;

//计时器换片函数，间隔1s被调用，显示1张图像，其余图像隐藏。文本轮流高亮
function changeImg(){
    
    var nodeLength=txtList.length
    //排他原理1 ，将同类设置为统一状态
    for(var i=0;i<nodeLength;i++){
        // 同类图片透明度0(.hiddenImg)
        imagesA[i].className="hiddenImg";
        //同类文本设置正常非高亮
        txtList[i].className="txtItem normalColor";
        // console.log(imagesA[i]);
    }
    

    //排他原理2，突出自己，当前图片透明度1(.displayImg)3
    imagesA[currentNo].className="displayImg";
    //排他原理2，文本高亮
    txtList[currentNo].className="txtItem heighlightColor";

    //换个编号，为下一次计时器调用做准备
    if(currentNo<7) {currentNo++;}
    else{
        currentNo=0;
    }
    console.log(currentNo);
}

//网页加载后启动定时器
var timer=window.setInterval(changeImg,1000)

//鼠标移出后移除定时器
function stopChange(){
    window.clearInterval(timer);
}
//鼠标移入后重设定时器
function startChange(){
    timer=window.setInterval(changeImg,1000);
}

var sliderDiv=document.querySelector(".slider");
// console.log(imagesDiv);
sliderDiv.addEventListener('mouseover',stopChange);
sliderDiv.addEventListener('mouseout',startChange);


//为所有文本Li注册鼠标移入事件
for(var i=0;i<txtList.length;i++){
    txtList[i].addEventListener('mouseover',gotoImg);

    //添加自定义属性no 记录当前li的编号
    txtList[i].no=i;
    // console.log(txtList[i].no);
}
//移入之后 当前li高亮，跳转到对应图片
function gotoImg(){
    // console.log(txtList[i]);
    //获得当前显示图像的编号/文本编号 this 是当前事件发生的本体
    console.log(this.no);
    //调用更换图片/
    currentNo=this.no;
    changeImg();
}

var leftButton=document.querySelector('.leftButton');
var rightButton=document.querySelector('.rightButton');
// console.log(leftButton);

leftButton.addEventListener('click',leftImg);
rightButton.addEventListener('click',rightImg);

function leftImg(){
   
    if(currentNo>0) {currentNo--;}
    else{
        currentNo=7;
    }

}


function rightImg(){
    if(currentNo < 7) {currentNo++;}
    else{
        currentNo=0;
    }
   
}