var menu = document.getElementById("menu");
var sidebar = document.getElementById("sidebar");
var xmark = document.getElementById("xmark");

const myTimeout = setInterval(second,1000);
var flag=0;
function second(){
    if(flag==0){
        menu.style.transform = "scale(1)";
        flag=1;
    }
    else{
        menu.style.transform = "scale(1.5)";
        flag=0;
    }
}
var flag2=0;
var flag3=0;
menu.addEventListener("click",function(){
    
    if(flag2==0 && flag3==0){
    sidebar.style.width="450px";
    flag2=1;
    }
    else if(flag2==0 && flag3==1){
    sidebar.style.width="500px";
    flag2=1;
    }
    else{
    sidebar.style.width="0px";
    flag2=0;
}
})

xmark.addEventListener("click",function(){
    sidebar.style.width="0px";
    flag2=0;
})


let myMediaQuery = window.matchMedia('(min-width: 800px)');
 
function widthChangeCallback(myMediaQuery) {
  flag3=1;
}
 
myMediaQuery.addEventListener('change', widthChangeCallback);