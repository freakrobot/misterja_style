(function ($) {
    $.fn.extend({
        qmTabs: function (container) 
		{	
			var tabs = $(this).children().children(".tabs");
			var center_div = $(this).children(".bottom-2-content");
			var right_div = $(this).children(".bottom-2-right");
	
			
			$(tabs).children("li").each(function (index) {
                $(this).click( function () {
					$(this).parent().children().children("a").attr("class", "");
                    $(this).children("a").addClass('selected');
                    $(center_div).children('ul').hide().eq(index).show();
					$(right_div).children('ul').hide().eq(index).show();
                });
            });
			
        },
		qmTabInit: function(container, index)
		{
			//alert("Welcome i.ndex=" + index);
			var tabs = $(this).children().children(".tabs");
			var center_div = $(this).children(".bottom-2-content");
			var right_div = $(this).children(".bottom-2-right");

			$(tabs).children("li").eq(index).children("a").removeClass().addClass('selected');
			$(center_div).children('ul').hide();
			$(center_div).children('ul').eq(index).show();
			$(right_div).children('ul').hide();
			$(right_div).children('ul').eq(index).show();
		}
    });
})(jQuery);

