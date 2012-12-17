$(function(){
	var boxWidth = 216;
	var curCol = 1;
	var colOneLeft = 0;
	var colTwoLeft = boxWidth+10;
	var colThreeLeft = colTwoLeft+boxWidth+10;
	var colOneTop = 0;
	var colTwoTop = 0;
	var colThreeTop = 0;
	var boxes = $(".infobox");
	/*var sumHeight = 0;
	var blocksQty = boxes.length;
	boxes.each(function(){
		sumHeight += $(this).outerHeight();
	});
	var avgHeight = Math.round(sumHeight/blocksQty);*/
	// 1
	var boxesOrder = new Array;
	var i = 0;
	$(".big").each(function(){		
		boxesOrder[i*3] = [$(".infobox").index(this),'b'];
		boxesOrder[i*3+1] = ['b'];
		i++;
	});
	
	boxes.each(function(){
		if($(this).hasClass("big"))	return;
		for(var i=0;;i++){
			if(boxesOrder[i] == null){
				boxesOrder[i] = [$(".infobox").index(this),'s'];
				break;
			}
			else{
				continue;
			}
		}
	});
	// 2
	var heightLimit = 150;
	$.each( boxesOrder, function(i, obj){
		if(obj[0] != 'b'){
			
			thisObj = $(".infobox").eq(obj[0]);
			var curHeight = thisObj.outerHeight();
			if(curCol == 1){
				thisObj.css("left", colOneLeft + "px");
				thisObj.css("top", colOneTop + "px");
				colOneTop += curHeight + 10;
				if(boxesOrder[i+1][0] != 'b'){
					curCol = 2;
				}
				else{
					curCol = 3;
					colTwoTop += curHeight + 10;
				}
			}
			else if(curCol == 2){
				thisObj.css("left", colTwoLeft + "px");
				thisObj.css("top", colTwoTop + "px");
				colTwoTop += curHeight + 10;
				if((colOneTop - colTwoTop) > heightLimit){
					curCol = 2;
				}
				else{
					curCol = 3;
				}
			}
			else{
				thisObj.css("left", colThreeLeft + "px");
				thisObj.css("top", colThreeTop + "px");
				colThreeTop += curHeight + 10;	
				if((colTwoTop - colThreeTop) > heightLimit){
					curCol = 3;
				}
				else{
					curCol = 1;
				}
			}
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
