(function() {

// Localize jQuery variable
var jQuery;

/******** Load jQuery if not present *********/
var host = window.location.hostname;

if(host == 'www.bhumi.ngo'){
	
	if (window.jQuery === undefined) {	
		var script_tag = document.createElement('script');
	    script_tag.setAttribute("type","text/javascript");
	    script_tag.setAttribute("src",
	        "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.js");
	    if (script_tag.readyState) {
	      script_tag.onreadystatechange = function () { // For old versions of IE
	          if (this.readyState == 'complete' || this.readyState == 'loaded') {
	              scriptLoadHandler();
	          }
	      };
	    } else {
	      script_tag.onload = scriptLoadHandler;
	    }
	    // Try to find the head, otherwise default to the documentElement
	    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
	} else {
	    // The jQuery version on the window is the one we want to use
	    jQuery = window.jQuery;
	    main();
	}
}
else{
	if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.4.2.0') {
		var script_tag = document.createElement('script');
	    script_tag.setAttribute("type","text/javascript");
	    script_tag.setAttribute("src",
	        "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.js");
  
	    if (script_tag.readyState) {
	      script_tag.onreadystatechange = function () { // For old versions of IE
	          if (this.readyState == 'complete' || this.readyState == 'loaded') {
	              scriptLoadHandler();
	          }
	      };
	    } else {
	      script_tag.onload = scriptLoadHandler;
	    }
	    // Try to find the head, otherwise default to the documentElement
	    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
	} else {
	    // The jQuery version on the window is the one we want to use
	    jQuery = window.jQuery;
	    main();
	}
		
}

    

/******** Called once jQuery has loaded ******/
function scriptLoadHandler() {
    // Restore $ and window.jQuery to their previous values and store the
    // new jQuery in our local jQuery variable
    jQuery = window.jQuery.noConflict(true);
    // Call our main function
    main(); 
}

/******** Our main function ********/
function main() { 
	var starttime =  new Date();
    jQuery(document).ready(function($) {
        /******* Load CSS *******/       
	jQuery = jQuery.noConflict(true);
	    
	   var css_link = $("<link>", { 
            rel: "stylesheet", 
            type: "text/css", 
            href: "https://danamojo.org/dm/css/widget_style.css" 
        });
        css_link.appendTo('head');   
        
        var js_link = $("<script>", { 
        	type: "text/javascript",
            src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.js" 
        });
        js_link.appendTo('head');         
		
		var js_link_bs = $("<script>", { 
        	type: "text/javascript",
            src: "https://danamojo.org/dm/js/bootstrap.min.js" 
        });
        js_link_bs.appendTo('head'); 
        
        if(host == 'www.ideafoundation.org.in' || host == 'savethechildrenindia.org'){
	        var js1_link_bs = $("<script>", { 
	        	type: "text/javascript",
	            src: "http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" 
	        });
	        js1_link_bs.appendTo('head'); 
        }
        var uandi = document.referrer;
        if(uandi == 'http://uandi.org.in/' || host == 'uandi.strikingly.com'){
	        var js1_link_bs = $("<script>", { 
	        	type: "text/javascript",
	            src: "http://code.jquery.com/ui/1.10.3/jquery-ui.js" 
	        });
	        js1_link_bs.appendTo('head'); 
	        
        }
		
		 if(host == 'www.tamassociety.com'  || host == 'saahas.org' || host == 'www.prajayatna.org'){
	        var js1_link_bs = $("<script>", { 
	        	type: "text/javascript",
	            src: "https://code.jquery.com/jquery-1.11.3.js" 
	        });
	        
	        js1_link_bs.appendTo('head'); 
	        
		        var js_link_bs = $("<script>", { 
	        	type: "text/javascript",
	            src: "https://danamojo.org/dm/js/bootstrap.min.js" 
	        });
	        js_link_bs.appendTo('head'); 
	        
        }
                
        if(host == 'lks.co.in'){
	        var js_link_bs = $("<script>", { 
	        	type: "text/javascript",
	            src: "https://code.jquery.com/jquery-1.11.3.js" 
	        });	        
	        js_link_bs.appendTo('head'); 
        }
        
        if(host == 'www.mimaansa.org'){
        	
        	var js_link = $("<script>", { 
	        	type: "text/javascript",
	            src: "http://www.mimaansa.org/js/jquery-1.7.min.js" 
	        });	        
	        js_link.appendTo('head');
        	
	        var js_mima = $("<script>", { 
	        	type: "text/javascript",
	            src: "http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" 
	        });	        
	        js_mima.appendTo('head'); 
        }
        
     
        if(host == 'prastutee.org'){       
        	
	        var js_link_bs = $("<script>", { 
	        	type: "text/javascript",
	            src: "http://prastutee.org/js/jquery-migrate.min.js" 
	        });	        
	        js_link_bs.appendTo('head');
	        
	        var js_link_agewell = $("<script>", { 
	        	type: "text/javascript",
	            src: "http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" 
	        });	        
	        js_link_agewell.appendTo('head');
	        
        }
        
        if(host == 'www.agewellfoundation.org'){
	        var js_link_bs = $("<script>", { 
	        	type: "text/javascript",
	            src: "http://www.agewellfoundation.org/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.2.1" 
	        });	        
	        js_link_bs.appendTo('head');
	         
	        var js_link_agewell = $("<script>", { 
	        	type: "text/javascript",
	            src: "http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" 
	        });	        
	        js_link_agewell.appendTo('head');
        }
        
        if(host == 'muskanfoundation.org.in'){        	
        	
	        var js_link_bs = $("<script>", { 
	        	type: "text/javascript",
	            src: "http://muskanfoundation.org.in/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.2.1" 
	        });	        
	        js_link_bs.appendTo('head');
	        
	        var js_link_muskan = $("<script>", { 
	        	type: "text/javascript",
	            src: "https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js" 
	        });	        
	        js_link_muskan.appendTo('head');
        }
        
        if(host == 'www.diyafoundation-india.org'){ 
	        var js_link_muskan = $("<script>", { 
	        	type: "text/javascript",
	            src: "https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js" 
	        });	        
	        js_link_muskan.appendTo('head');
	        
	         var js_link_bs = $("<script>", { 
	        	type: "text/javascript",
	            src: "http://www.diyafoundation-india.org/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1" 
	        });	        
	        js_link_bs.appendTo('head');
        }
        
         if(host == 'sathi-india.org'){        	
        	
	        var js_link = $("<script>", { 
	        	type: "text/javascript",
	            src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.7/jquery.min.js" 
	        });	        
	        js_link.appendTo('head');
	        
	        var js_link_si = $("<script>", { 
	        	type: "text/javascript",
	            src: "http://sathi-india.org/wp-content/plugins/LayerSlider/js/jquery-easing-1.3.js?ver=1.3.0" 
	        });	        
	        js_link_si.appendTo('head');
        }
        
        if(host == 'safecity.in' || host == 'www.questalliance.in' || host == 'www.vacha.org.in' || host == 'www.evad.org.in'  || host == 'www.sspindia.org' || host == 'www.clapindia.org'){  
	        var js_link_sc = $("<script>", { 
	        	type: "text/javascript",
	            src: "https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js" 
	        });	        
	        js_link_sc.appendTo('head');
        }
        
        if(host == 'www.cmcaindia.org' || host == 'parivartansandeshfoundation.com' || host == 'archonrehab.org' || host == 'www.vacha.org.in' || host == 'www.chhaseindia.org'){         
	        var js_link_sc = $("<script>", { 
	        	type: "text/javascript",
	            src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.js" 
	        });	        
	        js_link_sc.appendTo('head');
        }
        
        if(host == 'www.parivartansandeshfoundation.com'){        	
        	
	        var js_link = $("<script>", { 
	        	type: "text/javascript",
	            src: "https://www.parivartansandeshfoundation.com/media/jui/js/jquery.min.js" 
	        });	        
	        js_link.appendTo('head');
	        
	        var js_link_b = $("<script>", { 
	        	type: "text/javascript",
	            src: "https://www.parivartansandeshfoundation.com/templates/at_services/js/bootstrap.min.js" 
	        });	        
	        js_link_b.appendTo('head'); 
	        
        } 
        
        if(host == 'shikshatrust.org'){       	
        	 var js_link_sc = $("<script>", { 
	        	type: "text/javascript",
	            src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.js" 
	        });	        
	        js_link_sc.appendTo('head');
	        
	        var js_link = $("<script>", { 
	        	type: "text/javascript",
	            src: "https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js" 
	        });	        
	        js_link.appendTo('head'); 
	        
        } 
         		       
		var sw = parseInt(window.screen.width);        
        var ngoId = $('#ngoContentContainer').attr('iNGOId');        
        var dispalyType = $('#ngoContentContainer').attr('oDisplay');
        
         var sourceType = $('#ngoContentContainer').attr('sourceType');
         if(typeof sourceType === 'undefined')
			sourceType = 0;//website
        else
        	sourceType = 2;//branded page
        
        var products = $('#ngoContentContainer').attr('iProductId');
        if(typeof products === 'undefined'){
			products = '';
		}
		
		/*var retryMail = $('#ngoContentContainer').attr('retryMail');
        if(typeof retryMail === 'undefined'){
			retryMail = '';
		}*/
		
		var refererUrl = (window.location != window.parent.location) ? document.referrer: document.location;	
		var iframeUrl = (window.location != window.parent.location) ? document.referrer: '';

		//console.log(refererUrl+"_0__"+iframeUrl+"_1_"+parent.document.location+"_2_"+parent.window.document.location+"_3_"+parent.window.location+"_4_"+parent.document.location.href);
		if(refererUrl == ''){
			refererUrl = parent.document.location.href;
		}

		var ifr_url = iframeUrl.split('/');
		var a = ifr_url.indexOf("ngo"); 
		var b = ifr_url.indexOf("trafficsignal"); 
 		if(a>0 || b>0){
			iframeUrl = '';
		}
		//var iframeUrl = document.referrer;
		
        if(typeof iframeUrl === 'undefined' || iframeUrl == ''){      	
			iframeUrl = '';
		}else{
			
			sourceType = 3;
		}		       
		
		//======================For Device Detection=====================================
		if(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i))
			var device = "Mobile";
		else if(navigator.userAgent.match(/iPad|iPod/i))
			var device = "Tablet";
		else
			var device = "Desktop";
			
			
		//==============To Set Cookie if empty======================
		var layout = getCookie('layoutType');
		if(layout==''){
			var oLayout = $('#ngoContentContainer').attr('oLayout');
						
			if(oLayout=='' || typeof oLayout === 'undefined'){
								
				var number = Math.floor(Math.random() * 2);
				
				if(number==1)
					setCookie('layoutType','GRID',30);
				else	
					setCookie('layoutType','LIST',30);
					
			}else{
				if(oLayout=='GRID')
					setCookie('layoutType','GRID',30);
				else if(oLayout=='LIST')	
					setCookie('layoutType','LIST',30);
			}		
		}
		
		var ip_country = getCookie('ip_country');
		//==============End Code To Set Cookie if empty======================	
		var currencyCode = getCookie('currencyCode');
		
		var layoutType = getCookie('layoutType');
		
        if(dispalyType == 'button'){
        	var buttonImage = $('#ngoContentContainer').attr('iCustomButtonImage');
        	if(buttonImage == 'yes'){				
				$('#dmScriptContainer a').attr("onclick", "donationProductsOverlay();");
			}
			else{
							
	        	$('#dmScriptContainer').html('<a href="#" onclick="donationProductsOverlay();"><img src="https://danamojo.org/dm/images/donate_btn_powered.png" alt="donate now"></a>'); 
		    }
		    
		   var url = "https://danamojo.org/dm/widget/productoverlay?ngoId="+ngoId+"&products="+products+"&layoutType="+layoutType+"&currencyCode="+currencyCode+"&ip_country="+ip_country+"&device="+device+"&sw="+sw+"&sourceType=1&refererUrl="+refererUrl;
			$.get(url, function(data, status){
		       $('#ngoContentContainer').html(data);
		       $("#loading_div").hide(); 
		       //===================================Set Client loadtime================================================		
		        $('#dmScriptContainer').show();
		       	 setTimeout(function(){       
		       		setloadtime(starttime,ngoId,refererUrl);
		       	 }, 2000);			
				//======================================================================================================  
		    });
		    $("#loading_div").hide(); 
		    $('#dmScriptContainer').show();		
		}else{// if(dispalyType == 'product'){
					
			var url = "https://danamojo.org/dm/widget/index?ngoId="+ngoId+"&products="+products+"&layoutType="+layoutType+"&currencyCode="+currencyCode+"&ip_country="+ip_country+"&device="+device+"&sw="+sw+"&sourceType="+sourceType+"&refererUrl="+refererUrl;        
	        $.get(url, function(data, status){
		        $('#ngoContentContainer').html(data);
		        $("#loading_div").hide(); 
		        //===================================Set Client loadtime================================================		       
		       	 setTimeout(function(){       
		       		setloadtime(starttime,ngoId,refererUrl);
		       	 }, 2000);		
				//======================================================================================================  	
		              
		    });
		    $("#loading_div").hide();
		}
		/*else{
			document.getElementById("ngoContentContainer").innerHTML="<center> <p style='color:#a94442;'>Please check your oDisplay type on script.</p></center>";
			$("#loading_div").hide(); 
		}*/
        
    });
}

})(); // We call our anonymous function immediately


