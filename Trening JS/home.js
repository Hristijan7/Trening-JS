var list = $("#pictures img");
var curruntImg = 0;
$(list[curruntImg]).css("display", "block");

var btn = $(".dots button");
$(btn[curruntImg]).css("background-color","red");

$(".next").click(function(){
    
    if (curruntImg < list.length -1){ 
        $(list[curruntImg]).css("display", "none");
        $(list[curruntImg+1]).css("display", "block");
        $(btn[curruntImg]).css("background-color","transparent");
        $(btn[curruntImg+1]).css("background-color","red");
        curruntImg = curruntImg + 1;
    }
    else{
        $(list[curruntImg]).css("display", "none");
        $(list[0]).css("display", "block");
        $(btn[curruntImg]).css("background-color","transparent");
        $(btn[0]).css("background-color","red");
        curruntImg = 0;
    }
});



$(".prev").click(function(){
   if (curruntImg === 0){ 
        $(list[curruntImg]).css("display", "none");
        $(list[list.length -1]).css("display", "block");
        $(btn[curruntImg]).css("background-color","transparent");
        $(btn[list.length -1]).css("background-color","red");
        curruntImg = list.length -1;

    }
    else{
        $(list[curruntImg]).css("display", "none");
        $(list[curruntImg-1]).css("display", "block");
        $(btn[curruntImg]).css("background-color","transparent");
        $(btn[curruntImg-1]).css("background-color","red");
        curruntImg = curruntImg-1;
    }
});


$(btn).click(function(){
     var btnIndex = $(this).index();
     $(list[curruntImg]).css("display", "none");
     $(list[btnIndex]).css("display","block");
     $(btn).css("background-color","transparent");
     $(btn[btnIndex]).css("background-color","red");
     curruntImg = btnIndex
});

var galleryListOutside = $("#gallery img");
var galleryListInside = $(".hide img");
$(galleryListInside[curruntImg]).css("display", "block");

$(galleryListOutside).click(function(){
    $(".hide").css("display", "block");
    var picIndex = $(this).index();
    $(galleryListInside[curruntImg]).css("display", "none");
    $(galleryListInside[picIndex]).css("display", "block");
     curruntImg = picIndex
});

//************************************* */

$(".hide button").click(function(){
    $(".hide").css("display","none");
});
var getIncreasedValue = 0;
var highscore = 0;
var numberCheck = 0;
var score = 0;
var displayMessage = function (message) {
    $(".text p").text(message);
};
var colorBackground = function (color){
    $("#game").css(color);
};
var secundRow = function (text){
    $(".secundRow p").text(text);
}
var numberVal=$(".question");
numberVal = 1 + Math.floor(Math.random() * 20);

function randomNum () {
    numberVal = 1 + Math.floor(Math.random() * 20);
};
function increment() {
    score += 1
    return score;
  }; 
function plusNum (){
    getIncreasedValue = increment();
};
function equalNum (){
    highscore = getIncreasedValue;
};
function focusOnReset (){
    $("#quantity").val("");
    $("#quantity").focus();
};
function scoreText (){
    $(".fa-modx").text(" Score: " + getIncreasedValue);
};
function highScore (){
    $(".fa-trophy").text(" Highscore: " + highscore);
};
function zero (){
    score = 0;
    getIncreasedValue = 0;
};
function hihgScoreRes (highscore){
    if(highscore == 0){
        equalNum ();
        highScore ();
    }
    else{
        if (highscore >= getIncreasedValue) {
            $(".fa-trophy").text(" Highscore: " + getIncreasedValue);
            equalNum ();
        }else {
            highScore ();
        } 
    }
};
function checkNum (numberCheck) {
    if (numberCheck == numberVal){
        displayMessage ("You guessed it!");
        secundRow (numberVal);
        colorBackground({"background-color" : "green"});
        plusNum ();
        scoreText ();
        hihgScoreRes (highscore);
    } else if (numberCheck !== numberVal) {
        numberCheck > numberVal ? displayMessage ("You guessed to high! Try Again!") : displayMessage ("You guessed to low! Try Again!");
        plusNum ();
        scoreText ();
        focusOnReset ();
    } 
};

$(".check button").click(function(){
    numberCheck = $("#quantity").val();
    checkNum (numberCheck)
});

$(".firstRow button ").click(function(){
    colorBackground({"background-color": "black" });
    displayMessage ("Start guessing...");
    focusOnReset ();
    zero ();
    $(".fa-modx").text(" Score: " + getIncreasedValue);
    randomNum ();
    secundRow ("?");
});
