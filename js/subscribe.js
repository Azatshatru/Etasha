$(function() { 
$(".btn1").click(function (event) { 

	if($('#subscribe').val() == '') {
        $('#subscribe').css('border','1px solid red');
        $("#subscribe .valid_error[data-valmsg-for='email']").parent().removeClass('has-success').addClass('has-error');
        
        $('#subscribe').focus();
        return false;
    } else {
        var filter = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if(filter.test($('#subscribe').val())) {
            $('#subscribe').css('border','1px solid #2f5fad');
            $("#subscribe .valid_error[data-valmsg-for='email']").parent().removeClass('has-error').addClass('has-success');
        } else {
            $('#subscribe').css('border','1px solid red');
            $("#subscribe .valid_error[data-valmsg-for='email']").parent().removeClass('has-success').addClass('has-error');
            
            //$('#subscribe').val('');
            $('.inquiryResponse').html('Please enter valid email.');
            $('#subscribe').focus();
            return false;
        } 
    }
	
    $.ajax({
		method: 'POST',
        url: window.location.origin+'/Enquiries/subscribe',
        dataType: 'html',
		 data:{
			email:$('#subscribe').val(),
           },
        cache: false,
        beforeSend: function() {
            $('#ajax-indicator').fadeIn();
			$('.loader').show();
        }
    }).done(function(data) {  
       $('.inquiryResponse').html(data);
		$('.inquiryResponse').fadeIn('fast').delay(5000).fadeOut('fast');
		$('.loader').hide();
		$('#subscribe').val(' ');
    });
    
    return false;
	});

});