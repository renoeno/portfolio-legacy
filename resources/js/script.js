$(document).ready(function() {
   
    
    $(function() {
                $('.item-projeto').hover(
                function(){$(this).find('span.hover-text:hidden').css("display", "inline-block").fadeIn(300);},
                function(){$(this).find('span.hover-text:visible').css("display", "none").fadeOut(300);}
            );
    });
    
    $('.icon-arrow').mouseover(
        function(){
            var thisClass = $('.icon-arrow');
            thisClass.addClass('animated slideInDown');
            thisClass.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
                thisClass.removeClass('animated slideInDown');
            });            
    });
    
    $('.icon-arrow-2').mouseover(
        function(){
            var thisClass = $('.icon-arrow-2');
            thisClass.addClass('animated slideInUp');
            thisClass.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
                thisClass.removeClass('animated slideInUp');
            });            
    });

        
    /*
    $(".imagem-projetos").mouseover(function() {
       $(".imagem-projetos").fadeOut(200, function()
			{
			}); 
    });
    */
    
    
    /* Script do site do Mokafolio */
   
    /*
    
    $(document).ready(function()
    {
      //perform isotope to arrange thumbs
        $('#griddedImages').isotope(
      {
        itemSelector : '.isotope',
        layoutMode : 'masonry',
        masonry: {
          columnWidth: 230
        },
        onLayout: function( $elems, instance )
        {
          lazyLoad(); //after each relayout
        }
      }
      );

      //workitem out
      $(".workItem").mouseleave(function()
      {
        $("#fullscreenTitle").hide();
        $("#fullscreenTitle").css("font-size", prevFontSize);
        $("#fullscreenTitle").css("line-height", prevFontSize);
        $(this).siblings().stop(true, true);
        $(this).siblings().fadeIn(200);
      });

      //workitem hover
      $(".workItem").mouseenter(function()
      {
        $("#fullscreenTitle").html($(this).attr("data-title"));
        while ($("#fullscreenTitle").outerHeight() > $(window).height()) 
        {
          var currentFontSize = $("#fullscreenTitle").css("font-size");
          $("#fullscreenTitle").css("font-size", (parseFloat(currentFontSize) - 1) + "px");
          $("#fullscreenTitle").css("line-height", (parseFloat(currentFontSize) - 1) + "px");
        }
        $("#fullscreenTitle").show();
        $(this).siblings().stop(true, true);
        $(this).siblings().fadeOut(200);
      });

      //append the fullscreen title div
      $("body").append('<div id="fullscreenTitle"> </div>');
      prevFontSize = $("#fullscreenTitle").css("font-size");
      $("#fullscreenTitle").hide();
    });
    
    */

    
});