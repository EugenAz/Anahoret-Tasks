$(function(){
	function doResize(){
		var lowerBottom = $("#content").offset().top + $("#content").height();
		var docHeight = $(document).height();
		var winHeight = $(window).height();
		var headerHeight = $("header").height();
		var goodHeight = 0;
		if(lowerBottom <= winHeight)
			goodHeight = winHeight - headerHeight;
		else
			goodHeight = lowerBottom;
		$("#line").css("height", goodHeight+"px");
		$("#g_wrapper").css("height", goodHeight+"px");
	}
	$(window).resize(function(){
		doResize();
	});
	doResize();
});