// $(document).ready(function(){

    function dash(ele) {
        ele.innerHTML += '_';
        ele.style.opacity = 0.5;
    }

    function dash2(ele) {
        
            var tx = ele.innerHTML;
            tx = tx.substring(0, tx.length-1)
            ele.innerHTML = tx; 
            ele.style.opacity = 1;
    }
var colr = '#4e2ec2'
    function navOver(ele) {
        ele.innerHTML += '_';
        ele.style.color = colr;
    }

    function navOut(ele) {
        var tx = ele.innerHTML;
        tx = tx.substring(0, tx.length-1)
        ele.innerHTML = tx; 
        ele.style.color = "#999";
    }


    var ele1 = document.getElementById("Hidden1");
    var ele2 = document.getElementById("Nav2");
    var cl = 0;
    document.addEventListener("scroll", () => { 
        // console.log(window.scrollY);

        if (window.scrollY > 100){
            ele1.style.backgroundImage= "linear-gradient(to right, white , white)";
            ele1.style.color = "black";
            ele1.style.boxShadow = "0px 0px 10px 0px gray"; 
            
            ele2.style.backgroundImage= "linear-gradient(to right, white , white)";
            ele2.style.color = "black";
            ele2.style.boxShadow = "0px 0px 10px 0px gray"; 
        }
        else if (cl != 1){
            ele1.style.backgroundImage= "linear-gradient(to right, blue , pink)";
            ele1.style.color = "white";
            ele1.style.boxShadow = "0px 0px 0px 0px gray";

            ele2.style.backgroundImage= "linear-gradient(to right, blue , pink)";
            ele2.style.color = "white";
            ele2.style.boxShadow = "0px 0px 0px 0px gray"; 
        }
        else if (cl == 1){

            ele1.style.backgroundImage= "linear-gradient(to right, transparent , transparent)";
            ele1.style.color = "white";
            ele1.style.boxShadow = "0px 0px 0px 0px gray";

            ele2.style.backgroundImage= "linear-gradient(to right, transparent , transparent)";
            ele2.style.color = "white";
            ele2.style.boxShadow = "0px 0px 0px 0px gray"; 
        }

        if (window.scrollY >= 2111){
            $("#p1").animate({
                width: "80%"
            }, 1000);
            $("#p2").animate({
                width: "70%"
            }, 1000);
            $("#p3").animate({
                width: "90%"
            }, 1000);
            $("#p4").animate({
                width: "80%"
            }, 1000);
            $("#p5").animate({
                width: "80%"
            }, 1000);
            $("#p6").animate({
                width: "60%"
            }, 1000);
            $("#p7").animate({
                width: "90%"
            }, 1000);
            $("#p8").animate({
                width: "80%"
            }, 1000);
        }
    });


var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");

function cardsALL(){
    card1.style.display = "flex";
    card2.style.display = "flex";
    card3.style.display = "flex";
}

function cardsMOBILE_APPS(){
    card1.style.display = "none";
    card2.style.display = "flex";
    card3.style.display = "none";
}


function cardsWEB_SITES(){
    card1.style.display = "flex";
    card2.style.display = "none";
    card3.style.display = "none";
}

function cardsLANDING_PAGES(){ 
    card1.style.display = "none";
    card2.style.display = "none";
    card3.style.display = "flex";
}


// var i = 1; 
    
//   var interval = setInterval(() => {
//     if(i <= 4){
//         document.getElementById('bt' + i).classList.add('active');
//     }
//     else {i=1}
//     i++;
//   }, 1500); 


var SittingsBtn = document.getElementsByClassName("im1")[0];
var color1 = document.getElementsByClassName("im2")[0];
var color2 = document.getElementsByClassName("im3")[0];
var SittingsContainer = document.getElementsByClassName("sittings")[0];
var b = 0;

function Color() {
    if (b == 0){
    color1.style.display = "none";
    color2.style.display = "none";
    SittingsContainer.style.width = "43.28px"
    SittingsContainer.style.transition= "all .6s";
    SittingsBtn.style.width = "100%"
    b=1; 
    }
    else {
        color1.style.display = "flex";
        color2.style.display = "flex";
        SittingsContainer.style.width = "130px"
        SittingsContainer.style.transition= "all .6s";
        SittingsBtn.style.width = "33.3%"
        b=0;
    }
}

let root = document.documentElement;

function ColorBlack() {
    document.getElementsByTagName("header")[0].style.backgroundImage = "linear-gradient(54deg,rgba(45,45,45,.95) 34%,rgba(173, 170, 170, 0.95))";
    if (window.scrollY <= 100){
    ele1.style.backgroundImage= "linear-gradient(to right, transparent , transparent)";
    ele2.style.backgroundImage= "linear-gradient(to right, transparent , transparent)";
    }
    document.getElementById("carouselExampleIndicators").style.backgroundImage = "linear-gradient(54deg,rgba(45,45,45,.95) 34%,rgba(173, 170, 170, 0.95))";
    document.getElementsByClassName("lastContainer")[0].style.backgroundImage = "linear-gradient(54deg,rgba(45,45,45,.95) 34%,rgba(173, 170, 170, 0.95))";
    document.getElementsByClassName("comma")[0].style.color = "#4A4A4A";
    colr = '#4A4A4A';

    root.style.setProperty('--c', '#4A4A4A');
    root.style.setProperty('--c2', '#4A4A4A');

    cl = 1;
}
function ColorPurble() {
    document.getElementsByTagName("header")[0].style.backgroundImage = "linear-gradient(to right, blue , pink)";
    if (window.scrollY <= 100){
    ele1.style.backgroundImage = "linear-gradient(to right, blue , pink)";
    ele2.style.backgroundImage = "linear-gradient(to right, blue , pink)";
    }
    document.getElementById("carouselExampleIndicators").style.backgroundImage = "linear-gradient(54deg,rgba(74,76,179,.95) 34%,hsla(0,34%,71%,.95))";
    document.getElementsByClassName("lastContainer")[0].style.backgroundImage = "linear-gradient(54deg, rgba(74, 76, 179, 0.95) 34%, hsla(0deg, 34%, 71%, 0.95))";
    document.getElementsByClassName("comma")[0].style.color = "#7b67c7";
    colr = '#4e2ec2';

    root.style.setProperty('--c', '#6d56c1');
    root.style.setProperty('--c2', '#4e2ec2');

    cl = 0;
}




var type1= new Typed(".type1",{
    strings:["Hi_"],
    smartBackspace:true,
    typeSpeed:100,
    backSpeed:100,
    showCursor: false,
    startDelay:1000

});


var type2= new Typed(".type2",{
    strings:["Resume_"],
    smartBackspace:true,
    typeSpeed:100,
    backSpeed:100,
    showCursor: false,
    startDelay:1000
});

var type3= new Typed(".type3",{
    strings:["My projects_"],
    smartBackspace:true,
    typeSpeed:100,
    backSpeed:100,
    showCursor: false,
    startDelay:1000
});

var type4= new Typed(".type4",{
    strings:["Latest Posts_"],
    smartBackspace:true,
    typeSpeed:100,
    backSpeed:100,
    showCursor: false,
    startDelay:1000
});

var type4= new Typed(".type5",{
    strings:["Get in touch_"],
    smartBackspace:true,
    typeSpeed:100,
    backSpeed:100,
    showCursor: false,
    startDelay:1000
});