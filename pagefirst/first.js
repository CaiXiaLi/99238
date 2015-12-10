
$(document).ready(function() {
	
	 $("#linput").on("click", function() {
	 	var user = $("#user").val();
	 	var pass = $("#pass").val();
	 	
	 	if(user == "" || pass == ""){
	 		alert( "请输入！");
	 	}else{
	 		window.open("pageone/one.html")
	 	}
	 	
	})

	 $("#aclick").on("click", function(){
	 	console .log("123");
	 	$(".clicklogin").show();
	 	$("#aclick").hide();
	 })

})