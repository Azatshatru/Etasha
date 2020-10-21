$(document).ready(function () {
	var touch = $('#resp-menu');
	var menu = $('.menu');
	var overlay = $('.overlay');
	$(touch).on('click', function (e) {
		e.preventDefault();
		menu.toggleClass('openmenu');
		overlay.fadeToggle();
		$('body').toggleClass('bodyoh');
	});
	$(window).resize(function () {
		var w = $(window).width();
		if (w > 767 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
	$(overlay).on('click', function (e) {
		menu.removeClass('openmenu');
		overlay.fadeOut();
		$('body').removeClass('bodyoh');
	});
});


$(document).on('click', '.has_droparrow > a', function () {
    $('.has_droparrow ul').css('display','none');
    $(this).parent().find('ul:first').toggle();
});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
        $("#siteheader").addClass("fxd");
    } 
	else {
        $("#siteheader").removeClass("fxd");
		
    }
});

$(document).ready(function() {
    $(".navbar-toggler").click(function(event) {
        $("#mainmenu").addClass("showmenu");
        $(".overlay").fadeIn();
		$("body").addClass("oh");
    });
    $(".overlay").click(function(event) {
        $("#mainmenu").removeClass("showmenu");
        $(this).fadeOut();
		$("body").removeClass("oh");
    });
});

//Go to top
if ($('#back-to-top').length) {
    var scrollTrigger = 100,
        backToTop = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function() {
        backToTop();
    });
    $('#back-to-top').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

$(function(){
  	$('#announcements').marquee({direction:'horizontal', delay:0, timing:50});
});
if ($(window).width() < 768) {
		var anwrp = $(".anwrp");
		var tmp1 = anwrp.children().clone();
		var parent = anwrp.parent();
		anwrp.remove();
		tmp1.appendTo(parent);
	}



$(document).ready(function(){

$(document).ready(function() {
  $('.imagesgal').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('') + '';
      }
    }
  });
});




            $(document).ready(function() {
              var owl = $('.owl-carousel-3');
              owl.owlCarousel({
                autoplay: 1000,
                slideSpeed: 100,
                autoplayHoverPause:false,
                nav: true,
                loop: true,
                margin: 0,
                responsive: {
                  0: {
                    items: 2
                  },
                  600: {
                    items: 3
                  },
                  767: {
                    items: 3
                  },
                  992: {
                    items: 4
                  },
                  1000: {
                    items: 5
                  }
                }
              })
            })
          

         
            $(document).ready(function() {
              var owl = $('.owl-carousel-2');
              owl.owlCarousel({
                autoplay:true,
                dots: false,
                autoplayHoverPause:false,
                loop: true,
                nav: true,
                margin: 0,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 1
                  },
                  1000: {
                    items: 1
                  }
                }
              })
            })
          

    
    $(function(){
      $(".menubar i").click(function(){
        $(".hidden-menu").show();
      });
    });

    
    $(function(){
      $(".menubar i").click(function(){
        $(".whitespace").show();
      });
    });

   
    $(function(){
      $(".close").click(function(){
        $(".hidden-menu").hide();
      });
    });

    
    
    $(function(){
      $(".close").click(function(){
        $(".whitespace").hide();
      });
    });

    
    $(function(){
      $(".whitespace").click(function(){
        $(".whitespace").hide();
      });
    });

    
    
    $(".whatds").click(function(){
  $(".subdrop").slideToggle();
});

    
    
    $(".newsds").click(function(){
  $(".howdrop").slideToggle();
});

    
    $(".whosd").click(function(){
  $(".whodrop").slideToggle();
});

   
    
    $(".getin").click(function(){
  $(".getdrop").slideToggle();
});

    
    
    $(".resour").click(function(){
  $(".resdrop").slideToggle();
});

    
    
    $(".whitespace").click(function(){
  $(".hidden-menu").hide();
});

    

    
  

$(function () {
  $('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: true,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});



  jQuery(document).ready(function ($) {
   $(".scroll").click(function (event) {
   event.preventDefault();
   $('html,body').animate({
    scrollTop: $(this.hash).offset().top
    }, 900);
    });
    });
    
  
  $(document).ready(function() {
  $('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'video',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
});

   
   
  
$(function () {
  $('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: true,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});



$(document).ready(function(){
  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').slideToggle();
    e.stopPropagation();
    e.preventDefault();
  });
});


});