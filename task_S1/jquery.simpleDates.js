(function($){
  jQuery.fn.simpleDates = function(){
    function timeBetween(diff){
      var between = '';
      var uMin = 60;
      var uHour = 3600;
      var uDay = 86400;
      if(diff < uMin){
        between = diff + ' seconds';
      }
      else if(diff < uHour){
        between = Math.round(diff/uMin) + ' minute(s)';
      }
      else if(diff < uDay){
        between = Math.round(diff/uHour) + ' hour(s)';
      }
      else{
        between = Math.round(diff/uDay) + ' day(s)';
      }
      return between;
    }
    
    var monthName = [
      "January", 
      "February", 
      "March", 
      "April", 
      "May", 
      "June", 
      "July", 
      "August", 
      "September", 
      "October", 
      "November", 
      "December"
    ];
    
    return this.each(function(){
      var isoDates = $(this).attr('data-interval').split(',');
      var datesQty = isoDates.length;
      var response = '';
      var dates = new Array();
      var timestamp = 0;
      for(var i=0; i<datesQty; i++){
  	var curDate = new Date(isoDates[i]);
        dates[i] = {
		  year: curDate.getFullYear(),
		  month: curDate.getMonth(),
		  day: curDate.getDate(),
		  hour: curDate.getHours(),
		  minute: curDate.getMinutes(),
		  timestamp: Math.round((curDate).getTime() / 1000)
		};
      }
      var dataReady = true;
      for(var i=0; i<datesQty-1; i++){
        if(dates[i].timestamp > dates[i+1].timestamp){
          response = 'Ошибка данных.';
          dataReady = false;
        }
      }
      if(dataReady){
        var firstDate = dates[0];
        var lastDate = dates[datesQty-1];
        var curYear = new Date().getFullYear();
        if(firstDate.year != lastDate.year){
			
          response = monthName[firstDate.month]+" "+firstDate.day+" "+firstDate.year+" - "+monthName[lastDate.month]+" "+lastDate.day+" "+lastDate.year;
        }
        else{
          if(firstDate.month != lastDate.month){
            response = monthName[firstDate.month]+" "+firstDate.day;
            response += " - ";
            response += monthName[lastDate.month]+" "+lastDate.day+((firstDate.year != curYear)?" "+firstDate.year:'');
          }
          else{
            if(firstDate.day == lastDate.day){
              response = monthName[firstDate.month]+" "+firstDate.day;
              response += ((firstDate.year != curYear)?" "+firstDate.year:'');          
            }
            else{
              response = monthName[firstDate.month]+" "+firstDate.day;
              response += " - ";
              response += lastDate.day+((firstDate.year != curYear)?" "+firstDate.year:'');
            }
          }
        }
        var between = '';
        var diff = lastDate.timestamp - firstDate.timestamp;
        between = timeBetween(diff);
        response += ", "+between;
      }
      $(this).html(response);
    });
  };
})(jQuery);
