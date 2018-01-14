$('ul').on("click", "li", function(){
	$(this).toggleClass('strikeThrough');
})

$("ul").on("click", "i", function(event){
	$(this).parent().remove();
	event.stopPropagation();

});
$("input[type='text'").keypress(function(event){
if(event.which === 13){
	var toDoText = $(this).val();
	$(this).val("");
$("ul").append("<li><i class='fa fa-trash'></i> " + toDoText + "</li>");

}

});