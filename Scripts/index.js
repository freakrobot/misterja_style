(function ($) {
    $.fn.extend({

        bm2Tabs: function (center_div_name) 
		{	
			//var tabs = $(this).children().children(".tabs");
			var tabs = $(this).find(".tabs");
			var center_div = $(this).children(center_div_name);
			var right_div = $(this).children(".bottom-2-right");
	
			
			$(tabs).children("li").each(function (index) {
                $(this).click( function () {
					//$(this).parent().children().children("a").attr("class", "");
					$(this).parent().children().children("a").removeClass("selected");
                    $(this).children("a").addClass('selected');
                    $(center_div).children('ul').hide().eq(index).show();
					$(right_div).children('ul').hide().eq(index).show();
                });
            });
			
        },
		bm2TabInit: function(center_div_name,index)
		{
			//alert("Welcome i.ndex=" + index);
			var tabs = $(this).find(".tabs");
			var center_div = $(this).children(center_div_name);
			var right_div = $(this).children(".bottom-2-right");

			$(tabs).children("li").eq(index).children("a").removeClass("selected").addClass('selected');
			$(center_div).children('ul').hide();
			$(center_div).children('ul').eq(index).show();
			$(right_div).children('ul').hide();
			$(right_div).children('ul').eq(index).show();
		},
		
		subItem: function (show_div) 
		{	
			var tabs = $(this);
			
			$(tabs).children("li").each(function (index) {
                $(this).mouseover( function () {
					//$(this).parent().children().children("a").attr("class", "");
					$(show_div).show();
					$(this).parent().children('li').removeClass("cur-item");
                    $(this).addClass('cur-item');
                    $(show_div).children('div').hide().eq(index).show();
                });
				$(this).mouseout( function () {
					$(show_div).hide();
					$(this).removeClass("cur-item");
				});
            });
			
        },
		subItemInit: function(show_div,index)
		{
			//alert("Welcome i.ndex=" + index);
			var tabs = $(this);
			
			$(show_div).hide();
			/*
			$(tabs).children("li").eq(index).removeClass("cur-item").addClass('cur-item');
			$(show_div).children('div').hide();
			$(show_div).children('div').eq(index).show();
			*/
		},
		
		itemHovered: function()
		{
			$(this).mouseover(function(){
				$(this).addClass("hovered");
				//$(this).find(".item-ext").show("normal");
			});
			$(this).mouseout(function(){
				$(this).removeClass("hovered");
				//$(this).find(".item-ext").hide("normal");
			});	
		}
    });
})(jQuery);