function donationProductsOverlay(){	
var widget_content = $('#ngoContentContainer').html();
if(widget_content.length>1000){

	$('#productoverlay').modal({
	  keyboard: true,
	  backdrop:false
    });
    $("#loading_div").hide(); 
    
    $("#_navigation_state").val("0");
	$("#_payment_option").val("1");
	$("#_chequeDraftBankName").val("");
	$("#_chequeDraftNumber").val("");
	$("#_chequeDraftDate").val("");
	$("#_chkbxChequePickup").val("");
	$("#_trackingNumber").val("");
    
        
    $("#donor-data").removeClass("active");    
    $("#donor_data").removeClass("active");
	$("#donor-data").addClass("disabled"); 
	
	$("#payment-options").removeClass('active');
	$("#payment_options").removeClass('active');
	$("#payment-options").addClass('disabled');
	
	
	$("#confirmation-tab").removeClass('active');
	$("#confirmation").removeClass('active');
	$("#confirmation-tab").addClass('disabled');
	
	$("#product-list").removeClass("disabled"); 
    $("#product-list").addClass("active");
   	$("#product_list").addClass("active"); 
    
    $("#payment_options").hide();
	$("#donor_data").hide();
	$("#confirmation").hide();
	$("#product_list").show();  
	$("#customDonationInfoId").val("");    
	
	$("#product-list a").removeAttr("style");
	
	
	var donationProductNGOId = $('.donationProductNGOId_0').val();
	var baseUrl = $("#customBaseUrl").text();	
	var refererUrl = $("#donationinfo-iframeurl").val();
	var data = {'refererUrl' : refererUrl,'ngoId' : donationProductNGOId}
	$.ajax({
		   url: baseUrl+'/button-logs',
		   type: 'POST',
		   data:data,
		   error: function() {
		      
		   },
		   async:    false,
		   success: function(response) {
		   	return true;
		   }
	});	 

}else{
		alert("Please note that the page has not loaded completely. This may happen if you are over a slow Internet connection. We request you to wait for awhile for the page to load. If you are yet facing a problem, please refresh the page by clicking Ctrl+F5 to load the page completely.");
}	
    
    var currency_code = $('#currency_dropdown').val();
	if(currency_code == 'INR'){
		$("[custom_curr_att]").hide();
		$('.inr_fade_cls,.inr_fade_cls span').css("color", "#333333"); 
		$('.inr_fade_grid_cls,.inr_fade_grid_cls span').css("color", "#4a9111"); 
		$('.inr_fade_cls,.inr_fade_cls span').css('font-size', '17px');
		$('.inr_fade_grid_cls,.inr_fade_grid_cls span').css('font-size', '17px');  
		
		$('.cls-mobile-hide').hide();
	}else{
		$("[custom_curr_att]").show();
		$('.inr_fade_cls,.inr_fade_cls span').css("color", "#c4bcbc"); 
		$('.inr_fade_grid_cls,.inr_fade_grid_cls span').css("color", "#b8dd99"); 
		$('.inr_fade_cls,.inr_fade_cls span').css('font-size', '15px');
		$('.inr_fade_grid_cls,.inr_fade_grid_cls span').css('font-size', '15px'); 
		
		$('.cls-mobile-hide').show();
	}	
	
	$('.total-price-font-cls span').css('font-size', '20px'); 
	  
}

function setloadtime(starttime,ngoId,refererUrl){
	var endtime = new Date(); 		    	
	var clientLoadTime = (endtime-starttime)/1000;
	var serverLoadTime = $('#serverLoadTime').text();
	var start_date = $('#start_date').text();
	var end_date = $('#end_date').text();
	
	var url = "https://danamojo.org/dm/widget/setloadtime?ngoId="+ngoId+"&clientLoadTime="+clientLoadTime+"&serverLoadTime="+serverLoadTime+"&start_date="+start_date+"&end_date="+end_date+"&refererUrl="+refererUrl;     
	$.get(url, function(data, status){
		//alert(data);	
	});	 	    
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
} 