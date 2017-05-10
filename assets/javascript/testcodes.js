$(document).ready(function() {

var Questions=[
{
	question: "Why was the chainsaw first created?",
 	answer:["Surgical Procedures","Cutting down trees faster","Hunting"]
}, 
{
	question:"What other industry did Apple try their hand in other then technology?",
	answer: ["Film","Food","Fashion"]

},
{
	question:"How do male crabs seduce lady crabs",
	answer: ["Waving their claws","Digging a hole big enough for the male and lady crab","Chopping up fish for the lady crab to eat"]
}
]
console.log(Questions[0].answer);




$("#Start").on("click", function(){
$("#Question").html("Why was the chainsaw first created?");
$("#Start").addClass("hide");
$("#options").removeClass("hide");
$("#option1").html("Surgical Procedures").on("click", function() {
    image1();
    $("#Question").html("Correct! Chainsaws were originally created for surgical procedures");
    $("#options").addClass("hide");
    clearInterval(counter);
    // setTimeout(nextQuestion1,1000*6);
    // console.log(setTimeout);
});
$("#option2").html("Cutting down trees faster").on("click", function() {
    image1();
    $("#Question").html("WRONG! Chainsaws were originally created for surgical procedures");
    $("#options").addClass("hide");
    clearTimeout(counter);

});
$("#option3").html("Hunting").on("click", function() {
    image1();
    $("#Question").html("WRONG! Chainsaws were originally created for surgical procedures");
    $("#options").addClass("hide");
    clearTimeout(counter);
});
counter();

});

function image1() {
    $("#image").attr("src", "assets/images/chainsaw.jpeg");
};

function nextQuestion1() {
    $("#Question").html("What other industry did Apple try their hand in other then technology?");
    $("#options").removeClass("hide");
    $("#Start").addClass("hide");
    $("#option1").html("Food");
    $("#option2").html("Fashion");
    $("#option3").html("Film");

};


});


var counter = function(){

(function(){
  var countdown = 3;

  setInterval(function() {
    countdown--;
    if (countdown >= 0) {
      span = document.getElementById("counter");
      span.innerHTML = countdown;
    }
    // Display 'counter' wherever you want to display it.
    if (countdown === 0) {
    	
        clearInterval(counter);
    }

  }, 1000);

})();

}