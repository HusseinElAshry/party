let allH3 =Array.from( document.querySelectorAll(".upAndDown h3"));
let allp =Array.from( document.querySelectorAll(".upAndDown p"));
let wordCounter = Number($(".counter").html());
let localDate = new Date();
let eventDate = new Date();
eventDate.setFullYear(2022 , 11 , 4);
eventDate.setHours(18 ,00,00)
let subDate = eventDate.getTime()-localDate.getTime();
let seconds =Math.floor(subDate/1000) ;
let minutes= Math.floor(subDate/(1000*60));
let hours =Math.floor(subDate/(1000*60*60));
let days = Math.floor(subDate/(1000*60*60*24));
let secCount;
let minCount;
let hCount;
let dCount;
$(".barIcon").css("left" , $(".navigation").outerWidth(true) + "px")
$(".navigation").animate({left : `-${$(".navigation").outerWidth(true)}px`} ,1000)
 $(".barIcon").click(function(){
    $(".navigation").animate({left : `0px`} ,1000)
})
$(".fa-x").click(function()
{
    $(".navigation").animate({ left : `-${$(".navigation").outerWidth(true)}px`} ,1000);
})
$(".upAndDown h3").click(function(eInfo){
    let index = allH3.indexOf(eInfo.target);
    $(".upAndDown p").eq(index).slideToggle(1000 ,function()
    {
        $(".upAndDown p").eq(index).siblings("p").slideUp(1000); 
    });
})
$(window).scroll(function(){
    let secPlace = $("#home").height();
    if($(window).scrollTop() >=  secPlace)
    {
       $(".barIcon").removeClass("text-white");
    }
    else
    {
        $(".barIcon").addClass("text-white");
    }
});
function setCount()
{
    
         secCount=setInterval( function()
        {
            $(".time").eq(3).html( --seconds+ " S");
        } , 1000);
         minCount = setInterval(function()
        {
            $(".time").eq(2).html(--minutes + " M")
        },1000*60);
        hCount = setInterval(function()
        {
            $(".time").eq(1).html(--hours + " H")
        } , 60*60*1000);
         dCount = setInterval(function()
         {
            $(".time").eq(0).html(--days + " D");
        },24*60*60*1000);

}
if(subDate<=0)
{
    clearInterval(secCount);
    clearInterval(minCount);
    clearInterval(hCount);
    clearInterval(dCount);
    $(".time").eq(0).html(0 + " D");
    $(".time").eq(1).html(00 + " H");
    $(".time").eq(2).html(00 + " M");
    $(".time").eq(3).html(00 + " S");
    $('.time').addClass('text-danger');
    $('.time').removeClass('text-white');
}
else
{
    $(".time").eq(0).html(days + " D");
    $(".time").eq(1).html(hours + " H");
    $(".time").eq(2).html(minutes + " M");
    $(".time").eq(3).html(seconds + " S");

    setCount()
}

$("textarea").keydown(function()
{
    if(wordCounter==0)
    {
        $(".footP").html(`<p class="text-danger fs-4 footP">your available character finished <span class="text-black fs-6">Character Reamining</span></p>`);
    }
    if($("textarea").val()=="")
    {
        $(".footP").html(`<p class="fs-5 footP"><span class="text-danger fs-4 counter">100 </span>character remaining</p>`)
        wordCounter=100;
    }
    else
    {
        $(".counter").html(--wordCounter);
    }
})