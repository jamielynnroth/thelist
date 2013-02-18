$(document).ready(function() {

// Add class .checked for strikethrough when item is checked
 $('#list li input').change(function() {
		if (this.checked) {
			$(this).parent().addClass('checked');
		} else {
			$(this).parent().removeClass('checked');
		};// internal if
}); // change listener

// Click arrow to insert tr
$('.arrow-down').click(function(){
	 		$('#li_clone').clone().appendTo('#list').show();
	// $('#list').after('<tr><td class="list_item"><input type="checkbox" name="item"  value ="New Item"> <span contenteditable="true">New Item</span><h4>x</h4></td></tr>');
})


// Insert a new tr when editing td and enter keystroke occurs
// TODO Make this affect new item rows also
	$(this).find('#list').on("keypress", 'li', (function(event){
	var keycode = (event.keycode ? event.keycode : event.which);
	if (keycode =='13'){
		// console.log('hey!');
 		event.preventDefault();
 		// console.log('hey!');
 		// $('#list').after('<tr><td class="list_item"><input type="checkbox" name="item"  value ="New Item"> <span contenteditable="true">New Item</span><h4>x</h4></td></tr>');
 		$('#li_clone').clone().appendTo('#list').show();
 	} //internal if
  }) //keypress function
); // on

	// $(this).find('#list li span').keypress(function(event){
	// var keycode = (event.keycode ? event.keycode : event.which);
	// if (keycode =='13'){
 // 		event.preventDefault();
 // 		$('#list').after('<tr><td class="list_item"><input type="checkbox" name="item"  value ="New Item"> <span contenteditable="true">New Item</span><h4>x</h4></td></tr>');
 // 	}; //internal if
 //  }); //keypress function



// Show h4 upon rollover of each li, underline span on rollover
$(this).find('#list').on({
	mouseenter:function(){
		$(this).find('h4').removeClass('toggle');
		$(this).find('span').addClass('hover_span');
	},
	mouseleave:function(){
		$(this).find('h4').addClass('toggle');
		$(this).find('span').removeClass('hover_span');
	}
}, 'li'); //hover
	

//Remove li when h4 is clicked
$(this).find('#list').on('click', 'h4', (function(event){
	$(this).parent().hide();
	console.log('wtf');
})
);

// $(this).find('h4').on('click', (function(event){
// 	$(this).parent().addClass('toggle');
// })
// );

// Underline #clear and #remove when you hover over them
$('#clear').hover(
	function() {
		$(this).find('span').addClass('hover_span')
	}, function() {
		$(this).find('span').removeClass('hover_span')
});

$('#remove').hover(
	function() {
		$(this).find('span').addClass('hover_span')
	}, function() {
		$(this).find('span').removeClass('hover_span')
});

// Remove all li when "Clear list" is clicked
$('#clear').click(function(){
	var response= confirm("Are you sure you want to reset the list?");
	if (response==true) {
		$('#list li').remove();
	} else {};	
})

// Remove all checked li when Remove Checked is clicked
$('#remove').click(function(){
	$('#list li input:checked').parent().remove();
});

}); // doc ready



