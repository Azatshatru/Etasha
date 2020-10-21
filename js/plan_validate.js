$("#plan_inquiry").submit(function (event) {
   
    if(validate() != false) {
		
		
		event.preventDefault();
		
        $.ajax({
		method: 'POST',
        url: window.location.origin+'/Contacts/visit',
        dataType: 'html',
		 data:{
			name: $('#name1').val(),
			organisation: $('#organisation').val(),
			age: $('#age1').val(),
			profession: $('#profession1').val(),
			visit_purpush: $('#visit_purpose').val(),    
			about_first: $('#about1').val(),    
			comment: $('#comments1').val(), 
			day: $('#day').val(), 
			month: $('#month').val(), 
			year: $('#year').val(), 
           },
        cache: false,
        beforeSend: function() {
            $('#ajax-indicator').fadeIn();
			$('#loader').show();
        }
    }).done(function(data) {  
       $(".inquiryResponse").html(data);
			$("#loader").css("display", "none");
			$("#plan_inquiry .alert").css("display", "block");
			$("input, textarea, select").val('');
			$(".form-group .input-group").removeClass('has-error');
			$(".form-group, .input-group").removeClass('has-success');
    });
        /* var $form = $(this),
        url = $form.attr('action'); 
        $("#loader").css("display", "block");
		var posting = $.post(url, 
		{ 
			name1: $('#name1').val(),
			email: 'sonia@ifwworld.com',
			organisation: $('#organisation').val(),
			age1: $('#age1').val(),
			profession: $('#profession').val(),
			visit_date: $('#visit_date').val(),    
			visit_purpose: $('#visit_purpose').val(),    
			about1: $('#about1').val(),    
			weinqValid: 'validData',
			comments1: $('#comments1').val(), 
			
		});

		posting.done(function (data) {
			$(".inquiryResponse").html(data);
			$("#loader").css("display", "none");
			$("#plan_inquiry .alert").css("display", "block");
			$("input, textarea").val('');
			$(".form-group .input-group").removeClass('has-error');
			$(".form-group, .input-group").removeClass('has-success');
		}); */
	}
	else {
		$("#loader").css("display", "none");
		return false;
    }
});



function validate() {
	
	if (document.plan_inquiry.name1.value == "") {
       
        $(".valid_error[data-valmsg-for='name1']").text("×");
        $(".valid_error[data-valmsg-for='name1']").parent().addClass("has-error");

        document.plan_inquiry.name1.focus();
        return false;
    }
    else {
        $(".valid_error[data-valmsg-for='name1']").text("✔");
        $(".valid_error[data-valmsg-for='name1']").parent().removeClass("has-error").addClass("has-success");
    }
	
	
	if (document.plan_inquiry.organisation.value == "") {

        $(".valid_error[data-valmsg-for='organisation']").text("×");
        $(".valid_error[data-valmsg-for='organisation']").parent().addClass("has-error");

        document.plan_inquiry.organisation.focus();
        return false;
    }
    else {
        $(".valid_error[data-valmsg-for='organisation']").text("✔");
        $(".valid_error[data-valmsg-for='organisation']").parent().removeClass("has-error").addClass("has-success");
    }
	
	
	if (document.plan_inquiry.day.value == "") {
       
        $(".valid_error[data-valmsg-for='day']").text("×");
        $(".valid_error[data-valmsg-for='day']").parent().addClass("has-error");

        document.plan_inquiry.day.focus();
        return false;
    }
    else { 
		if (document.plan_inquiry.day.value == "Select Day") {
       
        $(".valid_error[data-valmsg-for='day']").text("×");
        $(".valid_error[data-valmsg-for='day']").parent().addClass("has-error");

        document.plan_inquiry.day.focus();
        return false;
		}else{
        $(".valid_error[data-valmsg-for='day']").text("✔");
        $(".valid_error[data-valmsg-for='day']").parent().removeClass("has-error").addClass("has-success");
		}
    }
	if (document.plan_inquiry.month.value == "") {
       
        $(".valid_error[data-valmsg-for='month']").text("×");
        $(".valid_error[data-valmsg-for='month']").parent().addClass("has-error");

        document.plan_inquiry.month.focus();
        return false;
    }
    else {
		if (document.plan_inquiry.month.value == "Select Month") {
       
        $(".valid_error[data-valmsg-for='month']").text("×");
        $(".valid_error[data-valmsg-for='month']").parent().addClass("has-error");

        document.plan_inquiry.month.focus();
        return false;
		}else{
        $(".valid_error[data-valmsg-for='month']").text("✔");
        $(".valid_error[data-valmsg-for='month']").parent().removeClass("has-error").addClass("has-success");
		}
    }
	if (document.plan_inquiry.year.value == "") {
       
        $(".valid_error[data-valmsg-for='year']").text("×");
        $(".valid_error[data-valmsg-for='year']").parent().addClass("has-error");

        document.plan_inquiry.year.focus();
        return false;
    }
    else {
		if (document.plan_inquiry.year.value == "Select Year") {
       
        $(".valid_error[data-valmsg-for='year']").text("×");
        $(".valid_error[data-valmsg-for='year']").parent().addClass("has-error");

        document.plan_inquiry.year.focus();
        return false;
    }else{
        $(".valid_error[data-valmsg-for='year']").text("✔");
        $(".valid_error[data-valmsg-for='year']").parent().removeClass("has-error").addClass("has-success");
	}
    }
	if (document.plan_inquiry.visit_purpose.value == "") {

        $(".valid_error[data-valmsg-for='visit_purpose']").text("×");
        $(".valid_error[data-valmsg-for='visit_purpose']").parent().addClass("has-error");

        document.plan_inquiry.visit_purpose.focus();
        return false;
    }
    else {
        $(".valid_error[data-valmsg-for='visit_purpose']").text("✔");
        $(".valid_error[data-valmsg-for='visit_purpose']").parent().removeClass("has-error").addClass("has-success");
    }
	
	if(document.plan_inquiry.comments1.value == "") {

        $(".valid_error[data-valmsg-for='comments1']").text("×");
        $(".valid_error[data-valmsg-for='comments1']").parent().addClass("has-error");

        document.plan_inquiry.comments1.focus();
        return false;
    }
    else {
        $(".valid_error[data-valmsg-for='comments1']").text("✔");
        $(".valid_error[data-valmsg-for='comments1']").parent().removeClass("has-error").addClass("has-success");
    }
	
}