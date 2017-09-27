// alert("connected...");


// check off specific todos by clicking
/*
$("li").click(function(){
	// alert("click on li");

	// $(this).css("color", "gray");
	// $(this).css("text-decoration", "line-through");
	
	// if li is gray
	if($(this).css("color") == "rgb(128, 128, 128)") {
		// turn it black
		// console.log("It is currently gray!");
		$(this).css({
			color: "black",
			textDecoration: "none"
		});
	} else {
		// turn it gray
		$(this).css({
			color: "gray",
			textDecoration: "line-through"
		});
	}
});

$("li").click(function(){
	$(this).toggleClass("completed");
});
*/
// the above two does not work on li that have been newly added
// ------------------------------------------------------------
$("ul").on("click", "li", function(){ 	// the 2nd argument "li" => listen to every li inside ul
	$(this).toggleClass("completed");
});



// click on X to delete todo
// event bubbling
/*
$("span").click(function(){
	alert("click on a span");
});

$("ul").click(function(){
	alert("click on a ul");
});

$("#container").click(function(){
	alert("click on container div");
});

$("body").click(function(){
	alert("click on the body");
});
*/
/*
$("span").click(function(event){
	// $(this).parent().remove(); 	// delete the parent of this (span)
	// $(this).parent().fadeOut().remove();
	$(this).parent().fadeOut(500, function(){ 	// this refers to span
		$(this).remove(); 		// inside, this refers to li not span
	});
	event.stopPropagation(); 	// jQuery method, stop bubbling up
});
*/
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){ 	
		$(this).remove(); 		
	});
	event.stopPropagation(); 
});



// deal with input
$("input[type='text']").keypress(function(event){
	// console.log("Key Press");
	if(event.which === 13) { 		// if hit enter key
		// console.log("You hit enter!");

		// grabbing new todo text from input
		// console.log($(this).val()); 	// this => input that keypress occurred in
		var todoText = $(this).val();
		$(this).val(""); 		// use empty string to clear the text entered

		// create a new li and add to li
		// $("ul").append("<li>this is a new li that we appended to this ul</li>");
		// $("ul").append("<li><span>X</span> " + todoText + "</li>");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});



// toggle the form
$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});






