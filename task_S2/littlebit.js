$(function(){

	var boxWidth = 216;
	var dblBoxWidth = 442;
	
	var curCol = 1;
	var colOneLeft = 0;
	var colTwoLeft = boxWidth+10;
	var colThreeLeft = colTwoLeft+boxWidth+10;
	var colOneTop = 0;
	var colTwoTop = 0;
	var colThreeTop = 0;
	
	$(".infobox").each(function(){
		var curHeight = $(this).outerHeight();
		
		if(curCol == 1){
			$(this).css("left", colOneLeft + "px");
			$(this).css("top", colOneTop + "px");
			colOneTop += curHeight + 10;
			curCol = 2;
		}
		else if(curCol == 2){
			$(this).css("left", colTwoLeft + "px");
			$(this).css("top", colTwoTop + "px");
			colTwoTop += curHeight + 10;
			curCol = 3;
		}
		else{
			$(this).css("left", colThreeLeft + "px");
			$(this).css("top", colThreeTop + "px");
			colThreeTop += curHeight + 10;	
			curCol = 1;
		}
	});
	
	
	// main_part->height()
	if(colOneTop>colTwoTop){
		if(colOneTop>colThreeTop){
			$(".main_part").css("height", colOneTop);
		}
		else{
			$(".main_part").css("height", colThreeTop);
		}
	}
	else{
		if(colTwoTop>colThreeTop){
			$(".main_part").css("height", colTwoTop);
		}
		else{
			$(".main_part").css("height", colThreeTop);
		}
	}
	
});
