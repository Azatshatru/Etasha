$("#inquiry").submit(function (event) {

    if(validates() != false) {
		//$("#inquiry .imgloader").css("display", "block");
		
		event.preventDefault();
       
		$.ajax({
		method: 'POST',
        url: window.location.origin+'/Contacts/getTouch',
        dataType: 'html',
		 data:{
			name: $('#name').val(),
			phone: $('#phone').val(),
			email: $('#emails2').val(),
			age: $('#age').val(),
			addres: $('#address').val(),    
			profession: $('#profession').val(),    
			sex: $('#sex').val(),    
			weinqValid: 'validData',
			about_first: $('#about_first').val(), 
			about_second: $('#about_second').val(), 
			comment: $('#comment').val(), 
           },
        cache: false,
        beforeSend: function() {
            $('#ajax-indicator').fadeIn();
			$('.loader').show();
        }
    }).done(function(data) {  
       $(".inquiryResponse").html(data);
			$(".loader").css("display", "none");
			$("#inquiry .alert").css("display", "block");
			$("input, textarea").val('');
			$(".form-group .input-group").removeClass('has-error');
			$(".form-group, .input-group").removeClass('has-success');
    });
       /*  var $form = $(this),
        url = $form.attr('action');
        $(".loader").css("display", "block");
		var posting = $.post(url, 
		{ 
			name: $('#name').val(),
			mobile: $('#phone').val(),
			email: $('#email').val(),
			age: $('#age').val(),
			address: $('#address').val(),    
			profession: $('#profession').val(),    
			sex: $('#sex').val(),    
			weinqValid: 'validData',
			about_first: $('#about_first').val(), 
			about_second: $('#about_second').val(), 
			comment: $('#comment').val(), 
		});

		posting.done(function (data) {
			$(".inquiryResponse").html(data);
			$(".loader").css("display", "none");
			$("#inquiry .alert").css("display", "block");
			$("input, textarea").val('');
			$(".form-group .input-group").removeClass('has-error');
			$(".form-group, .input-group").removeClass('has-success');
		}); */
	}
	else {
		$(".loader").css("display", "none");
		return false;
    }
});



function validates() {
	
	if (document.inquiry.name.value == "") {
       
        $(".valid_error[data-valmsg-for='name']").text("×");
        $(".valid_error[data-valmsg-for='name']").parent().addClass("has-error");

        document.inquiry.name.focus();
        return false;
    }
    else {
        $(".valid_error[data-valmsg-for='name']").text("✔");
        $(".valid_error[data-valmsg-for='name']").parent().removeClass("has-error").addClass("has-success");
    }
	
	var testresult;
    if (document.inquiry.emails2.value == "") {
        $(".valid_error[data-valmsg-for='emails2']").text("×");
        $(".valid_error[data-valmsg-for='emails2']").parent().addClass("has-error");
        
        document.inquiry.emails2.focus();
        return false;
    }
    else {
        var string = document.inquiry.emails2.value;
        var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        if (filter.test(string)) {
            testresult = true;
            
            $(".valid_error[data-valmsg-for='emails2']").text("✔");
            $(".valid_error[data-valmsg-for='emails2']").parent().removeClass("has-error").addClass("has-success");
        }
        else {
            $(".valid_error[data-valmsg-for='emails2']").text("×");
            $(".valid_error[data-valmsg-for='emails2']").parent().addClass("has-error");
            
            document.inquiry.emails2.value = "";
            document.inquiry.emails2.focus();
            return false;
        }
    }
	
	if (document.inquiry.phone.value == "") {

        $(".valid_error[data-valmsg-for='phone']").text("×");
        $(".valid_error[data-valmsg-for='phone']").parent().addClass("has-error");

        document.inquiry.phone.focus();
        return false;
    }
    else {
        $(".valid_error[data-valmsg-for='phone']").text("✔");
        $(".valid_error[data-valmsg-for='phone']").parent().removeClass("has-error").addClass("has-success");
    }
	
	
	

	if (document.inquiry.address.value == "") {

        $(".valid_error[data-valmsg-for='address']").text("×");
        $(".valid_error[data-valmsg-for='address']").parent().addClass("has-error");

        document.inquiry.address.focus();
        return false;
    }
    else {
        $(".valid_error[data-valmsg-for='address']").text("✔");
        $(".valid_error[data-valmsg-for='address']").parent().removeClass("has-error").addClass("has-success");
    }
	
	if(document.inquiry.comment.value == "") {

        $(".valid_error[data-valmsg-for='comment']").text("×");
        $(".valid_error[data-valmsg-for='comment']").parent().addClass("has-error");

        document.inquiry.comment.focus();
        return false;
    }
    else {
        $(".valid_error[data-valmsg-for='comment']").text("✔");
        $(".valid_error[data-valmsg-for='comment']").parent().removeClass("has-error").addClass("has-success");
     }
	
}