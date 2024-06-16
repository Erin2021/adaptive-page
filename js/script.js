
//language btn
const languageBtn = document.querySelector(".header_group .global");
const languageSel=languageBtn.querySelector(".language");
const langClose = languageSel.querySelector(".close a");

function languageSelect(e){
  e.preventDefault();
  languageSel.classList.toggle("active");
}

function langSelClose(e){
  e.preventDefault();
  this.parentNode.classList.remove('active')
}

languageBtn.addEventListener("click",languageSelect);
langClose.addEventListener("click",langSelClose);

//subMenu btn
const subMenuBtn=document.querySelector("header .header_left .mob_btn");
const subMenu=document.querySelector(".subNav");
const subMenuCloseBtn=document.querySelector(".subNav .header_left .mob_btn");


function submenuUp(e){
  (e).preventDefault();
  subMenu.classList.add("active");
}
function submenuDown(e){
  (e).preventDefault();
  subMenu.classList.remove("active");
  languageSel.classList.remove("active");
}

subMenuBtn.addEventListener("click",submenuUp);
subMenuCloseBtn.addEventListener("click",submenuDown);



//srcBtn
const srhMenuBtn=document.querySelector("header .header_right");
const srhMenu=document.querySelector(".subNav_srh");
const srhMenuCloseBtn=document.querySelector(".subNav_srh .header_right .mob_btn");


function srhmenuUp(e){
  (e).preventDefault();
  srhMenu.classList.add("active");
}
function srhmenuDown(e){
  (e).preventDefault();
  srhMenu.classList.remove("active");
}

srhMenuBtn.addEventListener("click",srhmenuUp);
srhMenuCloseBtn.addEventListener("click",srhmenuDown);




//의료진찾기 사진 랜덤
const images =["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"];

const chosenImage =images[Math.floor(Math.random()*images.length)];

const bgImage= document.querySelector("#section2 .findDoc");
bgImage.style.background=`url(img/${chosenImage}) no-repeat right top / cover`;






$(document).ready(function(){

  //depth0에서 선택하면 색이 변함
  $('.Nav_left .depth0 li').click(function(){
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    const result = $(this).attr("data-alt");
    $(".Nav_right .depth1").removeClass("active");
    $(".depth0_"+result).addClass("active");
  })


  
  const depth2=$('.Nav_right .depth1>li')
  depth2.find('a').on("click",function(){
    //화살표올리기
    $(this).find('i').toggleClass("active")
    //depth2형제 찾아서 depth2메뉴 내리기
    $(this).siblings().slideToggle(200);
  });


  //진료정보 아코디언메뉴
  $("#section1 .rel .medical .medic_tit").click(function(){
    $(this).parent().siblings().removeClass("active");
    $(this).parent().toggleClass("active");

    //아이콘애니메이션
    $(this).parent().siblings().find(".btn_plus").removeClass("active");
    $(this).find(".btn_plus").toggleClass("active");
  });


  //병원소식
  $('#section3 .news .tabMenu .btn>li').click(function(){
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    const result = $(this).attr("data-alt");
    console.log(result);
    $("#section3 .news .tabContents>div").removeClass("active");
    $("#"+result).addClass("active");
  });


  //top메뉴 스크롤시 등장
  $(window).scroll(function(){
    let scrollpos=$(this).scrollTop();
    if(scrollpos>=350){
      $("#top_btn").addClass("active");
    }else{ 
      $("#top_btn").removeClass("active");
    };
  });
  
});

