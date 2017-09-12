//Check off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
});

//Create new Todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13){ //13 is enter
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + $(this).val() + "</li>");
		//Remove value from input
		$(this).val("");
	}
});

//Toggle add new Todo
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});