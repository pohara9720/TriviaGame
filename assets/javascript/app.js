$(document).ready(function() {
var counter = 30;
setInterval(timer(),1000);

$("#Start").on("click", function(){
$("#counter").html(timer());
$("#Question").html("Why was the chainsaw first created?");
$("#Start").addClass("hide");
$("#options").removeClass("hide");
$("#option1").html("Surgical Procedures");
$("#option2").html("Cutting down trees faster");
$("#option3").html("Hunting");


});

function image1(){
$("#image").attr("src", "assets/images/chainsaw.jpeg");
}

function nextQuestion1(){
$("#Question").html("What other industry did Apple try their hand in other then technology?");
$("#option1").html("Food");
$("#option2").html("Fashion");
$("#option3").html("Film");
};

});
function timer(){
	counter--;
	$("#counter").html(counter--);

};

// 2why was the chain saw orinally created? Surgical procedures* / Chopping trees/ slicing bread

// 4What other industry did Apple try their hand in aside from technology? Food/ fashion*/ film

// 5What are americans most scared of? Public speaking*/ Death/ Spiders and Insects


// 8How do male crabs seduce lady crabs? Waving their claws*/ Digging a hole big enough for the male and lady crab/ Chopping up fish for the lady crab to eat

// What was the first version of Mr potato head? a collection of plastic attachments that you could attach to your own produce*/ a plastic potato body that had holes for insertable plastic attachments/ a potato with bended paper clips. 
//  -->
