$(document).ready(function() {

// $('#list span').click(function(){
// 	$(this).dblClick(function(){

// 	});
// });

// Add class .checked for strikethrough when item is checked
 $('#list td input').change(function() {
		if (this.checked) {
			$(this).parent().addClass('checked');
		} else {
			$(this).parent().removeClass('checked');
		};// internal if
}); // change listener


// $('.arrow-down').click(function(){
// 	// Roll over arrow to insert tr
// })


// Insert a new tr when editing td and enter keystroke occurs
// TODO Make this affect new item rows also
	$('#list td span').keypress(function(event){
	var keycode = (event.keycode ? event.keycode : event.which);
	if (keycode =='13'){
 		event.preventDefault();
 		$('#list').after('<tr><td class="list_item"><input type="checkbox" name="item"  value ="New Item"> <span contenteditable="true">New Item</span><h4>x</h4></td></tr>');
 	}; //internal if
  }); //keypress function

// $('#list td').hover(function() {$('#list h4').show(); $('#list h4').hide();});



 


// var selectText = function(){
// 	this.execCommand('selectAll',false, null);
// };

}); // doc ready


