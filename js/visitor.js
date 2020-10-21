$(function() {
$.ajax({
url: window.location.origin+'/dps/Home/visitorCounter', 
dataType: 'html',
cache: false
}).done(function(data) { 
$('#visitor1').html(data);
});
return false; });