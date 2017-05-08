$(document).ready(function() {

var timeOutQ1= setTimeout(nextQuestion1,5000);

$("#Start").on("click", function(){
$("#Question").html("Why was the chainsaw first created?");
$("#Start").addClass("hide");
$("#options").removeClass("hide");
$("#option1").html("Surgical Procedures").on("click",function(){
	image1();
	$("#Question").html("Correct! Chainsaws were originally created for surgical procedures");
	$("#options").addClass("hide"); 
	setTimeout(nextQuestion1,1000*6);
	console.log(setTimeout);
});
$("#option2").html("Cutting down trees faster").on("click",function(){
	image1();
	$("#Question").html("WRONG! Chainsaws were originally created for surgical procedures");
	$("#options").addClass("hide"); 

});
$("#option3").html("Hunting").on("click",function(){
	image1();
	$("#Question").html("WRONG! Chainsaws were originally created for surgical procedures");
	$("#options").addClass("hide"); 
});
counter1();

});

function image1(){
$("#image").attr("src", "assets/images/chainsaw.jpeg");
};

function nextQuestion1(){
$("#Question").html("What other industry did Apple try their hand in other then technology?");
$("#options").removeClass("hide"); 
$("#Start").addClass("hide");
$("#option1").html("Food");
$("#option2").html("Fashion");
$("#option3").html("Film");
counter1();
};


});


counter1 = function(){

(function(){
  var countdown = 31;

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
// setTimeout(func,timeout time );

// 2why was the chain saw orinally created? Surgical procedures* / Chopping trees/ slicing bread

// 4What other industry did Apple try their hand in aside from technology? Food/ fashion*/ film

// 5What are americans most scared of? Public speaking*/ Death/ Spiders and Insects


// 8How do male crabs seduce lady crabs? Waving their claws*/ Digging a hole big enough for the male and lady crab/ Chopping up fish for the lady crab to eat

// What was the first version of Mr potato head? a collection of plastic attachments that you could attach to your own produce*/ a plastic potato body that had holes for insertable plastic attachments/ a potato with bended paper clips. 
//  -->
