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
        timestamp = Math.round((curDate).getTime() / 1000);
        dates[i] = [curDate.getFullYear(), curDate.getMonth(), curDate.getDate(), curDate.getHours(), curDate.getMinutes(), timestamp];
      }
      var dataReady = true;
      for(var i=0; i<datesQty-1; i++){
        if(dates[i][5] > dates[i+1][5]){
          response = 'Ошибка данных.';
          dataReady = false;
        }
      }
      if(dataReady){
        var firstDate = dates[0];
        var lastDate = dates[datesQty-1];
        var curYear = new Date().getFullYear();
        if(firstDate[0] != lastDate[0]){
          response = monthName[firstDate[1]]+" "+firstDate[2]+" "+firstDate[0]+" - "+monthName[lastDate[1]]+" "+lastDate[2]+" "+lastDate[0];
        }
        else{
          if(firstDate[1] != lastDate[1]){
            response = monthName[firstDate[1]]+" "+firstDate[2];
            response += " - ";
            response += monthName[lastDate[1]]+" "+lastDate[2]+((firstDate[0] != curYear)?" "+firstDate[0]:'');
          }
          else{
            if(firstDate[2] == lastDate[2]){
              response = monthName[firstDate[1]]+" "+firstDate[2];
              response += ((firstDate[0] != curYear)?" "+firstDate[0]:'');          
            }
            else{
              response = monthName[firstDate[1]]+" "+firstDate[2];
              response += " - ";
              response += lastDate[2]+((firstDate[0] != curYear)?" "+firstDate[0]:'');
            }
          }
        }
        var between = '';
        var diff = lastDate[5] - firstDate[5];
        between = timeBetween(diff);
        response += ", "+between;
      }
      $(this).html(response);
    });
  };
})(jQuery);
