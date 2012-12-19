(function($){
  jQuery.fn.tooltip = function( options ){
    var settings = {
      'timeout' : 1000
    };    
    return this.each(function(){
      if ( options ) {
        $.extend( settings, options );
      }
      var ttID;
      var classID;
      jQuery(this).mouseover(function(e){
        jQuery(".tooltip_box").remove();
        ttID = "id"+Math.floor((Math.random()*10000)+1);
        classID = '.'+ttID;
        var arrClass = "arr_up";
        jQuery("body").append("<div class=\"tooltip_box "+ ttID +"\"></div>");
        
        var newHTML = jQuery(this).attr('tt');
        jQuery(classID).html(newHTML);
        
        var tooltipWidth = jQuery(classID).outerWidth();
        var tooltipHeight = jQuery(classID).outerHeight();
        
        var pageWidth = jQuery('body').width();
        
        var elemTop = jQuery(this).position().top;
        var elemLeft = jQuery(this).position().left;
        
        var elemWidth = jQuery(this).outerWidth();
        var elemHeight = jQuery(this).outerHeight();
        if(e.pageY < 200){
          if ( e.pageX < 200 ){
            arrClass = 'arr_left';
            
            jQuery(classID).css('top',( elemTop + elemHeight/2 - tooltipHeight/2 ) + 'px');
            jQuery(classID).css('left',( elemLeft + elemWidth + 10) + 'px');
          }
          else if(e.pageX > pageWidth-200){
            arrClass = 'arr_up';
            jQuery(classID).css('top', (elemTop + elemHeight + 5) + 'px');
            jQuery(classID).css('left', (elemLeft + elemWidth/2 - (tooltipWidth/2)) + 'px');        
          }
          else{
            arrClass = 'arr_up';
            jQuery(classID).css('top', (elemTop + elemHeight) + 'px');
            jQuery(classID).css('left', (elemLeft + elemWidth/2 - (tooltipWidth/2)) + 'px');
          }
        }
        else{
          if ( e.pageX < 200 ){
            arrClass = 'arr_left';
            jQuery(classID).css('top',( elemTop + elemHeight/2 - tooltipHeight/2 ) + 'px');
            jQuery(classID).css('left',( elemLeft + elemWidth + 10) + 'px');
          }
          else if(e.pageX > pageWidth-200){
            arrClass = 'arr_right';
            jQuery(classID).css('top',( elemTop + elemHeight/2 - (tooltipHeight/2) ) + 'px');
            jQuery(classID).css('left',( elemLeft - tooltipWidth) + 'px');
          }
          else{
            arrClass = 'arr_down';
            jQuery(classID).css('top', (elemTop - tooltipHeight - 5) + 'px');
            jQuery(classID).css('left', (elemLeft + elemWidth/2 - (tooltipWidth/2)) + 'px');
          }        
        }
        jQuery(classID).append("<div class=\""+arrClass+"\"></div>");
        if(arrClass === 'arr_left' || arrClass === 'arr_right'){
          jQuery("."+arrClass).css('top', tooltipHeight/2-5 + 'px');
        }
        else{
          jQuery("."+arrClass).css('left', tooltipWidth/2-5 + 'px');
        }
        jQuery(classID).css({'display':'block'}).animate({opacity:1}, settings.timeout, function(){});
      })
      .mouseout(function(){
        jQuery(classID).animate({opacity:0}, settings.timeout, function(){
          jQuery(classID).remove();
        });
        
      });
    });    
  };
})(jQuery);
