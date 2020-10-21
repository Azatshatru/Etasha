$('body').addClass('homepage');

//rebuiltSlider();
//function rebuiltSlider() {
//    if ($(window).width() > 992) {
//        var $item = $('#mainslider .carousel-item');
//        var $wHeight = $(window).height();
//        $item.eq(0).addClass('active');
//        $item.height($wHeight);
//        $item.addClass('full-screen');
//        $('#mainslider .carousel-item img').each(function() {
//            var $src = $(this).attr('src');
//            var $color = $(this).attr('data-color');
//            $(this).parent().css({
//                'background-image': 'url(' + $src.replace(/\\/g, "/") + ')',
//                'background-color': $color
//            });
//            $(this).remove();
//        });
//        $(window).on('resize', function() {
//            $wHeight = $(window).height();
//            $item.height($wHeight);
//        });
//    }
//}



function qckform() {
    if (document.qckform.qname.value == "") {
        $(".valid_error[data-valmsg-for='qname']").text("×");
        $(".valid_error[data-valmsg-for='qname']").parent().addClass("has-error");
        document.qckform.qname.focus();
        return false;
    } else {
        $(".valid_error[data-valmsg-for='qname']").text("✔");
        $(".valid_error[data-valmsg-for='qname']").parent().removeClass("has-error").addClass("has-success");
    }
    if (document.qckform.qmobile.value == "") {
        $(".valid_error[data-valmsg-for='qmobile']").text("×");
        $(".valid_error[data-valmsg-for='qmobile']").parent().addClass("has-error");
        document.qckform.qmobile.focus();
        return false;
    } else {
        $(".valid_error[data-valmsg-for='qmobile']").text("✔");
        $(".valid_error[data-valmsg-for='qmobile']").parent().removeClass("has-error").addClass("has-success");
    }
	var testresult;
    if (document.qckform.qemail.value == "") {
        $(".valid_error[data-valmsg-for='qemail']").text("×");
        $(".valid_error[data-valmsg-for='qemail']").parent().addClass("has-error");
        
        document.qckform.qemail.focus();
        return false;
    }
    else {
        var string = document.qckform.qemail.value;
        var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        if (filter.test(string)) {
            testresult = true;
            
            $(".valid_error[data-valmsg-for='qemail']").text("✔");
            $(".valid_error[data-valmsg-for='qemail']").parent().removeClass("has-error").addClass("has-success");
        }
        else {
            $(".valid_error[data-valmsg-for='qemail']").text("×");
            $(".valid_error[data-valmsg-for='qemail']").parent().addClass("has-error");
            
            document.qckform.qemail.value = "";
            document.qckform.qemail.focus();
            return false;
        }
    }

    if (document.qckform.qcity.value == "") {
        $(".valid_error[data-valmsg-for='qcity']").text("×");
        $(".valid_error[data-valmsg-for='qcity']").parent().addClass("has-error");
        document.qckform.qcity.focus();
        return false;
    } else {
        $(".valid_error[data-valmsg-for='qcity']").text("✔");
        $(".valid_error[data-valmsg-for='qcity']").parent().removeClass("has-error").addClass("has-success");
  	}
	if (document.qckform.qmsg.value == "") {
        $(".valid_error[data-valmsg-for='qmsg']").text("×");
        $(".valid_error[data-valmsg-for='qmsg']").parent().addClass("has-error");
        document.qckform.qmsg.focus();
        return false;
    } else {
        $(".valid_error[data-valmsg-for='qmsg']").text("✔");
        $(".valid_error[data-valmsg-for='qmsg']").parent().removeClass("has-error").addClass("has-success");
  	}
}
		
$("#qckform").submit(function(event) {
    if (qckform() != false) {
        $("#qckform .imgloader").css("display", "block");
        event.preventDefault();
        var $form = $(this),
		url = $form.attr('action');
        $("#qinqValid").val('validData');
        var posting = $.post(url, {
            fname: $('#qname').val(),
            qmobile: $('#qmobile').val(),
            qemail: $('#qemail').val(),
            qcity: $('#qcity').val(),
            qmsg: $('#qmsg').val(),
            qinqValid: $('#qinqValid').val(),
            qspmCheckr: $('#qspmCheckr').val(),
        });
        posting.done(function(data) {
            $(".imgloader").css("display", "none");
			$(".callbackalert").html(data);
            $("#qckform .alert").css("display", "block");
            $("input, textarea").val('');
			$(".form-group .input-group").removeClass('has-error');
			$(".form-group, .input-group").removeClass('has-success');
        });
    } else {
        $(".imgloader").css("display", "none");
        return false;
    }
});